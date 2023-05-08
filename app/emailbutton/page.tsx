import React from 'react';

const EmailButton: React.FC<{ email: string }> = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleEmailClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      partabrajp@gmail.com
    </button>
  );
};

export default EmailButton;
