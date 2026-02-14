import React, { useState } from "react";
import axios from "axios";

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    marks: "",
    stressLevel: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/students", form);
      alert("Student Added Successfully ✅");
      setForm({
        name: "",
        attendance: "",
        marks: "",
        stressLevel: ""
      });
      window.location.reload();
    } catch (error) {
      alert("Error connecting to backend ❌");
    }
  };

  return (
    <div className="card">
      <h3>Add Student Data</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="attendance"
          type="number"
          placeholder="Attendance (%)"
          value={form.attendance}
          onChange={handleChange}
          required
        />
        <input
          name="marks"
          type="number"
          placeholder="Marks (%)"
          value={form.marks}
          onChange={handleChange}
          required
        />
        <input
          name="stressLevel"
          type="number"
          placeholder="Stress Level (1-10)"
          value={form.stressLevel}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
