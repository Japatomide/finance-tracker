import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import {
  SignedIn,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
// import { dark } from "@clerk/themes";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <nav>
        <div className="navbar">
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <img
              style={{ width: "30px", height: "30px" }}
              src="/business-and-finance.png"
              alt=""
            />
            <h1 className="logo-text">TrackMyFunds</h1>
          </div>
          {isSignedIn === false ? (
            <div
              style={{ display: "flex", gap: "1rem", marginRight: "0.5rem" }}
            >
              <SignUpButton mode="modal">
                <button style={{ backgroundColor: "#3498db" }}>Sign Up</button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#3498db",
                    border: "1px solid #3498db",
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
            </div>
          ) : (
            <div style={{ marginRight: "40px" }}>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          )}
        </div>
      </nav>
      <div className="app-container">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path="/" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
