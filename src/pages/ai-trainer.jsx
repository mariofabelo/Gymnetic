import React, { useState } from 'react';
import {
  Page,
  Navbar,
  Block,
  Link,
} from 'framework7-react';

const AITrainerPage = () => {
  const [selectedMood, setSelectedMood] = useState('default');
  const [showAnimation, setShowAnimation] = useState('');

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowAnimation(mood);
    
    // Clear animation after it completes
    setTimeout(() => {
      setShowAnimation('');
    }, 2000);
  };

  return (
    <Page name="ai-trainer" className="activity-page">
      <Navbar title="Customise AI Trainer" backLink="Back" />
      
      <Block className="activity-content">
        <div className="page-title">
          <h1>Choose the mood for your AI Trainer</h1>
        </div>

        <div className="ai-trainer-options">
          {/* Default Option */}
          <div 
            className={`glass-card ai-trainer-option ${selectedMood === 'default' ? 'selected' : ''}`}
            onClick={() => handleMoodSelect('default')}
          >
            <div className="card-content centered">
              <div className="mood-icon">🤖</div>
              <h3>Default</h3>
              <p>Neutral and balanced</p>
            </div>
          </div>

          {/* Gentle and Supporting Option */}
          <div 
            className={`glass-card ai-trainer-option ${selectedMood === 'gentle' ? 'selected' : ''}`}
            onClick={() => handleMoodSelect('gentle')}
          >
            <div className="card-content centered">
              <div className="mood-icon">🌊</div>
              <h3>Gentle and Supporting</h3>
              <p>Encouraging and patient</p>
            </div>
            {showAnimation === 'gentle' && (
              <div className="water-wave-animation">
                <div className="wave-ripple wave-1"></div>
                <div className="wave-ripple wave-2"></div>
                <div className="wave-ripple wave-3"></div>
              </div>
            )}
          </div>

          {/* Drill Sergeant Option */}
          <div 
            className={`glass-card ai-trainer-option ${selectedMood === 'sergeant' ? 'selected' : ''}`}
            onClick={() => handleMoodSelect('sergeant')}
          >
            <div className="card-content centered">
              <div className="mood-icon">🔥</div>
              <h3>Drill Sergeant</h3>
              <p>Intense and motivating</p>
            </div>
            {showAnimation === 'sergeant' && (
              <div className="fire-animation">
                <div className="fire-particle fire-1"></div>
                <div className="fire-particle fire-2"></div>
                <div className="fire-particle fire-3"></div>
                <div className="fire-particle fire-4"></div>
                <div className="fire-particle fire-5"></div>
              </div>
            )}
          </div>
        </div>

        <div className="selected-mood-info">
          <h4>Selected: {selectedMood === 'default' ? 'Default' : selectedMood === 'gentle' ? 'Gentle and Supporting' : 'Drill Sergeant'}</h4>
        </div>
      </Block>

    </Page>
  );
};

export default AITrainerPage;
