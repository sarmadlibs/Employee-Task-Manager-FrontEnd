import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EditTask.css";

const EditTask = ({ match }) => {
  const [task, setTask] = useState({});
  const [description, setDescription] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [completionStatus, setCompletionStatus] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/tasks/${match.params.id}`)
      .then((response) => {
        setTask(response.data);
        setDescription(response.data.description);
        setPriorityLevel(response.data.priorityLevel);
        setCompletionStatus(response.data.completionStatus);
      })
      .catch((error) => console.error(error));
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTask = {
      description,
      priorityLevel,
      completionStatus,
    };

    axios
      .put(`http://localhost:3000/tasks/${match.params.id}`, updatedTask)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priorityLevel">Priority Level</label>
          <input
            type="text"
            className="form-control"
            id="priorityLevel"
            value={priorityLevel}
            onChange={(event) => setPriorityLevel(event.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="completionStatus"
            checked={completionStatus}
            onChange={(event) => setCompletionStatus(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="completionStatus">
            Completed
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTask;
