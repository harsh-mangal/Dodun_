import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Calendar, X } from "lucide-react";

const jobs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    coverLetter: "",
    resume: null,
  });
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3002/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const res = await axios.post("http://localhost:3002/apply", data);
      alert(res.data.message);
      closeForm();
    } catch (err) {
      alert("Failed to submit application");
    }
  };

  return (
    <>
      <div className="p-4 md:p-6 lg:p-10 mb-10">
        <h1 className="manrope text-2xl md:text-3xl flex justify-center items-center font-bold mb-4">
          Job Openings
        </h1>
        {jobs.length === 0 ? (
          <p className="text-center text-gray-600">
            No job openings available right now.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="p-4 md:p-6 border-2 border-gray-300 shadow-xl flex flex-col md:flex-row justify-between rounded-lg"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    {job.title}
                  </h2>
                  <div className="flex flex-wrap items-center text-gray-600 mb-1">
                    <Briefcase className="w-4 h-4 mr-1 text-sky-600" />
                    <span className="text-sky-600">Company</span>
                    <MapPin className="w-4 h-4 ml-4 mr-1 text-gray-600" />
                    <span>{job.location}</span>
                  </div>
                  {job.vacancies && (
                    <p className="text-gray-600">
                      No of vacancies: {job.vacancies}
                    </p>
                  )}
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="border border-sky-600 text-sky-600 px-4 py-2 rounded-full hover:bg-blue-100 w-full md:w-auto"
                  >
                    Apply Now
                  </button>
                  <div className="mt-2 flex items-center justify-end text-sky-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{`Deadline: ${job.deadline}`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showForm && selectedJob && (
          <div
            onSubmit={handleSubmit}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            enctype="multipart/form-data"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={closeForm}
                className="absolute top-2 right-2 text-gray-600 hover:text-sky-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Apply for {selectedJob.title}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Position</label>
                  <input
                    type="text"
                    name="position"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Position you apply"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Your message..."
                    rows="4"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-800"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default jobs;
