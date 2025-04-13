import React, { useState } from "react";

function Filter({ filterJobs }) {
  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    filterJobs({ status: e.target.value });
  };

  return (
    <div className="mb-4">
      <label htmlFor="filterStatus" className="form-label">Filter by Status</label>
      <select id="filterStatus" className="form-select" value={status} onChange={handleStatusChange}>
        <option value="">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

export default Filter;
