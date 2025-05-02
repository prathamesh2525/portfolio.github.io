import React, { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { projects, ProjectCategory } from "../data/projects"
import Button from "../components/Button"

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  )

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === "all"
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("de")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === "wd"
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Data Engineering
          </button>
          <button
            onClick={() => setActiveCategory("da")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === "da"
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Data Analysis
          </button>
          <button
            onClick={() => setActiveCategory("wd")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === "wd"
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Web Development
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
