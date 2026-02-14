import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  const getRiskClass = (risk) => {
    if (risk === "High Risk") return "high";
    if (risk === "Medium Risk") return "medium";
    return "low";
  };

  return (
    <div className="card">
      <h3>Student Dashboard</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Marks</th>
            <th>Stress</th>
            <th>Risk Level</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.attendance}%</td>
              <td>{s.marks}%</td>
              <td>{s.stressLevel}</td>
              <td>
                <span className={`badge ${getRiskClass(s.riskLevel)}`}>
                  {s.riskLevel}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
