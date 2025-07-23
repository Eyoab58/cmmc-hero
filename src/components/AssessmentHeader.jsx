import React from 'react';

const AssessmentHeader = ({ title, sprsScore }) => (
  <div className="mb-4">
    <h1 className="text-2xl font-bold mb-2">{title}</h1>
    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded">
      SPRS Score: <span className="font-semibold">{sprsScore}</span>
    </div>
  </div>
);

export default AssessmentHeader; 