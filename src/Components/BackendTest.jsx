import React from "react";
import axios from "axios";

const BackendTest = () => {

  const testApi = async () => {
    try {
      const res = await axios.get(
        "https://coffee-website-zoyk.onrender.com/api/test"
      );

      console.log(res.data);
      alert("Backend Connected ✅");

    } catch (err) {
      console.log(err);
      alert("Connection Failed ❌");
    }
  };

  return (
    <div>
      <button onClick={testApi}>
        Test Backend
      </button>
    </div>
  );
};

export default BackendTest;