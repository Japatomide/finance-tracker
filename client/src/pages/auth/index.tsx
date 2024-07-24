import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="home-container">
      <div className="sign-in-container">
        <SignedOut>
          <h1 className="page-text">
            {" "}
            TrackMyFunds
            <p
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                marginLeft: "10px",
              }}
            >
              Your Own Personal Finance Tracker....
            </p>
          </h1>
          <p style={{}}>
            Welcome to TrackMyFunds, your ultimate companion for mastering your
            finances! With our intuitive tools and insightful resources, you'll
            effortlessly track spending, manage budgets, and achieve financial
            goals.
          </p>
          <SignUpButton mode="modal">
            <p className="btn">Start Now</p>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Navigate to="/dashboard" />
        </SignedIn>
      </div>
      <div className="img-container">
        <img src="/undraw_finance_re_gnv2.svg" alt="" />
      </div>
    </div>
  );
};
