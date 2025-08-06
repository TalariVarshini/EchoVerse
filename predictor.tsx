import React from "react";

const Predictor = () => {
  const callPython = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features: [1, 2, 3, 4] }),
      });

      const result = await response.json();
      console.log("Prediction from Python:", result.prediction);
    } catch (error) {
      console.error("Error calling backend:", error);
    }
  };

  return (
    <div>
      <h1>Fake Profile Predictor</h1>
      <button onClick={callPython}>Get Prediction</button>
    </div>
  );
};

export default Predictor;
