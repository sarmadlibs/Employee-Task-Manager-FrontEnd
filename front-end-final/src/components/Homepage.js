import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import "../styles/Homepage.css";
import codingLottie from "../assets/lottie/coding.json";
import manWorkProjectorLottie from "../assets/lottie/man-project-screen.json";
import manStandCode from "../assets/lottie/man-stand-code.json";

const Homepage = () => {
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10); // delay of 10 milliseconds
  };

  return (
    // <div className="homepage-container container text-center">
    //   <h1 className="mt-2 homepage-title">
    //     Welcome to the Task Management App!
    //   </h1>
    <div className="homepage-container container text-center">
      <h1 className="my-2 homepage-title">
        <span className="welcome-text">
          Welcome to the Task Management App!
        </span>
      </h1>
      <div className="d-flex flex-column align-items-center homepage-btns mb-5">
        <div style={{ position: "absolute", left: 10, marginTop: 80 }}>
          <Lottie
            options={{ animationData: codingLottie }}
            width={"30vw"}
            height={"50vh"}
          />
        </div>
        <div style={{ position: "absolute", right: 10, marginTop: 80 }}>
          <Lottie
            options={{ animationData: manWorkProjectorLottie }}
            width={"28vw"}
            height={"50vh"}
          />
        </div>
        <div style={{ position: "absolute", bottom: 0 }}>
          <Lottie
            options={{ animationData: manStandCode }}
            width={"22vw"}
            height={"40vh"}
          />
        </div>

        <Link
          to="/employees"
          className="btn btn-primary btn-lg mb-3 homepage-btn"
          onClick={reloadPage}
        >
          View All Employees
        </Link>
        <Link
          to="/tasks"
          className="btn btn-primary btn-lg mb-3 homepage-btn"
          onClick={reloadPage}
        >
          View All Tasks
        </Link>
        <Link
          to="/add-employee"
          className="btn btn-success btn-lg mb-3 homepage-btn"
          onClick={reloadPage}
        >
          Create New Employee
        </Link>
        <Link
          to="/add-task"
          className="btn btn-success btn-lg mb-3 homepage-btn"
          onClick={reloadPage}
        >
          Create New Task
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
