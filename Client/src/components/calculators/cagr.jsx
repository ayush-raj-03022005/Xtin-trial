import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CAGRCalculator = () => {
  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [years, setYears] = useState("");
  const [cagr, setCagr] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  const calculateCAGR = () => {
    const P = parseFloat(initialValue);
    const F = parseFloat(finalValue);
    const N = parseFloat(years);

    if (P > 0 && F > 0 && N > 0) {
      const result = (Math.pow(F / P, 1 / N) - 1) * 100;
      setCagr(result.toFixed(2));

      const data = [];
      for (let i = 0; i <= N; i++) {
        const value = P * Math.pow(1 + result / 100, i);
        data.push({ year: i, value: value.toFixed(2) });
      }
      setChartData(data);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow mt-16 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-green-700">
            CAGR Calculator
          </h1>

          {/* Info Badge */}
          <div className="text-center mb-12">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-full shadow hover:bg-green-200 transition"
            >
              ℹ️ What is CAGR?
            </button>
            {showInfo && (
              <div className="mt-6 p-6 bg-white shadow rounded-lg text-gray-700 max-w-2xl mx-auto">
                CAGR (Compound Annual Growth Rate) is the rate at which an
                investment grows annually over a period of time, assuming profits
                are reinvested at the end of each period.
              </div>
            )}
          </div>

          {/* Calculator + Graph Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Calculator Section */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Enter Details</h2>
              <input
                type="number"
                placeholder="Initial Investment"
                value={initialValue}
                onChange={(e) => setInitialValue(e.target.value)}
                className="w-full mb-4 p-3 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Final Value"
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
                className="w-full mb-4 p-3 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Years"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full mb-6 p-3 border rounded-lg"
              />
              <button
                onClick={calculateCAGR}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
              >
                Calculate CAGR
              </button>

              {cagr && (
                <div className="mt-8 bg-green-50 p-6 rounded-lg">
                  <p className="text-lg font-medium">
                     CAGR: <span className="text-green-700">{cagr}%</span>
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    Initial Investment:{" "}
                    <span className="font-semibold">₹{initialValue}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Final Value:{" "}
                    <span className="font-semibold">₹{finalValue}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Graph Section */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Growth Over Time</h2>
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="year"
                      label={{ value: "Years", position: "insideBottom", dy: 10 }}
                    />
                    <YAxis
                      label={{ value: "Value (₹)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#16a34a"
                      strokeWidth={3}
                      dot
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-gray-500">
                  Enter details and calculate to see the graph.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CAGRCalculator;
