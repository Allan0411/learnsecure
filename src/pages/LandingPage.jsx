import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate('/signin', { state: { is_teacher: true } });
  };

  const handleParentClick = () => {
    navigate('/signin', { state: { is_teacher: false } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* AppBar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">LearnSecure</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Smarter Schools with Video Intelligence
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Enhance classroom engagement and ensure student safety with real-time video analytics. Empower educators and reassure parents through smart insights and secure technology.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6">
          <button
            onClick={handleTeacherClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition"
          >
            I'm a Teacher
          </button>
          <button
            onClick={handleParentClick}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-2xl shadow hover:bg-gray-300 transition"
          >
            I'm a Parent
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
