// import React from "react";
// import axios from "axios";

// const BackendTest= () => {
//   const testApi = async () => {
//     try {
//       const res = await axios.post(
//         "https://coffeeinstitute.co.in/api/create-order"
//       );

//       console.log(res.data);

//       alert("Backend Connected ✅");
//     } catch (err) {
//       console.log(err);

//       alert("Connection Failed ❌");
//     }
//   };

//   return (
//     <div>
//       <button onClick={testApi}>
//         Test Backend
//       </button>
//     </div>
//   );
// };

// export default BackendTest;

import React from "react";
import axios from "axios";

const BackendTest = () => {

  const testApi = async () => {
    try {

      const res = await axios.get(
        "https://coffeeinstitute.co.in/api/test"
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