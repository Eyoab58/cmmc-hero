import React, { useState, useMemo } from 'react';
import { exampleRows } from './components/ChartTable';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure global styles are imported

const AccessorBox = () => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  // Build unique family list and map family to first index
  const families = useMemo(() => {
    const fams = [];
    const famToIdx = {};
    exampleRows.forEach((row, i) => {
      if (!fams.includes(row.Family)) {
        fams.push(row.Family);
        famToIdx[row.Family] = i;
      }
    });
    return { fams, famToIdx };
  }, []);

  // Build unique requirements for current family
  const getRequirements = fam => {
    const reqs = [];
    const reqToIdx = {};
    exampleRows.forEach((row, i) => {
      if (row.Family === fam && !reqs.includes(row.Control)) {
        reqs.push(row.Control);
        reqToIdx[row.Control] = i;
      }
    });
    return { reqs, reqToIdx };
  };

  const [idx, setIdx] = useState(0);
  const row = exampleRows[idx];
  const { reqs, reqToIdx } = getRequirements(row.Family);

  const handlePrev = () => setIdx(i => (i === 0 ? exampleRows.length - 1 : i - 1));
  const handleNext = () => setIdx(i => (i === exampleRows.length - 1 ? 0 : i + 1));

  // When family changes, go to first question of that family
  const handleFamilyChange = e => {
    const fam = e.target.value;
    setIdx(families.famToIdx[fam]);
  };
  // When requirement changes, go to that question in current family
  const handleRequirementChange = e => {
    const req = e.target.value;
    setIdx(reqToIdx[req]);
  };

  // State for objective/requirement satisfied checkboxes
  const [objectiveSatisfied, setObjectiveSatisfied] = useState(false);
  const [objectiveOtherThanSatisfied, setObjectiveOtherThanSatisfied] = useState(false);

  // Keep requirement checkboxes in sync with objective checkboxes
  const requirementSatisfied = objectiveSatisfied;
  const requirementOtherThanSatisfied = objectiveOtherThanSatisfied;

  // Handlers for mutually exclusive objective checkboxes
  const handleObjectiveSatisfied = () => {
    setObjectiveSatisfied(true);
    setObjectiveOtherThanSatisfied(false);
  };
  const handleObjectiveOtherThanSatisfied = () => {
    setObjectiveSatisfied(false);
    setObjectiveOtherThanSatisfied(true);
  };

  // Use local state for objective checkboxes and sync to exampleRows
  const handleObjectiveSatisfiedCheckbox = () => {
    setObjectiveSatisfied(true);
    setObjectiveOtherThanSatisfied(false);
    exampleRows[idx]._objectiveSatisfied = true;
    exampleRows[idx]._objectiveOther = false;
    exampleRows[idx]._requirementSatisfied = true;
    exampleRows[idx]._requirementOther = false;
    setIdx(i => i); // force re-render
  };
  const handleObjectiveOtherCheckbox = () => {
    setObjectiveSatisfied(false);
    setObjectiveOtherThanSatisfied(true);
    exampleRows[idx]._objectiveSatisfied = false;
    exampleRows[idx]._objectiveOther = true;
    exampleRows[idx]._requirementSatisfied = false;
    exampleRows[idx]._requirementOther = true;
    setIdx(i => i);
  };

  // Ensure checkbox state properties exist for each row
  if (row._objectiveSatisfied === undefined) row._objectiveSatisfied = false;
  if (row._objectiveOther === undefined) row._objectiveOther = false;
  if (row._requirementSatisfied === undefined) row._requirementSatisfied = false;
  if (row._requirementOther === undefined) row._requirementOther = false;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col p-0 overflow-auto font-sans">
      {/* Header */}
      <header className="w-full bg-blue-900 py-4 shadow-lg mb-2 flex flex-row items-center justify-between px-8">
        <h1 className="text-4xl font-extrabold text-white text-center tracking-tight drop-shadow-lg flex-1">CMMC HERO - CMMC L2 CERTIFICATION ASSESSMENT SYSTEM</h1>
        <div className="flex gap-4">
          <button
            className="p-2 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded transition"
            title="Back"
            onClick={() => {
              setFade(true);
              setTimeout(() => navigate(-1), 350);
            }}
          >
            Back
          </button>
          <button className="p-2 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition" title="Save">Save</button>
        </div>
      </header>
      <div className={`max-w-[1400px] mx-auto w-full flex flex-row gap-6 px-4 pb-8 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        {/* Main Content Left (all info/fields) */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top Row: Family/Requirement/Navigation */}
          <div className="flex flex-row gap-2 items-center border border-gray-400 rounded-lg bg-white px-4 py-2 shadow">
            <label className="font-semibold text-sm mr-2">Family Number</label>
            <select className="border border-gray-300 rounded px-2 py-1 text-base mr-4 min-w-[120px]" value={row.Family} onChange={handleFamilyChange}>
              {families.fams.map(fam => (<option key={fam} value={fam}>{fam}</option>))}
            </select>
            <label className="font-semibold text-sm mr-2">{row.Family}</label>
            <div className="flex-1 flex flex-row items-center gap-2 ml-4">
              <label className="font-semibold text-sm mr-2">Requirement</label>
              <select className="border border-gray-300 rounded px-2 py-1 text-base min-w-[100px]" value={row.Control} onChange={handleRequirementChange}>
                {reqs.map(req => (<option key={req} value={req}>{req}</option>))}
              </select>
              <button onClick={handlePrev} className="ml-2 px-3 py-1 bg-gray-200 rounded border border-gray-400 text-xl font-bold hover:bg-gray-300">&#8592;</button>
              <button onClick={handleNext} className="px-3 py-1 bg-gray-200 rounded border border-gray-400 text-xl font-bold hover:bg-gray-300">&#8594;</button>
              <input className="flex-1 border border-gray-300 rounded px-3 py-1 ml-4" value={row.Description} readOnly />
            </div>
          </div>
          {/* Special Considerations and NIST Discussion Row */}
          <div className="flex flex-row gap-2 items-start border border-gray-400 rounded-lg bg-white px-4 py-2 shadow">
            <div className="flex flex-col flex-1 gap-2">
              <label className="font-semibold text-sm">Special Considerations</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[60px] max-h-[80px] bg-gray-50" value={row.Notes} readOnly />
            </div>
            <div className="flex flex-col flex-[2] gap-2 ml-4">
              <label className="font-semibold text-sm">NIST 800-171 Discussion</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[60px] max-h-[80px] bg-gray-50" value={row.Discussion || ''} readOnly />
            </div>
          </div>
          {/* Objective Section Row */}
          <div className="flex flex-row gap-2 items-center border border-gray-400 rounded-lg bg-white px-4 py-2 shadow">
            <label className="font-semibold text-sm mr-2">Objective Number</label>
            {/* Objective number matches requirement */}
            <input className="border border-gray-300 rounded px-2 py-1 text-base mr-2 min-w-[120px]" value={row.Control || ''} readOnly />
            {/* Removed arrow button */}
            <label className="font-semibold text-sm ml-4 mr-2">Standard</label>
            <input className="border border-gray-300 rounded px-2 py-1 text-base mr-2 min-w-[120px]" value={row.Standard || ''} readOnly />
            <button className="px-3 py-1 bg-gray-200 rounded border border-gray-400 text-xl font-bold hover:bg-gray-300">All Objectives</button>
            <div className="flex-1 flex flex-row gap-2 ml-4">
              <label className="font-semibold text-sm">Objective Satisfied</label>
              <input
                type="checkbox"
                className="accent-blue-600 scale-125"
                checked={objectiveSatisfied}
                onChange={handleObjectiveSatisfiedCheckbox}
              />
              <label className="font-semibold text-sm ml-4">Objective Other Than Satisfied</label>
              <input
                type="checkbox"
                className="accent-blue-600 scale-125"
                checked={objectiveOtherThanSatisfied}
                onChange={handleObjectiveOtherCheckbox}
              />
            </div>
          </div>
          {/* Objective Details Section */}
          <div className="grid grid-cols-[180px_1fr] gap-4 items-start border border-gray-400 rounded-lg bg-white px-4 py-6 shadow">
            <label className="text-base font-semibold text-right pr-2 text-gray-700">ObjectiveText</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[40px] max-h-[60px] bg-gray-50" value={row.ObjectiveText || ''} readOnly />
            <label className="text-base font-semibold text-right pr-2 text-gray-700">Validation</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[40px] max-h-[60px] bg-gray-50" value={row.Validation || ''} readOnly />
            <label className="text-base font-semibold text-right pr-2 text-gray-700">Documents Examined</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[40px] max-h-[60px] bg-gray-50" value={row.DocumentsExamined || ''} readOnly />
            <label className="text-base font-semibold text-right pr-2 text-gray-700">Interview Conducted</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[40px] max-h-[60px] bg-gray-50" value={row.InterviewConducted || ''} readOnly />
            <label className="text-base font-semibold text-right pr-2 text-gray-700">Notes</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-base resize-none min-h-[40px] max-h-[60px] bg-gray-50" value={row.Notes || ''} readOnly />
          </div>
        </div>
        {/* Scoring Section (right) */}
        <div className="w-[340px] flex flex-col gap-2 mt-0">
          <div className="flex flex-row border border-gray-400 rounded-lg overflow-hidden bg-white shadow">
            <div className="flex-1 border-r border-gray-400">
              <div className="font-semibold text-base text-center border-b border-gray-400 py-1 bg-gray-100">Scoring</div>
              <div className="flex flex-col gap-2 p-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={row._requirementSatisfied || false}
                    onChange={() => {
                      // If checked, set both requirement and objective satisfied, unset "other"
                      const newVal = !row._requirementSatisfied;
                      exampleRows[idx]._requirementSatisfied = newVal;
                      exampleRows[idx]._requirementOther = !newVal;
                      exampleRows[idx]._objectiveSatisfied = newVal;
                      exampleRows[idx]._objectiveOther = !newVal;
                      setIdx(i => i);
                    }}
                  /> Requirement Satisfied
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={row._requirementOther || false}
                    onChange={() => {
                      // If checked, set both requirement and objective "other", unset "satisfied"
                      const newVal = !row._requirementOther;
                      exampleRows[idx]._requirementOther = newVal;
                      exampleRows[idx]._requirementSatisfied = !newVal;
                      exampleRows[idx]._objectiveOther = newVal;
                      exampleRows[idx]._objectiveSatisfied = !newVal;
                      setIdx(i => i);
                    }}
                  /> Requirement Other Than Satisfied
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" /> Other than Satisfied with Special Considerations
                </label>
              </div>
            </div>
            <div className="w-28">
              <div className="font-semibold text-base text-center border-b border-gray-400 py-1 bg-gray-100">Deduction</div>
              <div className="flex flex-col gap-2 p-2">
                <input type="text" className="border border-gray-300 rounded px-2 py-1 text-base mb-2" placeholder="" />
                <input type="text" className="border border-gray-300 rounded px-2 py-1 text-base" placeholder="" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center border border-gray-400 rounded-lg mt-2 bg-white shadow">
            <span className="block text-xs font-semibold px-2 py-2 whitespace-nowrap">Plan of Action/Date</span>
            <input className="flex-1 border-0 px-2 py-2 text-base bg-transparent focus:outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessorBox;
