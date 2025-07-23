import React from 'react';

const AssessmentTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {/* Render table headers dynamically if data exists */}
            {data && data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key} className="px-4 py-2 border-b">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => (
                <td key={i} className="px-4 py-2 border-b">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssessmentTable; 