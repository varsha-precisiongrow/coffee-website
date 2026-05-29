import React from "react";
import axios from "axios";
const BackendTest = () => {
  const testApi = async () => {
    try {
      const res = await axios.get(
        "https://coffeeinstitute.co.in/api/test"
      );
      console.log("SUCCESS:", res.data);
      alert(res.data.message || "Backend Connected ✅");
    } catch (err) {
      console.log("ERROR:", err?.response?.data || err.message);
      alert("Connection Failed ❌");
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={testApi} style={{padding: "10px 20px", background: "#ff6b00", color: "#fff", border: "none",  borderRadius: "6px", cursor: "pointer", }}> Test Backend </button>
    </div>
  );
};

export default BackendTest;