import React from 'react';

const EncryptedImageOutput = ({ encryptedImage, onCopyKey, imageName}) => {
  // Prepare the image source with the proper Base64 prefix
  const imageSrc = `data:image/png;base64,${encryptedImage}`;

  return (
    <div className="card">
      <h2 className="title">Encrypted Image</h2>
      
      <img 
        src={imageSrc} 
        alt="Encrypted Preview" 
        className="image-preview"
      />

      <button onClick={onCopyKey} className="copy-key-button">
        Copy Key
      </button>

      <br /><br />

      <a 
        href={imageSrc} 
        download= {imageName + ".png"}
        className="encrypt-button"
      >
        Download Encrypted Image
      </a>
    </div>
  );
};

export default EncryptedImageOutput;
