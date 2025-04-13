import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          {/* Navbar or Header Section */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Student Job Tracker</a>
            </div>
          </nav>

          <Routes>
            {/* Route for adding job application */}
            <Route
              path="/add-job"
              element={<JobForm />}
            />
            {/* Route for listing all job applications */}
            <Route
              path="/"
              element={<JobList />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
