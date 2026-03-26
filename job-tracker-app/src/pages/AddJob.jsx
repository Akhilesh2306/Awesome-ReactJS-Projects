import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";

export default function AddJob() {
  const { dispatch } = useContext(JobContext);
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");

  return (
    <div className="add-job">
      <h2 className="add-job__title">Add Job</h2>
      <form
        className="add-job__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "CREATE_JOB",
            payload: {
              id: Math.floor(Math.random() * 1000),
              role,
              description,
              company,
              location,
              dateApplied,
              status,
              notes,
            },
          });
          navigate("/jobs");
        }}
      >
        <input
          className="add-job__input"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
        <input
          className="add-job__input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          className="add-job__input"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
        />
        <input
          className="add-job__input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          className="add-job__input"
          type="text"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
          placeholder="Date Applied"
        />
        <select
          className="add-job__input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select status</option>
          <option value="Applied">Applied</option>
          <option value="Screening">Screening</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          className="add-job__input"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
        />
        <button className="btn" type="submit">
          Add Job
        </button>
      </form>
    </div>
  );
}
