import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`/api/courses/${courseId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setCourse(res.data.data || null);
        })
        .catch((err) => {
          console.error("Error fetching course details:", err);
          setError("Failed to load course details.");
        });
    }
  }, [courseId]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-20 px-6 md:px-12 lg:px-24 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-gray-600 mb-8">{course.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Video player */}
            <div className="md:col-span-2 border rounded-lg p-4">
              {selectedVideo ? (
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                />
              ) : course.videos && course.videos.length > 0 ? (
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Select a video to start learning
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-400 italic">
                  No videos available for this course.
                </div>
              )}
            </div>

            {/* Right: Course contents */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-xl font-bold mb-4">Course Contents</h2>

              {/* Slides */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Slides</h3>
                {course.slides && course.slides.length > 0 ? (
                  <ul className="space-y-2">
                    {course.slides.map((slide, index) => (
                      <li key={index}>
                        <a
                          href={slide}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >
                          📑 Slide {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">No slides available.</p>
                )}
              </div>

              {/* Videos */}
              <div>
                <h3 className="font-semibold mb-2">Videos</h3>
                {course.videos && course.videos.length > 0 ? (
                  <ul className="space-y-2">
                    {course.videos.map((video, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setSelectedVideo(video)}
                          className="text-green-600 hover:underline"
                        >
                          ▶ Video {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">No videos available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;

