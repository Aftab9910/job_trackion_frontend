import React, { useState } from "react";
import { addJob } from "../services/jobService";

function JobForm() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { company, role, status, date, link };
    addJob(newJob);
    setCompany("");
    setRole("");
    setStatus("Applied");
    setDate("");
    setLink("");
  };

  return (
    <div className="container my-4">
      <h2>Add Job Application</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date of Application</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Job Link</label>
          <input
            type="url"
            className="form-control"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Job Link"
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Job</button>
      </form>
    </div>
  );
}

export default JobForm;
