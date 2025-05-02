import React from "react"
import { Users, Lightbulb, Code, Clock } from "lucide-react"

const About: React.FC = () => {
  const qualities = [
    {
      icon: <Users size={24} />,
      title: "Team Player",
      description:
        "I thrive in collaborative environments, contributing ideas and supporting team goals.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solver",
      description:
        "I approach challenges with creative thinking and analytical solutions.",
    },
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description:
        "I write maintainable, scalable code following best practices and patterns.",
    },
    {
      icon: <Clock size={24} />,
      title: "Deadline Oriented",
      description:
        "I consistently deliver high-quality work within project timelines.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Get to know more about me, my background, and what I do.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-blue-100 dark:bg-blue-900/30 absolute inset-0 rounded-lg transform translate-x-4 translate-y-4 transition-colors duration-300"></div>
              <img
                src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Working on computer"
                className="rounded-lg shadow-lg relative z-10 w-full max-w-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              I'm a data enthusiast, a PG Diploma graduate in Big Data Analytics
              with a background in computer technology engineering. I’m
              passionate about turning raw data into actionable insights through
              scalable pipelines and applied machine learning.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
              Skilled in Python, SQL, Spark, and cloud tools, I’ve worked on
              real-world projects in predictive modeling and data visualization.
              While experienced in full stack development, my primary focus is
              on data engineering, analytics, and building intelligent systems
              that drive impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-blue-600 dark:text-blue-400 mr-4 transition-colors duration-300">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1 transition-colors duration-300">
                      {quality.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
