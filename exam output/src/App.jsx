import React from "react";

function App() {
  const patients = [
    {
      id: 101,
      name: "Rahul",
      doctor: "Dr. Kumar",
      appointment: "12-10-2026",
      timing: "10:00 AM"
    },
    {
      id: 102,
      name: "Priya",
      doctor: "Dr. Anjali",
      appointment: "12-10-2026",
      timing: "11:00 AM"
    },
    {
      id: 103,
      name: "Arjun",
      doctor: "Dr. Ramesh",
      appointment: "13-10-2026",
      timing: "02:00 PM"
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Patient Appointment Dashboard</h1>

      <table
        border="1"
        cellPadding="12"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "center"
        }}
      >
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Doctor</th>
            <th>Appointment Date</th>
            <th>Timing</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.doctor}</td>
              <td>{patient.appointment}</td>
              <td>{patient.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;