"use client";

// TimeSelector.tsx
import React, { useState } from 'react';

const TimeSelector: React.FC = () => {
  const [selectedHour, setSelectedHour] = useState<string>('08'); // Changed to string type with default value '08'
  const [selectedMinute, setSelectedMinute] = useState<string>('00'); // Changed to string type with default value '00'
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHour(event.target.value); // Updated to set the string value directly
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMinute(event.target.value); // Updated to set the string value directly
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value as 'AM' | 'PM');
  };

  // Generate an array of hours from 1 to 12 for the 12-hour clock with leading zeros
  const hours12 = Array.from(Array(12).keys()).map(hour => hour.toString().padStart(2, '0')); 

  // Generate an array of minutes from 0 to 59 with leading zeros
  const minutes = Array.from(Array(60).keys()).map(minute => minute.toString().padStart(2, '0')); 

  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2">
        <select value={selectedHour} onChange={handleHourChange} className="bg-black border border-gray-300 rounded px-2 py-1 text-white">
          {hours12.map(hour => (
            <option key={hour} value={hour}>{hour}</option>
          ))}
        </select>
        <span className="font-bold">:</span>
        <select value={selectedMinute} onChange={handleMinuteChange} className="bg-black border border-gray-300 rounded px-2 py-1 text-white">
          {minutes.map(minute => (
            <option key={minute} value={minute}>{minute}</option>
          ))}
        </select>
        <select value={selectedPeriod} onChange={handlePeriodChange} className="bg-black border border-gray-300 rounded px-2 py-1 text-white">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimeSelector;

