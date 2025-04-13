import React, { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobService";
import JobItem from "./JobItem";
import Filter from "./Filter";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then((res) => {
      setJobs(res.data);
      setFilteredJobs(res.data);
    });
  }, []);

  const filterJobs = (filter) => {
    const filtered = jobs.filter(job => job.status === filter.status || job.date === filter.date);
    setFilteredJobs(filtered);
  };

  return (
    <div className="container my-4">
      <Filter filterJobs={filterJobs} />
      <h2 className="mb-4">Job Applications</h2>
      <div className="list-group">
        {filteredJobs.map((job) => (
          <JobItem key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
