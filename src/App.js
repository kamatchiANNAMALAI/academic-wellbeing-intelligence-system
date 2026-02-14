import React from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <StudentForm />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
