// DecryptedImageOutput.js
import React from "react";
import "../App.css";

const DecryptedImageOutput = ({ decryptedMessage, onCopyMessage }) => {
  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <h2 className="title">Decrypted Message</h2>
      <div className="decrypted-message-container">
        <p>{decryptedMessage}</p>
      </div>
      <button onClick={onCopyMessage} className="encrypt-button">
        Copy Message
      </button>
    </div>
  );
};

export default DecryptedImageOutput;
