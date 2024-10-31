import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="card">
            <h2 className="title">About</h2>
            <p className="description">This web application enables secure embedding of secret messages within images
                using steganography, leveraging the Least Significant Bit (LSB) technique. Users can upload
                an image and message to create a steganographically encoded image that hides data invisibly.
                A unique, random key guides the encoding process, ensuring both security and minimal visual
                impact on the image.
            </p>
    
            <div className="button-group">
                <Link to='/encrypt'>
                    <button className="encrypt-button header-buttons">
                        Encrypt
                    </button>
                </Link>
                <Link to='/decrypt'>
                    <button className="encrypt-button header-buttons">
                       Decrypt 
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
