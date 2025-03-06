import React, { useState } from 'react';
import { Clock, MapPin, Phone, Calendar, Sun, Moon, Check } from 'lucide-react';

const GlobalTimeAlignmentTool = () => {
  // Demo State - Already showing results
  const [showResults] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0);
  
  // Demo data for your location
  const yourName = "Alex Chen";
  const yourLocation = "Medellin, Colombia";
  const yourTime = "10:30 AM";
  const yourTimezone = "Colombia Time (UTC-5)";
  
  // Demo data for first contact
  const contact1 = {
    name: "Akira Tanaka",
    location: "Tokyo, Japan",
    time: "3:30 AM (next day)",
    timezone: "Japan Standard Time (UTC+9)",
    sunrise: "6:15 AM",
    sunset: "5:45 PM",
    isDaytime: false,
    optimalTimes: [
      { contactTime: "9:00 AM", yourTime: "4:00 PM (today)" },
      { contactTime: "10:00 AM", yourTime: "5:00 PM (today)" },
      { contactTime: "3:00 PM", yourTime: "10:00 PM (today)" }
    ]
  };
  
  // Demo data for second contact
  const contact2 = {
    name: "Maria Rodriguez",
    location: "Buenos Aires, Argentina",
    time: "2:30 PM",
    timezone: "Argentina Time (UTC-3)",
    sunrise: "5:45 AM",
    sunset: "7:20 PM",
    isDaytime: true,
    optimalTimes: [
      { contactTime: "9:00 AM", yourTime: "7:00 AM" },
      { contactTime: "1:00 PM", yourTime: "11:00 AM" },
      { contactTime: "4:00 PM", yourTime: "2:00 PM" }
    ]
  };
  
  // Format pomodoro time
  const formatPomodoroTime = () => {
    return `${pomodoroMinutes.toString().padStart(2, '0')}:${pomodoroSeconds.toString().padStart(2, '0')}`;
  };
  
  // Schedule a call
  const handleScheduleCall = (contactName, contactTime, localTime) => {
    alert(`Scheduling call with ${contactName} at ${contactTime} (${localTime} your time)`);
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      {/* Left Column - Contact Time Tool */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/5">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Global Time Alignment Tool</h2>
        
        {/* Your information */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{yourName}</h3>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>{yourLocation}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">
                {yourTime}
              </div>
              <div className="text-sm text-gray-500">
                {yourTimezone}
              </div>
              <div className="flex items-center mt-1 text-sm">
                <Sun size={16} className="text-yellow-500 mr-1" /> Daytime
              </div>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-blue-200">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <span className="text-sm font-medium text-gray-700">Your scheduling links:</span>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span> Calendly
                </button>
                <button className="flex items-center text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-1"></span> HubSpot
                </button>
                <button className="flex items-center text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-50">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-1"></span> Add New
                </button>
              </div>
            </div>
            
            <div className="mt-2 bg-white p-2 rounded border border-blue-200 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Active scheduling link:</span>
                <span className="font-medium text-blue-700">calendly.com/alexchen/30min</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact 1 - Night Owl */}
        <div className="border-b pb-6 mb-6">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md mb-4">
            <div>
              <h3 className="font-semibold text-lg">{contact1.name}</h3>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>{contact1.location}</span>
              </div>
              <div className="mt-1 px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded-full inline-flex items-center">
                <Moon size={12} className="mr-1" /> Night Owl
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {contact1.time}
              </div>
              <div className="text-sm text-gray-500">
                {contact1.timezone}
              </div>
              <div className="flex items-center mt-1 text-sm">
                {contact1.isDaytime ? (
                  <><Sun size={16} className="text-yellow-500 mr-1" /> Daytime</>
                ) : (
                  <><Moon size={16} className="text-indigo-400 mr-1" /> Nighttime</>
                )}
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-gray-700">Daily Context:</h4>
            <ul className="bg-gray-50 p-3 rounded-md">
              <li className="flex items-center mb-2">
                <Sun size={16} className="text-orange-500 mr-2" />
                <span>Sunrise: {contact1.sunrise}</span>
              </li>
              <li className="flex items-center mb-2">
                <Moon size={16} className="text-indigo-500 mr-2" />
                <span>Sunset: {contact1.sunset}</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="text-indigo-700 mr-2" />
                <span className="text-indigo-700 font-medium">Peak hours: 11:00 AM - 2:00 AM</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-gray-700 flex items-center">
              <span>Optimal Call Times</span>
              <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded">Adjusted for night owl</span>
            </h4>
            
            <div className="mb-3 bg-gray-50 p-3 rounded-md border border-gray-200">
              <div className="flex flex-wrap items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Scheduling Method:</span>
                <div className="flex space-x-2">
                  <button className="flex items-center text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                    <span className="mr-1">✓</span> Manual Times
                  </button>
                  <button className="flex items-center text-xs bg-white border border-gray-300 text-gray-600 px-2 py-1 rounded hover:bg-gray-50">
                    External Calendar
                  </button>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <div className="flex-1 flex">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-1 opacity-30"></span>
                  <span>Has Calendly</span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800">Connect</button>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                  <span>Premium Feature: </span>
                </span>
                <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
                  Upgrade for Calendar Integration
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-blue-50 p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <Phone size={16} className="text-green-600 mr-2" />
                  <span>11:00 AM for {contact1.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  6:00 PM (today) your time
                </div>
                <button 
                  className="bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact1.name, "11:00 AM", "6:00 PM (today)")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <Phone size={16} className="text-green-600 mr-2" />
                  <span>12:00 PM for {contact1.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  7:00 PM (today) your time
                </div>
                <button 
                  className="bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact1.name, "12:00 PM", "7:00 PM (today)")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
              
              <div className="bg-indigo-50 p-3 rounded-md flex justify-between items-center border-l-4 border-indigo-400">
                <div className="flex items-center">
                  <Phone size={16} className="text-indigo-600 mr-2" />
                  <span className="font-medium">1:00 AM for {contact1.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  8:00 AM (tomorrow) your time
                </div>
                <button 
                  className="bg-indigo-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact1.name, "1:00 AM", "8:00 AM (tomorrow)")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
              
              <div className="bg-indigo-50 p-3 rounded-md flex justify-between items-center border-l-4 border-indigo-400">
                <div className="flex items-center">
                  <Phone size={16} className="text-indigo-600 mr-2" />
                  <span className="font-medium">12:00 AM for {contact1.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  7:00 AM (tomorrow) your time
                </div>
                <button 
                  className="bg-indigo-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact1.name, "12:00 AM", "7:00 AM (tomorrow)")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
            </div>
            
            <div className="mt-2 text-xs text-gray-500 italic">
              <span className="text-indigo-600">■</span> Highlighted times indicate night owl's optimal productivity periods
            </div>
          </div>
        </div>
        
        {/* Contact 2 - Early Riser */}
        <div>
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md mb-4">
            <div>
              <h3 className="font-semibold text-lg">{contact2.name}</h3>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>{contact2.location}</span>
              </div>
              <div className="mt-1 px-2 py-0.5 bg-orange-100 text-orange-800 text-xs rounded-full inline-flex items-center">
                <Sun size={12} className="mr-1" /> Early Riser
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {contact2.time}
              </div>
              <div className="text-sm text-gray-500">
                {contact2.timezone}
              </div>
              <div className="flex items-center mt-1 text-sm">
                {contact2.isDaytime ? (
                  <><Sun size={16} className="text-yellow-500 mr-1" /> Daytime</>
                ) : (
                  <><Moon size={16} className="text-indigo-400 mr-1" /> Nighttime</>
                )}
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-gray-700">Daily Context:</h4>
            <ul className="bg-gray-50 p-3 rounded-md">
              <li className="flex items-center mb-2">
                <Sun size={16} className="text-orange-500 mr-2" />
                <span>Sunrise: {contact2.sunrise}</span>
              </li>
              <li className="flex items-center mb-2">
                <Moon size={16} className="text-indigo-500 mr-2" />
                <span>Sunset: {contact2.sunset}</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="text-orange-600 mr-2" />
                <span className="text-orange-600 font-medium">Peak hours: 5:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-gray-700 flex items-center">
              <span>Optimal Call Times</span>
              <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded">Adjusted for early riser</span>
            </h4>
            
            <div className="mb-3 bg-gray-50 p-3 rounded-md border border-gray-200">
              <div className="flex flex-wrap items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Scheduling Method:</span>
                <div className="flex space-x-2">
                  <button className="flex items-center text-xs bg-white border border-gray-300 text-gray-600 px-2 py-1 rounded hover:bg-gray-50">
                    Manual Times
                  </button>
                  <button className="flex items-center text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    <span className="mr-1">✓</span> External Calendar
                  </button>
                </div>
              </div>
              
              <div className="text-xs mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-1"></span>
                    <span className="text-gray-700">Scheduling Link: </span>
                  </span>
                  <span className="font-medium text-orange-700">hubspot.com/maria-rodriguez/meeting</span>
                </div>
                <div className="text-green-600 text-xs flex items-center">
                  <span className="mr-1">✓</span> Calendar connected successfully
                </div>
              </div>
              
              <div className="p-2 bg-white rounded border border-gray-200">
                <div className="text-xs font-medium mb-1">Currently unavailable times:</div>
                <div className="text-xs text-gray-500 grid grid-cols-2 gap-1">
                  <span>• Today, 1:30 PM - 2:45 PM</span>
                  <span>• Tomorrow, 9:00 AM - 10:00 AM</span>
                  <span>• Friday, All Day (Holiday)</span>
                  <span>• Next Monday, 8:00 AM - 11:00 AM</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-orange-50 p-3 rounded-md flex justify-between items-center border-l-4 border-orange-400">
                <div className="flex items-center">
                  <Phone size={16} className="text-orange-600 mr-2" />
                  <span className="font-medium">5:30 AM for {contact2.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  3:30 AM your time
                </div>
                <button 
                  className="bg-orange-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact2.name, "5:30 AM", "3:30 AM")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-md flex justify-between items-center border-l-4 border-orange-400">
                <div className="flex items-center">
                  <Phone size={16} className="text-orange-600 mr-2" />
                  <span className="font-medium">6:00 AM for {contact2.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  4:00 AM your time
                </div>
                <button 
                  className="bg-orange-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact2.name, "6:00 AM", "4:00 AM")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-md flex justify-between items-center border-l-4 border-orange-400">
                <div className="flex items-center">
                  <Phone size={16} className="text-orange-600 mr-2" />
                  <span className="font-medium">7:00 AM for {contact2.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  5:00 AM your time
                </div>
                <button 
                  className="bg-orange-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact2.name, "7:00 AM", "5:00 AM")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <Phone size={16} className="text-green-600 mr-2" />
                  <span>11:00 AM for {contact2.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  9:00 AM your time
                </div>
                <button 
                  className="bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center"
                  onClick={() => handleScheduleCall(contact2.name, "11:00 AM", "9:00 AM")}
                >
                  <Calendar size={14} className="mr-1" /> Schedule
                </button>
              </div>
            </div>
            
            <div className="mt-2 text-xs text-gray-500 italic">
              <span className="text-orange-600">■</span> Highlighted times indicate early riser's optimal productivity periods
            </div>
          </div>
          
          <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h5 className="font-medium text-sm mb-3 flex justify-between items-center">
              <span>Need a specific time?</span>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Premium Feature</span>
            </h5>
            <div className="flex flex-wrap gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Contact</label>
                <select className="w-full p-1.5 border border-gray-300 rounded text-sm">
                  <option>Akira Tanaka</option>
                  <option>Maria Rodriguez</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Date</label>
                <input type="date" className="w-full p-1.5 border border-gray-300 rounded text-sm" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Time (Your local time)</label>
                <input type="time" className="w-full p-1.5 border border-gray-300 rounded text-sm" />
              </div>
              <div className="flex items-end">
                <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm flex items-center">
                  <Calendar size={14} className="mr-1" /> Schedule Meeting
                </button>
              </div>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="text-xs text-gray-600">Schedule via:</div>
              <button className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                Your Calendly
              </button>
              <button className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                HubSpot
              </button>
              <button className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Google Calendar
              </button>
              <button className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
                MS Teams
              </button>
              <button className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1"></span>
                Zoom
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column - Pomodoro Timer */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/5">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pomodoro Timer</h2>
        
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
          <div className={`text-5xl font-bold mb-6 ${isBreak ? 'text-green-600' : 'text-blue-600'}`}>
            {formatPomodoroTime()}
          </div>
          
          <p className="mb-4 text-gray-700">
            {isBreak ? 'Break Time' : 'Focus Time'}
          </p>
          
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-2 rounded-md ${
                isRunning 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            
            <button
              onClick={() => {
                setIsRunning(false);
                setPomodoroMinutes(isBreak ? 25 : 5);
                setPomodoroSeconds(0);
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
          </div>
          
          <div className="w-full">
            <h4 className="font-medium mb-2 text-gray-700">Presets:</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsRunning(false);
                  setIsBreak(false);
                  setPomodoroMinutes(25);
                  setPomodoroSeconds(0);
                }}
                className="bg-blue-100 p-2 rounded text-blue-700 hover:bg-blue-200 transition-colors"
              >
                25 min work
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setIsBreak(true);
                  setPomodoroMinutes(5);
                  setPomodoroSeconds(0);
                }}
                className="bg-green-100 p-2 rounded text-green-700 hover:bg-green-200 transition-colors"
              >
                5 min break
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setIsBreak(false);
                  setPomodoroMinutes(50);
                  setPomodoroSeconds(0);
                }}
                className="bg-blue-100 p-2 rounded text-blue-700 hover:bg-blue-200 transition-colors"
              >
                50 min work
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setIsBreak(true);
                  setPomodoroMinutes(10);
                  setPomodoroSeconds(0);
                }}
                className="bg-green-100 p-2 rounded text-green-700 hover:bg-green-200 transition-colors"
              >
                10 min break
              </button>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md w-full">
            <h4 className="font-medium mb-2 text-gray-700">Pomodoro Tips:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Focus on one task during each work session</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Take short breaks to rest your mind</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Stand up and stretch during breaks</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>After 4 work sessions, take a longer 15-30 minute break</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTimeAlignmentTool;