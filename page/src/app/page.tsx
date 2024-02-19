"use client";

import React, { useState, useEffect } from 'react';
import ScrollableList from "./components/ScrollableList";
import TimeSelector from "./components/TimeSelector";
import DaySelector from "./components/DaySelector";

import CustomMap from "./components/CustomMap";

import './css/animation.css';

export default function Home() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [initialFocus, setInitialFocus] = useState(true);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
    setInitialFocus(false); // Remove focus when toggled
  };

  // useEffect(() => {
  //   // After 3 seconds, remove initial focus
  //   const timer = setTimeout(() => {
  //     setInitialFocus(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="flex w-full h-full flex-row-reverse relative">

        <div className="w-screen h-screen bg-neutral-900">
          <CustomMap />
        </div>
        
        {/* Sidebar Toggle Button */}
        <button className={"absolute top-1/2 left-0 bg-white text-black text-2xl p-1 rounded-r-lg z-50"} onClick={toggleSidePanel}>
          {isSidePanelOpen ? <>&#8249;</> : <>&#8250;</>}
        </button>

        {/* Initial focus overlay */}
        {initialFocus && (
          <div className="absolute top-1/2 left-0 focus-overlay">
            <div className="focus-circle"></div>
          </div>
        )}

        {/* Side panel with conditional animation */}
        <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
          
          {/* Side Panel Content */}
          <div className="flex flex-col h-full p-5">

            {/* Search Bar */}
            <div className="flex items-center justify-center mt-5">
              <input type="text" className="w-3/4 h-10 p-1 border-2 border-gray-500 rounded-md text-black" placeholder="Search Building" />
              <button className="w-1/4 h-10 bg-blue-500 ml-1 text-white rounded-md">Search</button>
            </div>

            {/* Scrollable List */}
            <div className="mt-5">
              <ScrollableList />
            </div>

            {/* Course Details */}
            <div className="border-2 border-white mt-5 rounded p-2">
              <h1 className="text-center mb-2">Course Details</h1>
              <div>
                <p>Course Name: </p>
                <p>Course Code: </p>
                <p>Course Description: </p>
              </div>
            </div>

            {/* Day Selector */}
            <div className="border-2 border-white mt-5 p-2 rounded">
              <h1 className="text-center mb-2">Select Day</h1>
              <DaySelector />
            </div>

            {/* Time Selector*/}
            <div className="border-2 border-white mt-5 p-2 rounded">
              <h1 className="text-center mb-2">Select Time</h1>
              <TimeSelector />
            </div>

            <div>
              <p className='text-center'>Copyright (c) Andrew Woo, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

