import React, { useState } from 'react';
import { Page, Navbar, Block, Button, List, ListInput, ListItem, Link, Sheet } from 'framework7-react';

const CreateTemplatePage = () => {
  const [templateName, setTemplateName] = useState('');
  const [exercises, setExercises] = useState([]);
  const [showExerciseLibrary, setShowExerciseLibrary] = useState(false);

  // Exercise library with categories
  const exerciseLibrary = [
    {
      category: 'Chest',
      exercises: [
        { name: 'Bench Press', muscle: 'Chest' },
        { name: 'Push-ups', muscle: 'Chest' },
        { name: 'Incline Bench Press', muscle: 'Chest' },
        { name: 'Dumbbell Flyes', muscle: 'Chest' },
        { name: 'Dips', muscle: 'Chest' }
      ]
    },
    {
      category: 'Back',
      exercises: [
        { name: 'Pull-ups', muscle: 'Back' },
        { name: 'Deadlifts', muscle: 'Back' },
        { name: 'Bent-over Rows', muscle: 'Back' },
        { name: 'Lat Pulldowns', muscle: 'Back' },
        { name: 'T-Bar Rows', muscle: 'Back' }
      ]
    },
    {
      category: 'Legs',
      exercises: [
        { name: 'Squats', muscle: 'Legs' },
        { name: 'Lunges', muscle: 'Legs' },
        { name: 'Leg Press', muscle: 'Legs' },
        { name: 'Leg Curls', muscle: 'Legs' },
        { name: 'Calf Raises', muscle: 'Legs' }
      ]
    },
    {
      category: 'Shoulders',
      exercises: [
        { name: 'Shoulder Press', muscle: 'Shoulders' },
        { name: 'Lateral Raises', muscle: 'Shoulders' },
        { name: 'Front Raises', muscle: 'Shoulders' },
        { name: 'Rear Delt Flyes', muscle: 'Shoulders' },
        { name: 'Upright Rows', muscle: 'Shoulders' }
      ]
    },
    {
      category: 'Arms',
      exercises: [
        { name: 'Bicep Curls', muscle: 'Arms' },
        { name: 'Tricep Extensions', muscle: 'Arms' },
        { name: 'Hammer Curls', muscle: 'Arms' },
        { name: 'Close-grip Bench Press', muscle: 'Arms' },
        { name: 'Preacher Curls', muscle: 'Arms' }
      ]
    }
  ];

  const handleSaveTemplate = () => {
    if (!templateName.trim()) {
      // Could add toast notification here
      console.log('Please enter a template name');
      return;
    }
    
    if (exercises.length === 0) {
      console.log('Please add at least one exercise');
      return;
    }

    // TODO: Save template to storage/database
    console.log('Saving template:', {
      name: templateName,
      exercises: exercises
    });
    
    // Navigate back to start page
    // f7router.back();
  };

  const handleAddExercise = () => {
    if (!newExerciseName.trim()) {
      return;
    }

    const newExercise = {
      id: Date.now(),
      name: newExerciseName,
      sets: [],
      notes: ''
    };

    setExercises([...exercises, newExercise]);
    setNewExerciseName('');
    setShowAddExercise(false);
  };

  const handleRemoveExercise = (exerciseId) => {
    setExercises(exercises.filter(ex => ex.id !== exerciseId));
  };

  return (
    <Page name="create-template" className="activity-page">
      <Navbar title="Create Template" backLink="Back" />
      <Block className="activity-content">
        {/* Template Name Section */}
        <div className="glass-card template-form-card">
          <div className="form-section">
            <h3>Template Details</h3>
            <List noHairlines>
              <ListInput
                type="text"
                placeholder="Enter template name"
                value={templateName}
                onInput={(e) => setTemplateName(e.target.value)}
                clearButton
              />
            </List>
          </div>
        </div>

        {/* Exercises Section */}
        <div className="glass-card exercises-section-card">
          <div className="exercises-header">
            <h3>Exercises</h3>
            <Button 
              className="add-exercise-btn"
              onClick={() => setShowAddExercise(!showAddExercise)}
            >
              + Add Exercise
            </Button>
          </div>

          {/* Add Exercise Form */}
          {showAddExercise && (
            <div className="add-exercise-form">
              <List noHairlines>
                <ListInput
                  type="text"
                  placeholder="Exercise name"
                  value={newExerciseName}
                  onInput={(e) => setNewExerciseName(e.target.value)}
                  clearButton
                />
              </List>
              <div className="form-actions">
                <Button 
                  className="save-exercise-btn"
                  onClick={handleAddExercise}
                >
                  Add
                </Button>
                <Button 
                  className="cancel-btn"
                  onClick={() => {
                    setShowAddExercise(false);
                    setNewExerciseName('');
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {/* Exercises List */}
          <div className="exercises-list">
            {exercises.length === 0 ? (
              <div className="empty-exercises">
                <div className="empty-icon">🏋️</div>
                <p>No exercises added yet</p>
                <p className="empty-subtitle">Tap "Add Exercise" to get started</p>
              </div>
            ) : (
              exercises.map((exercise, index) => (
                <div key={exercise.id} className="exercise-item">
                  <div className="exercise-content">
                    <div className="exercise-number">{index + 1}</div>
                    <div className="exercise-details">
                      <h4>{exercise.name}</h4>
                      <p>Sets: {exercise.sets.length || 0}</p>
                    </div>
                    <Button 
                      className="remove-exercise-btn"
                      onClick={() => handleRemoveExercise(exercise.id)}
                    >
                      ×
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Save Template Button */}
        <div className="template-actions">
          <Button 
            className="save-template-btn"
            onClick={handleSaveTemplate}
            disabled={!templateName.trim() || exercises.length === 0}
          >
            Save Template
          </Button>
        </div>
      </Block>
    </Page>
  );
};

export default CreateTemplatePage;
