import React, { useState } from 'react';
import { ReactComponent as FaCopy } from '../Home/copyIcon.svg'; // Importing the SVG as a React component


const EmailCopyButton = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const email = 'junaid79x@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear success message after 2 seconds
      },
      (err) => {
        setCopySuccess('Failed to copy!');
      }
    );
  };

  return (
    <div className="email-copy-container">
      
      <button className="copy-button" style={{ all: 'unset' }} onClick={copyToClipboard}>
        <FaCopy className="arrow" />
      </button>

      {copySuccess && <span className="copy-success">{copySuccess}</span>}
      
    </div>
  );
};

export default EmailCopyButton;
