import React, { useState, useEffect } from 'react';
import { Page, Navbar, Block, Link, f7, Button, List, ListItem, Popup } from 'framework7-react';
import store from '../js/store';

const StartPage = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplateDetails, setShowTemplateDetails] = useState(false);

  const updateTemplates = () => {
    const workoutTemplates = store.getters.workoutTemplates.value;
    setTemplates(workoutTemplates);
  };

  useEffect(() => {
    // Initial load
    updateTemplates();
  }, []);

  // Refresh templates when page becomes visible (e.g., when navigating back)
  const onPageBeforeIn = () => {
    updateTemplates();
  };

  const handleStartEmptyWorkout = () => {
    // TODO: Navigate to workout session or implement empty workout logic
    console.log('Starting empty workout...');
  };

  const handleTemplateSelect = (templateName, templateId) => {
    if (templateName === 'Create New') {
      // Navigate to create template page
      f7.views.current.router.navigate('/create-template/');
    } else {
      // Show template details popup
      const template = templates.find(t => t.id === templateId);
      if (template) {
        setSelectedTemplate(template);
        setShowTemplateDetails(true);
      }
    }
  };

  const handleStartWorkout = () => {
    if (selectedTemplate) {
      // TODO: Navigate to workout session with template
      console.log(`Starting ${selectedTemplate.name} workout...`);
      setShowTemplateDetails(false);
    }
  };

  const handleEditTemplate = () => {
    if (selectedTemplate) {
      // TODO: Navigate to edit template page with template data
      console.log(`Editing ${selectedTemplate.name} template...`);
      setShowTemplateDetails(false);
      f7.views.current.router.navigate('/create-template/', {
        props: { editTemplate: selectedTemplate }
      });
    }
  };

  return (
    <Page name="start" className="activity-page" onPageBeforeIn={onPageBeforeIn}>
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
            <p>Begin a workout and add exercises as you go</p>
          </div>
        </div>

        {/* Templates Section */}
        <div className="templates-section">
          <div className="section-header">
            <h2>Workout Templates</h2>
            <p>Choose from pre-built workout routines</p>
          </div>

          <div className="templates-grid">
            {templates.map((template) => (
              <div
                key={template.id}
                className="template-card"
                onClick={() => handleTemplateSelect(template.name, template.id)}
              >
                <div className="template-content">
                  <div className="template-icon">{template.emoji}</div>
                  <h4>{template.name}</h4>
                  <div className="template-exercises">
                    {template.exercises.slice(0, 3).map((exercise, index) => (
                      <span key={index}>{exercise.name}</span>
                    ))}
                    {template.exercises.length > 3 && (
                      <span>+{template.exercises.length - 3} more</span>
                    )}
                  </div>
                  <div className="template-duration">~{template.duration} min</div>
                </div>
              </div>
            ))}

            <Link href="/create-template/" className="template-card create-template">
              <div className="template-content">
                <div className="template-icon">➕</div>
                <h4>Create Template</h4>
                <p>Build your own custom workout template</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Template Details Popup */}
        {showTemplateDetails && selectedTemplate && (
          <div className="template-details-modal-backdrop" onClick={() => setShowTemplateDetails(false)}>
            <div className="template-details-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="template-header-info">
                  <div className="template-emoji">{selectedTemplate.emoji}</div>
                  <div>
                    <h2>{selectedTemplate.name}</h2>
                    <p className="template-meta">~{selectedTemplate.duration} min • {selectedTemplate.exercises.length} exercises</p>
                  </div>
                </div>
                <Button
                  className="close-modal-btn"
                  onClick={() => setShowTemplateDetails(false)}
                >
                  ×
                </Button>
              </div>

              <div className="modal-content">
                <div className="template-exercises-list">
                  <h3>Exercises</h3>
                  {selectedTemplate.exercises.map((exercise, index) => (
                    <div key={index} className="template-exercise-item">
                      <div className="exercise-number">{index + 1}</div>
                      <div className="exercise-details">
                        <h4>{exercise.name}</h4>
                        <p className="exercise-sets">
                          {exercise.sets && exercise.sets.length > 0
                            ? `${exercise.sets.length} sets`
                            : 'No sets configured'
                          }
                        </p>
                        {exercise.notes && (
                          <p className="exercise-notes">{exercise.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <Button
                  className="edit-template-btn"
                  onClick={handleEditTemplate}
                >
                  Edit Template
                </Button>
                <Button
                  className="start-workout-btn"
                  onClick={handleStartWorkout}
                >
                  Start Workout
                </Button>
              </div>
            </div>
          </div>
        )}
      </Block>
    </Page>
  );
};

export default StartPage;
