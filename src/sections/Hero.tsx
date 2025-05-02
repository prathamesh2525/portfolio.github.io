import React from 'react';
import { Database, LineChart, Code, Brain } from 'lucide-react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-white dark:bg-gray-900 transition-all duration-300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Animated Icons Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12 animate-fade-in">
            <div className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <Database className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto animate-pulse-slow" />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <LineChart className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <Brain className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto animate-pulse-slow" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text animate-pulse">Prathamesh Madniwale</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Data Enthusiast
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Transforming raw data into meaningful insights and building robust data pipelines. 
              Passionate about data engineering, analytics, and machine learning.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Animated Background Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-2 h-2 bg-blue-600/30 dark:bg-blue-400/30 rounded-full animate-float" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
            <div className="absolute w-2 h-2 bg-purple-600/30 dark:bg-purple-400/30 rounded-full animate-float" style={{ top: '20%', right: '20%', animationDelay: '1s' }}></div>
            <div className="absolute w-2 h-2 bg-green-600/30 dark:bg-green-400/30 rounded-full animate-float" style={{ bottom: '30%', left: '30%', animationDelay: '2s' }}></div>
            <div className="absolute w-2 h-2 bg-pink-600/30 dark:bg-pink-400/30 rounded-full animate-float" style={{ bottom: '20%', right: '10%', animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;