// DecryptImage.js
import React, { useState } from 'react';
import '../App.css';

const DecryptImage = ({ onDecrypt }) => {
  const [image, setImage] = useState(null);
  const [key, setKey] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleDecrypt = () => {
    if (!image || !key) {
      alert("Please select an image and enter a key.");
      return;
    }

    // Call the onDecrypt prop to handle the decryption logic
    onDecrypt(image, key);
  };

  return (
    <div className="card">
      <h2 className="title">Decrypt</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="file-upload-button"
      />
      <input
        type="text"
        placeholder="Enter decryption key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="input-textarea"
      />
      <button onClick={handleDecrypt} className="encrypt-button">
        Decrypt
      </button>
    </div>
  );
};

export default DecryptImage;
