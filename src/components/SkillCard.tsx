import React from 'react';
import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center">
      <div className="text-blue-500 dark:text-blue-400 mb-4">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {skill.name}
      </h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-3">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
        {skill.description}
      </p>
    </div>
  );
};

export default SkillCard;