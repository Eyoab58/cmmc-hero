import React from 'react';

const DetailsPanel = () => (
  <div className="bg-white border border-gray-300 rounded-lg shadow p-6 mb-6 text-xs md:text-sm">
    <div className="mb-2 font-bold text-red-700">
      Do not conduct the self-assessment and submit your SPRS Score without review by qualified DoD Compliance professionals. Doing so may result in misrepresentation and/or violation of the False Claims Act.
    </div>
    <div className="mb-2">
      <span className="font-bold text-blue-700">Required</span> field is only Status of control implementation. <span className="font-bold text-gray-700">Optional fields</span> include: POA&M for documented weaknesses, Examine / Interview / Test for assessment methods, and Notes for POA&M.
    </div>
    <div className="mb-2">
      <span className="font-bold">POA&M</span> status entries are highlighted yellow when Status is Implemented, Official Partial Credit, Partially Implemented, or Temporary Deficiency. These must be tracked in the POA&M.
    </div>
    <div className="mb-2">
      <span className="font-bold">SPRS Score</span> is subtracted from 110 per each Control's Weight for Not Implemented, Not Applicable (N/A), Alternative Measures, Temporary Deficiency, and Enduring Exception do not subtract points.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Fully Implemented</span> must fully implement all Assessment Objectives in accordance with requirements and clarifications in both the DoD Assessment Methodology and the Official Assessment Guide.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Partially Implemented</span> is used when not all Assessment Objectives are fully implemented. It is scored the same as Not Implemented per the DoD Assessment Methodology.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Official Partial Credit</span> is only permitted where a noted "Partial was achieved," as indicated in the Notes column and in the DoD Assessment Methodology.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Not Applicable (N/A)</span> is only permitted where the Notes 'Do Not Subtract...' criteria is met and the DoD CIO (or official representative) has approved as indicated by a POA&M Risk Accept.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Not Implemented</span> means none of the Assessment Objectives have been fully implemented. If one or more of the Assessment Objectives have been fully implemented, Partially Implemented should be used.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Temporary Deficiency</span> must be resolved as soon as possible, must align with the DoD Assessment Methodology, are scored Implemented, require a POA&M entry, and must be documented within the SSP.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Enduring Exception</span> must be considered Implemented, do not require a POA&M entry, and must be documented within the SSP.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status of Alternative Measures</span> requires DoD CIO (or rep.) favorable adjudication of alternative security measures, saved with the SSP. If that adjudication changes or expires, the Status and SPRS Score must be updated.
    </div>
    <div className="mb-2">
      <span className="font-bold">Status selections</span> that do not match the POA&M selection will be highlighted. For example, a Status of Not Implemented with a POA&M of Closed or a Status of Implemented with a POA&M of Open.
    </div>
    <div className="mb-2">
      <span className="font-bold">POA&M of Risk Accept</span> requires DoD CIO (or official representative) favorable adjudication of risk acceptance and/or mitigations, documented within the SSP. Risk acceptance may change or expire.
    </div>
    <div className="mb-2">
      <span className="font-bold">POA&M of Temporary</span> matches control Status of Temporary Deficiency, meaning it must be resolved as soon as possible, must align with the DoD Assessment Methodology, and must be documented within the SSP.
    </div>
    <div className="mb-2">
      <span className="font-bold">POA&M selections</span> that do not match the Status selections will be highlighted. For example, a Status of Partially Implemented with a POA&M of Closed or blank.
    </div>
    <div className="mb-2">
      <span className="font-bold">Examine / Interview / Test</span> selections that do not match the Status selections will be highlighted. For example, a Status of Partially Implemented should not have a POA&M of Closed or blank.
    </div>
  </div>
);

export default DetailsPanel; 