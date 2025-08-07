import React, { useState, useEffect } from 'react';
import { Page, Navbar, Block, Button, f7 } from 'framework7-react';

const WorkoutSessionPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleMicrophoneToggle = () => {
    setIsListening(!isListening);
    setIsRecording(!isRecording);
    // TODO: Implement voice recording logic
    console.log('Microphone toggled:', !isListening);
  };

  const handleEndWorkout = () => {
    // TODO: Implement end workout logic
    console.log('Ending workout...');
    f7.views.current.router.back();
  };

  const handleSettings = () => {
    // TODO: Navigate to workout settings or show settings modal
    console.log('Opening workout settings...');
  };

  return (
    <Page name="workout-session" className="activity-page">
      <Navbar />
      <Block className="activity-content">
        {/* Page Title with Settings Button */}
        <div className="workout-header">
          <div className="page-title">
            <h1>Workout</h1>
          </div>
          <Button className="settings-btn" onClick={handleSettings}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.25 22L8.85 18.8C8.63333 18.7167 8.42917 18.6208 8.2375 18.5125C8.04583 18.4042 7.85833 18.2833 7.675 18.15L4.7 19.375L1.95 14.625L4.525 12.675C4.50833 12.5583 4.5 12.4458 4.5 12.3375V11.6625C4.5 11.5542 4.50833 11.4417 4.525 11.325L1.95 9.375L4.7 4.625L7.675 5.85C7.85833 5.71667 8.05 5.59583 8.25 5.4875C8.45 5.37917 8.65 5.28333 8.85 5.2L9.25 2H14.75L15.15 5.2C15.3667 5.28333 15.5708 5.37917 15.7625 5.4875C15.9542 5.59583 16.1417 5.71667 16.325 5.85L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5542 19.5 11.6625V12.3375C19.5 12.4458 19.4917 12.5583 19.475 12.675L22.05 14.625L19.3 19.375L16.325 18.15C16.1417 18.2833 15.9542 18.4042 15.7625 18.5125C15.5708 18.6208 15.3667 18.7167 15.15 18.8L14.75 22H9.25ZM12 15.5C13.25 15.5 14.3125 15.0625 15.1875 14.1875C16.0625 13.3125 16.5 12.25 16.5 11C16.5 9.75 16.0625 8.6875 15.1875 7.8125C14.3125 6.9375 13.25 6.5 12 6.5C10.75 6.5 9.6875 6.9375 8.8125 7.8125C7.9375 8.6875 7.5 9.75 7.5 11C7.5 12.25 7.9375 13.3125 8.8125 14.1875C9.6875 15.0625 10.75 15.5 12 15.5Z" fill="currentColor"/>
            </svg>
          </Button>
        </div>

        <div className="workout-session-content">
          {/* Voice Visualization Circle */}
          <div className="voice-visualization-container">
            <div className={`voice-circle ${isListening ? 'listening' : ''}`}>
              <div className="voice-gradient"></div>
              <Button 
                className="microphone-btn" 
                onClick={handleMicrophoneToggle}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5 6C10.5 4.80653 10.9741 3.66193 11.818 2.81802C12.6619 1.97411 13.8065 1.5 15 1.5C16.1935 1.5 17.3381 1.97411 18.182 2.81802C19.0259 3.66193 19.5 4.80653 19.5 6V12C19.5 13.1935 19.0259 14.3381 18.182 15.182C17.3381 16.0259 16.1935 16.5 15 16.5C13.8065 16.5 12.6619 16.0259 11.818 15.182C10.9741 14.3381 10.5 13.1935 10.5 12V6ZM16.5 22.395C18.9993 22.0339 21.2848 20.7844 22.9378 18.8752C24.5907 16.9661 25.5003 14.5253 25.5 12C25.5 11.6022 25.342 11.2206 25.0607 10.9393C24.7794 10.658 24.3978 10.5 24 10.5C23.6022 10.5 23.2206 10.658 22.9393 10.9393C22.658 11.2206 22.5 11.6022 22.5 12C22.5 13.9891 21.7098 15.8968 20.3033 17.3033C18.8968 18.7098 16.9891 19.5 15 19.5C13.0109 19.5 11.1032 18.7098 9.6967 17.3033C8.29018 15.8968 7.5 13.9891 7.5 12C7.5 11.6022 7.34196 11.2206 7.06066 10.9393C6.77936 10.658 6.39782 10.5 6 10.5C5.60218 10.5 5.22064 10.658 4.93934 10.9393C4.65804 11.2206 4.5 11.6022 4.5 12C4.49966 14.5253 5.4093 16.9661 7.06223 18.8752C8.71516 20.7844 11.0007 22.0339 13.5 22.395V25.5H9C8.60217 25.5 8.22064 25.658 7.93934 25.9393C7.65804 26.2206 7.5 26.6022 7.5 27C7.5 27.3978 7.65804 27.7794 7.93934 28.0607C8.22064 28.342 8.60217 28.5 9 28.5H21C21.3978 28.5 21.7794 28.342 22.0607 28.0607C22.342 27.7794 22.5 27.3978 22.5 27C22.5 26.6022 22.342 26.2206 22.0607 25.9393C21.7794 25.658 21.3978 25.5 21 25.5H16.5V22.395Z" fill="white"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* End Workout Button */}
          <div className="end-workout-container">
            <Button className="end-workout-btn" onClick={handleEndWorkout}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#FF3B30"/>
                <path d="M20 28H36M36 28L30 22M36 28L30 34" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </Block>
    </Page>
  );
};

export default WorkoutSessionPage;
