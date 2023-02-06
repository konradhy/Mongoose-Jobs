import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              Mongoose <span>Jobs</span>
            </h1>
            <p>
              Are you tired of searching for jobs on multiple websites and
              struggling to keep track of your progress? Mongoose Jobs
              simplifies your job search by allowing you to save and track all
              of your job applications in one convenient location. Our
              user-friendly interface makes it easy for you to organize and
              filter your job applications, so you can focus on landing your
              dream job.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
