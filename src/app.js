import React, { useState } from "react";
import validator from 'validator';

const App = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const validateCreditCard = (value)  => {
        if (validator.isCreditCard(value)) {
            setErrorMessage("Valid CreditCard number!");
        } else {
            setErrorMessage("Invalid CreditCard Number!");
        }
    }

    return (
        <div style={{ marginLeft: '200px' }}>
            <h2>Validating CreditCard in ReactJS</h2>
            <span>Enter CreditCard: </span>
            <input type="text" onChange={(e) => validateCreditCard(e.target.value)} />
            <br />
            <span style={{fontWeight: 'bold', color: 'red'}}>{errorMessage}</span>
        </div>
    );
}

export default App;