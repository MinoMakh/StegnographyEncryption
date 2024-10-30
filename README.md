# Steganography Encryption Web Application

This web application enables secure embedding of secret messages within images using steganography, leveraging the Least Significant Bit (LSB) technique. Users can upload an image and message to create a steganographically encoded image that hides data invisibly. A unique, random key guides the encoding process, ensuring both security and minimal visual impact on the image.

## Features

- **Image and Message Upload**: Users upload an image and input a custom message to be embedded.
- **Random Key Generation**: Generates a unique key for both embedding and extraction, ensuring only authorized users can retrieve the message.
- **LSB Steganography with Random Distribution**: The algorithm encodes message bits into random pixel channels based on the key, making detection difficult.
- **Encryption & Decryption**: Messages are encrypted within images and can only be decrypted with the unique key.


- **Frontend**: React.js
- **Backend**: Spring Boot (Java)

## Installation and Setup

### Prerequisites

- **Node.js**: [Download and install Node.js](https://nodejs.org)
- **Java JDK (version 11 or later)**: [Download and install JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- **Maven** (for Spring Boot): Ensure it’s available on your PATH.

### Setup Instructions

#### Backend (Spring Boot)

1. **Clone the Repository**:

```bash
git clone https://github.com/MinoMakh/StegnographyEncryption.git
cd StegnographyEncryption
```

2. **Navigate backend folder**:

```bash 
cd backend
```

3. **Run Spring boot Application**:

```bash
mvn spring-boot:run
```

This will start the backend server on `http://localhost:8080`.

#### Frontend (React):

1. **Navigate to Frontend folder:

```bash
cd FrontEnd
cd EncryptionFrontend
```

2. **Install Dependencies**:

```bash
npm install
```

3. **Start React Application**:

```bash
npm start
```

This will start the frontend on `http://localhost:3000`.

### Usage

1. **Open the Application**: Go to `http://localhost:3000` in your web browser.
2. **Embed a Secret Message**:
    - Upload an image to use as the "cover."
    - Type your message in the provided text box.
    - Generate and save the unique key displayed.
3. **Save the Key**: This key is essential for decrypting the message.
4. **Decrypt the Message**: Re-upload the image and input the key to retrieve the hidden message.

---

With these steps, users should be able to set up and run the application locally and understand how to use it effectively.
