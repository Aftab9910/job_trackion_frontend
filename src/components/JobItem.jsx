import React from "react";
import { deleteJob, updateJob } from "../services/jobService";

function JobItem({ job }) {
  const handleDelete = () => {
    deleteJob(job._id);
  };

  const handleUpdateStatus = (newStatus) => {
    updateJob(job._id, newStatus);
  };

  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <div>
        <h5>{job.company}</h5>
        <p>{job.role}</p>
        <p><strong>Status:</strong> {job.status}</p>
        <p><strong>Application Date:</strong> {new Date(job.date).toLocaleDateString()}</p>
      </div>
      <div>
        <button className="btn btn-warning me-2" onClick={() => handleUpdateStatus("Interview")}>Mark as Interview</button>
        <button className="btn btn-success me-2" onClick={() => handleUpdateStatus("Offer")}>Mark as Offer</button>
        <button className="btn btn-danger" onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  );
}

export default JobItem;
