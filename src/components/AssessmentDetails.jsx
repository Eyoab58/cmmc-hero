import React from 'react';

const AssessmentDetails = ({ details }) => {
  if (!details || details.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Assessment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((row, idx) => (
            <div key={idx} className="mb-2">
              {Object.entries(row).map(([key, value]) => (
                value && (
                  <div key={key} className="flex">
                    <span className="font-medium text-gray-700 mr-2">{key.replace(/_/g, ' ')}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetails; 