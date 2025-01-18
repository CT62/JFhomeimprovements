"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Folder, X, ChevronLeft } from 'lucide-react';

export default function Blog(){
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data - you'll replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      date: "January 2024",
      location: "Borris-in-Ossory",
      thumbnailImage: "/project2.png",
      images: [
        "/project2.png",
        "/project3.png",
        "/project4.png",
      ]
    },
    // Add more projects here
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Main Projects Grid */}
      {!selectedProject && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-48">
                  <Image
                    src={project.thumbnailImage}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Folder className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.date}</p>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
          <div className="min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center text-white mb-6">
                <button
                  onClick={closeProject}
                  className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                  <span>Back to Projects</span>
                </button>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={closeProject}
                  className="p-2 hover:text-red-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
