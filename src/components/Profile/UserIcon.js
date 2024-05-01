// UserIcon.js

import React from "react";

const UserIcon = ({ imageUrl }) => {
  return (
    <div className="relative">
      <button className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full focus:outline-none">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="User"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default UserIcon;
