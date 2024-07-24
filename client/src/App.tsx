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
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  return (
    <Router>
      <div className="app-container">
        <div
          className="navbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "2.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <img
              style={{ width: "30px", height: "30px" }}
              src="/business-and-finance.png"
              alt=""
            />
            <h1 style={{ fontSize: "22px" }}>TrackMyFunds</h1>
          </div>
          {isSignedIn === false ? (
            <div
              style={{ display: "flex", gap: "1rem", marginRight: "0.5rem" }}
            >
              <SignUpButton mode="modal" />
              <SignInButton mode="modal" />
            </div>
          ) : (
            <div style={{ marginRight: "40px" }}>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          )}
        </div>
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
