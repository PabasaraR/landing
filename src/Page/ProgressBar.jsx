import React from "react";

export const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-300 rounded-full mt-10">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: "70%" }} // Adjust the width to represent progress
      ></div>
    </div>
  );
};
