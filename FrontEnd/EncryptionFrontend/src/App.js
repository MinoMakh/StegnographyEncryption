import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import EncryptImage from "./Components/EncryptImage";
import EncryptedImageOutput from "./Components/EncryptedImageOutput";
import DecryptImage from "./Components/DecryptImage";
import DecryptedImageOutput from "./Components/DecryptedImageOutput";

const AppContent = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [encryptedImage, setEncryptedImage] = useState(null);
  const [encryptionKey, setEncryptionKey] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");

  const handleEncrypt = async () => {
    if (!image || !message) {
      alert("Please select an image and enter a message.");
      return;
    }

    const formData = new FormData();
    formData.append("message", message);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:8080/api/encrypt-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        if (typeof data.encryptedImage === "string") {
          setEncryptedImage(data.encryptedImage);
        } else {
          const imageUrl = URL.createObjectURL(data.encryptedImage);
          setEncryptedImage(imageUrl);
        }

        setEncryptionKey(data.encryptionKey);
        alert("Message encrypted into the image!");
      } else {
        console.error("Encryption failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error encrypting image:", error);
    }
  };

  const handleDecrypt = async (image, key) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("key", key);

    try {
      const response = await fetch("http://localhost:8080/api/decrypt-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const secretMessage = await response.text();
        setDecryptedMessage(secretMessage);
        alert("Message decrypted!");
      } else {
        console.error("Decryption failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error decrypting image:", error);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(decryptedMessage);
    alert("Decrypted message copied to clipboard!");
  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/encrypt" />} />
        <Route
          path="/encrypt"
          element={
            <>
              <EncryptImage
                message={message}
                setMessage={setMessage}
                image={image}
                setImage={setImage}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                onEncrypt={handleEncrypt}
                setImageName={setImageName}
              />
              {encryptedImage && (
                <EncryptedImageOutput
                  encryptedImage={encryptedImage}
                  encryptionKey={encryptionKey}
                  imageName={imageName}
                  onCopyKey={() => {
                    navigator.clipboard.writeText(encryptionKey);
                    alert("Key copied to clipboard!");
                  }}
                />
              )}
            </>
          }
        />
        <Route
          path="/decrypt"
          element={
            <>
              <DecryptImage
                image={image} // Pass image for decryption
                setImage={setImage}
                encryptionKey={encryptionKey}
                onDecrypt={handleDecrypt}
              />
              {decryptedMessage && (
                <DecryptedImageOutput
                  decryptedMessage={decryptedMessage}
                  onCopyMessage={handleCopyMessage}
                />
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
