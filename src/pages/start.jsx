import React from 'react';
import { Page, Navbar, Block, f7 } from 'framework7-react';

const StartPage = () => {
  const handleStartEmptyWorkout = () => {
    // TODO: Navigate to workout session or implement empty workout logic
    console.log('Starting empty workout...');
  };

  const handleTemplateSelect = (templateName) => {
    // TODO: Navigate to workout session with template or implement template logic
    console.log(`Starting ${templateName} template...`);
  };

  return (
    <Page name="start" className="activity-page">
      <Navbar />
      <Block className="activity-content">
        {/* Page Title */}
        <div className="page-title">
          <h1>Start Workout</h1>
        </div>

        {/* Start Empty Workout Card */}
        <div className="glass-card workout-start-card" onClick={handleStartEmptyWorkout}>
          <div className="workout-option-content">
            <div className="workout-icon">💪</div>
            <h3>Start Empty Workout</h3>
            <p>Begin a custom workout and add exercises as you go</p>
          </div>
        </div>

        {/* Templates Section */}
        <div className="templates-section">
          <div className="section-header">
            <h2>Workout Templates</h2>
            <p>Choose from pre-built workout routines</p>
          </div>

          <div className="templates-grid">
            <div className="template-card" onClick={() => handleTemplateSelect('Upper Body')}>
              <div className="template-content">
                <div className="template-icon">🏋️</div>
                <h4>Upper Body</h4>
                <div className="template-exercises">
                  <span>Bench Press</span>
                  <span>Pull-ups</span>
                  <span>Shoulder Press</span>
                  <span>+3 more</span>
                </div>
                <div className="template-duration">~45 min</div>
              </div>
            </div>

            <div className="template-card" onClick={() => handleTemplateSelect('Legs')}>
              <div className="template-content">
                <div className="template-icon">🦵</div>
                <h4>Legs</h4>
                <div className="template-exercises">
                  <span>Squats</span>
                  <span>Deadlifts</span>
                  <span>Lunges</span>
                  <span>+4 more</span>
                </div>
                <div className="template-duration">~50 min</div>
              </div>
            </div>

            <div className="template-card" onClick={() => handleTemplateSelect('Full Body')}>
              <div className="template-content">
                <div className="template-icon">🏃</div>
                <h4>Full Body</h4>
                <div className="template-exercises">
                  <span>Burpees</span>
                  <span>Push-ups</span>
                  <span>Squats</span>
                  <span>+5 more</span>
                </div>
                <div className="template-duration">~35 min</div>
              </div>
            </div>

            <div className="template-card create-template" onClick={() => handleTemplateSelect('Create New')}>
              <div className="template-content">
                <div className="template-icon">➕</div>
                <h4>Create Template</h4>
                <p>Build your own custom workout template</p>
              </div>
            </div>
          </div>
        </div>
      </Block>
    </Page>
  );
};

export default StartPage;
