import React from "react";
import "../App.css";

const EncryptImage = ({
  message,
  setMessage,
  image,
  setImage,
  setImageName,
  setImagePreview,
  onEncrypt,
}) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        const fileName = file.name;
        // Remove the extension
        const nameWithoutExtension = fileName.substring(
          0,
          fileName.lastIndexOf(".")
        );
        setImageName(nameWithoutExtension);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="card">
      <h2 className="title">Encrypt a Message</h2>

      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input-textarea"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="file-upload-button"
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="image-preview"
        />
      )}

      <button onClick={onEncrypt} className="encrypt-button">
        Encrypt
      </button>
    </div>
  );
};

export default EncryptImage;
