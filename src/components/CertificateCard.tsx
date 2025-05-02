import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {certificate.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {certificate.issuer}
          </p>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <Calendar size={16} className="mr-1" />
          <span>{certificate.date}</span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {certificate.description}
      </p>
      
      {certificate.url && (
        <a 
          href={certificate.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300"
        >
          View Certificate
          <ExternalLink size={16} className="ml-1" />
        </a>
      )}
    </div>
  );
};

export default CertificateCard;