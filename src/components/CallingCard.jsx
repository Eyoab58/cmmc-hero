import React, { useState } from 'react';

const initialDetails = {
  organizationName: 'True Cyberchampion',
  sspName: 'TC SSP',
  cageCode: '',
  sspVersion: '2.1',
  assessmentScope: 'Enterprise',
  assessmentDate: '',
  planOfActionDate: '',
};

const CallingCard = ({ sprsScore }) => {
  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6 mb-6">
      {/* Summary Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-lg font-bold flex items-center gap-2">
            <span>SPRS Score:</span>
            <span className="bg-red-600 text-white px-3 py-1 rounded text-2xl tracking-wider">{sprsScore}</span>
            <span className="text-black text-xl font-normal">/ 110</span>
          </div>
          <div className="ml-0 md:ml-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm">
            <span className="font-semibold">Controls Assessed <span className="font-normal">0 (0%)</span></span>
            <span className="font-semibold">Controls Remaining <span className="font-normal">110 (100%)</span></span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-xs text-gray-700">
          <span>Implemented: 0 (0%)</span>
          <span>Partially Implemented: 0 (0%)</span>
          <span>Official Partial Credit: 0 (0%)</span>
          <span>N/A: 0 (0%)</span>
          <span>Not Implemented: 0 (0%)</span>
          <span>POA&M Closed: 0</span>
          <span>POA&M Open: 0</span>
          <span>POA&M Temporary: 0</span>
          <span>POA&M Risk Accept: 0</span>
        </div>
      </div>
      {/* Organization/Assessment Details */}
      <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">Organization Name:</span>
              <input
                type="text"
                name="organizationName"
                value={details.organizationName}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">System Security Plan (SSP) / System Name:</span>
              <input
                type="text"
                name="sspName"
                value={details.sspName}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">CAGE Code(s) Supported by SSP:</span>
              <input
                type="text"
                name="cageCode"
                value={details.cageCode}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">SSP Version / Revision:</span>
              <input
                type="text"
                name="sspVersion"
                value={details.sspVersion}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">Assessment Scope:</span>
              <input
                type="text"
                name="assessmentScope"
                value={details.assessmentScope}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">Assessment Date:</span>
              <input
                type="date"
                name="assessmentDate"
                value={details.assessmentDate}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
            <div className="flex mb-2 items-center">
              <span className="font-semibold w-56">Plan of Action Completion Date:</span>
              <input
                type="date"
                name="planOfActionDate"
                value={details.planOfActionDate}
                onChange={handleChange}
                className="font-mono border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallingCard; 