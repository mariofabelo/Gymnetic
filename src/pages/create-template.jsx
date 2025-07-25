import React, { useState } from 'react';
import { Page, Navbar, Block, Button, List, ListInput, ListItem, Link, Popup, f7 } from 'framework7-react';
import store from '../js/store';

const CreateTemplatePage = ({ editTemplate }) => {
  const [templateName, setTemplateName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💪');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [showExerciseLibrary, setShowExerciseLibrary] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTemplateId, setEditingTemplateId] = useState(null);

  // Initialize with edit data if provided
  React.useEffect(() => {
    if (editTemplate) {
      setIsEditing(true);
      setEditingTemplateId(editTemplate.id);
      setTemplateName(editTemplate.name);
      setSelectedEmoji(editTemplate.emoji);
      setExercises(editTemplate.exercises || []);
    }
  }, [editTemplate]);

  // Common workout emojis
  const workoutEmojis = [
    '💪', '🏋️', '🤸', '🏃', '🚴', '🧘', '🏊', '🤾', '⚽', '🏀',
    '🎾', '🏐', '🏈', '⚾', '🏓', '🏸', '🥊', '🤺', '🏆', '🥇',
    '🔥', '⚡', '��', '🎯', '🚀', '💯', '⭐', '✨', '🦵', '🏃‍♀️'
  ];

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

    // Calculate estimated duration based on exercises (5 minutes per exercise on average)
    const estimatedDuration = Math.max(20, exercises.length * 5);

    if (isEditing) {
      // Update existing template
      const updatedTemplate = {
        id: editingTemplateId,
        name: templateName.trim(),
        emoji: selectedEmoji,
        exercises: exercises,
        duration: estimatedDuration,
        createdAt: editTemplate?.createdAt || new Date()
      };
      store.dispatch('updateWorkoutTemplate', updatedTemplate);
    } else {
      // Create new template
      const template = {
        name: templateName.trim(),
        emoji: selectedEmoji,
        exercises: exercises,
        duration: estimatedDuration
      };
      store.dispatch('addWorkoutTemplate', template);
    }

    // Navigate back to start page
    f7.views.current.router.back();
  };

  const handleAddExerciseFromLibrary = (exerciseName) => {
    const newExercise = {
      id: Date.now(),
      name: exerciseName,
      sets: [],
      notes: ''
    };

    setExercises([...exercises, newExercise]);
    setShowExerciseLibrary(false);
  };

  const handleRemoveExercise = (exerciseId) => {
    setExercises(exercises.filter(ex => ex.id !== exerciseId));
  };

  return (
    <Page name="create-template" className="activity-page">
      <Navbar title="Create Template" backLink="Back" />
      <Block className="activity-content">
        {/* Template Name Section */}
        <div className="glass-card template-name-section">
          <h3>Template Details</h3>
          <div className="template-input-row">
            <div
              className="emoji-selector"
              onClick={() => setShowEmojiPicker(true)}
            >
              <span className="selected-emoji">{selectedEmoji}</span>
              <span className="emoji-label">Tap to change</span>
            </div>
            <div className="name-input-container">
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
        </div>

        {/* Exercises Section */}
        <div className="glass-card exercises-section-card">
          <div className="exercises-header">
            <h3>Exercises</h3>
            <Button
              className="add-exercise-btn"
              onClick={() => setShowExerciseLibrary(true)}
            >
              + Add Exercise
            </Button>
          </div>

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

        {/* Exercise Library Modal */}
        {showExerciseLibrary && (
          <div className="exercise-library-modal-backdrop" onClick={() => setShowExerciseLibrary(false)}>
            <div className="exercise-library-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Exercise Library</h2>
                <Button
                  className="close-modal-btn"
                  onClick={() => setShowExerciseLibrary(false)}
                >
                  ×
                </Button>
              </div>

              <div className="modal-content">
                <div className="exercise-categories">
                  {exerciseLibrary.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="exercise-category">
                      <h3 className="category-title">{category.category}</h3>
                      <div className="category-exercises">
                        {category.exercises.map((exercise, exerciseIndex) => (
                          <div
                            key={exerciseIndex}
                            className="library-exercise-item"
                            onClick={() => handleAddExerciseFromLibrary(exercise.name)}
                          >
                            <div className="exercise-info">
                              <h4>{exercise.name}</h4>
                              <p>{exercise.muscle}</p>
                            </div>
                            <div className="add-icon">+</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emoji Picker Modal */}
        {showEmojiPicker && (
          <div className="emoji-picker-modal-backdrop" onClick={() => setShowEmojiPicker(false)}>
            <div className="emoji-picker-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Choose an Emoji</h2>
                <Button
                  className="close-modal-btn"
                  onClick={() => setShowEmojiPicker(false)}
                >
                  ×
                </Button>
              </div>

              <div className="modal-content">
                <div className="emoji-grid">
                  {workoutEmojis.map((emoji, index) => (
                    <div
                      key={index}
                      className={`emoji-option ${selectedEmoji === emoji ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedEmoji(emoji);
                        setShowEmojiPicker(false);
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Block>
    </Page>
  );
};

export default CreateTemplatePage;
