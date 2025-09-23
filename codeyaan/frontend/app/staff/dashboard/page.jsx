'use client';
import React, { useState } from 'react';

export default function DashboardPage() {
  const [formData, setFormData] = useState({
    courseName: '',
    courseDate: '',
    courseCode: '',
    courseFile: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = () => {
    console.log('Course data:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-violet-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Add New Course
          </h1>
          <p className="text-gray-600">Create and manage your courses easily</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="space-y-6">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Course Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  placeholder="Enter course name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* Course Date */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Course Date
                </label>
                <input
                  type="date"
                  name="courseDate"
                  value={formData.courseDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* Course Code */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Course Code
                </label>
                <input
                  type="text"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleInputChange}
                  placeholder="e.g., CS101, MATH201"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Course Materials
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="courseFile"
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                  />
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <textarea
                name="courseDescription"
                onChange={handleInputChange}
                placeholder="Brief description of the course..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                type="button"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}