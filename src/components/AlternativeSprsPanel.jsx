import React from 'react';

const AlternativeSprsPanel = () => (
  <div className="bg-white border border-gray-300 rounded-lg shadow p-6 mb-6 text-xs md:text-sm">
    <div className="font-bold text-center mb-2">Alternative SPRS Submission via Email</div>
    <div className="mb-2 text-center text-gray-700">
      In accordance with DFARS Clause 252.204-7019 as created by the DFARS Interim Rule 2019-D041:
    </div>
    <ol className="list-decimal pl-6 mb-2">
      <li>Select the below email content and copy to clipboard (Ctrl+C).</li>
      <li>Click here to email. Paste from clipboard (Ctrl+V) into the email body. Optionally paste as text (Ctrl+V, Ctrl, T) to remove the table/formatting.</li>
      <li>Click here to access the Supplier Performance Risk System (SPRS) at a later date, to verify the submission was entered.</li>
    </ol>
    <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
      <div className="mb-2 font-bold">Cybersecurity standard assessed:</div>
      <div className="mb-2">Organization conducting the assessment: <span className="font-mono">True Cyberchampion</span></div>
      <div className="mb-2">1. Assessment Date: <span className="text-gray-500">[Missing from the Text Fields Above the Controls Assessment Table]</span></div>
      <div className="mb-2">2. Assessment Score: <span className="font-mono">-203</span></div>
      <div className="mb-2">3. Scope of Assessment: <span className="font-mono">Enterprise</span></div>
      <div className="mb-2">4. Plan of Action Completion Date: <span className="text-gray-500">[Missing from the Text Fields Above the Controls Assessment Table]</span></div>
      <div className="mb-2">5. Included CAGE(s): <span className="text-gray-500">[Missing from the Text Fields Above the Controls Assessment Table]</span></div>
      <div className="mb-2">6. Name of System Security Plan (SSP): <span className="font-mono">TC SSP</span></div>
      <div className="mb-2">7. SSP Version / Revision: <span className="font-mono">2.1</span></div>
      <div className="mb-2">8. SSP Date (latest version): <span className="text-gray-500">[Missing from the Text Fields Above the Controls Assessment Table]</span></div>
      <div className="mt-4">Thank you,<br/>True Cyberchampion</div>
    </div>
  </div>
);

export default AlternativeSprsPanel; 