const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align:center; padding:40px; background:#f0f8ff;">
      <h1 style="color:#2c3e50;">🎉 CI/CD Pipeline Deployment Successful! 🎉</h1>
      <p style="font-size:20px; color:#16a085;">
        Hello from <strong>CI/CD Pipeline Deployment</strong>!
      </p>
      <p style="font-size:22px; color:#8e44ad;">
        🚀 This is done by <strong>Nikhil Krishnan</strong>
      </p>
      <p style="font-size:18px; color:#2980b9;">
        Register No: <strong>22011102063</strong> | Dept: <strong>IoT-A</strong>
      </p>

      <div style="margin-top:30px;">
        <button style="
          padding: 12px 25px; 
          font-size:18px; 
          background:#e67e22; 
          color:white; 
          border:none; 
          border-radius:8px; 
          cursor:pointer;
          box-shadow:0px 4px 8px rgba(0,0,0,0.2);
        " onclick="alert('CI/CD Works Perfectly! 👍')">
          Click Me 🚀
        </button>
      </div>
    </div>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
