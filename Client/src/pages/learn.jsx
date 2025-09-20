import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LearnPage = () => {
  const navigate = useNavigate();
  const [availableCourses, setAvailableCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    // Fetch Available Courses
    axios
      .get("/api/courses/available")
      .then((res) => {
        setAvailableCourses(res.data.data || []);
      })
      .catch((err) => console.error("Error fetching available courses:", err));

    // Fetch Purchased Courses (requires auth)
    const token = localStorage.getItem("token"); // store token after login
    if (token) {
      axios
        .get("/api/courses/purchased", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setPurchasedCourses(res.data.data || []);
        })
        .catch((err) =>
          console.error("Error fetching purchased courses:", err)
        );
    }
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn <span className="text-green-600">Finance</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Expand your financial knowledge with our comprehensive learning
            resources and guides.
          </p>
        </div>
      </section>

      {/* Purchased Courses */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Purchased Courses</h2>
        {purchasedCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasedCourses.map((course) => (
              <div
                key={course.courseId}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <button
                  onClick={() => navigate(`/courses/${course.courseId}`)}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full"
                >
                  Open Course
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            You have not purchased any courses yet.
          </p>
        )}
      </section>

      {/* Available Courses */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
        {availableCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map((course) => (
              <div
                key={course.courseId}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <p className="text-green-600 font-bold mt-2">
                  ₹{course.price}
                </p>
                <button
                  onClick={() => navigate(`/courses/${course.courseId}/purchase`)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
                >
                  Purchase Course
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No courses available right now.</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default LearnPage;
