import axios from "axios";

const API_BASE = "http://localhost:4000/api/jobs"; // replace with actual

export const fetchJobs = (status) =>
  axios.get(API_BASE, { params: status ? { status } : {} });

export const addJob = (job) => axios.post(API_BASE, job);

export const updateJob = (id, status) =>
  axios.put(`${API_BASE}/${id}`, { status });

export const deleteJob = (id) => axios.delete(`${API_BASE}/${id}`);
