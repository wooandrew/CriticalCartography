// DaySelector.tsx
import React from 'react';

const DaySelector: React.FC = () => {
  const daysOfWeek = ["M", "T", "W", "R", "F"]; // M: Monday, T: Tuesday, W: Wednesday, R: Thursday, F: Friday

  return (
    <div className="flex justify-between items-center">
      {daysOfWeek.map((day, index) => (
        <button key={index} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">{day}</button>
      ))}
    </div>
  );
};

export default DaySelector;
