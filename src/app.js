import React, { useState } from "react";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const validateCreditCard = (value) => {
    setInputValue(value);
    if (value.trim() === "") {
      setErrorMessage("");
      return;
    }
    if (validator.isCreditCard(value)) {        
      setErrorMessage("Valid CreditCard number!");
    } else {
      setErrorMessage("Invalid CreditCard Number!");
    }
  };

  return (
    <div style={{ marginLeft: "200px" }}>
      <h2>Validating CreditCard in ReactJS</h2>
      <span>Enter CreditCard: </span>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => validateCreditCard(e.target.value)}
        placeholder="Enter card number"
        autoComplete="off"
        maxLength={19}
      />
      <br />
      <span style={{ fontWeight: "bold", color: errorMessage.includes("Valid") ? "green" : "red" }}>
        {errorMessage}
      </span>
    </div>
  );
};

export default App; 