import React from 'react';
import {
  Page,
  Navbar,
  Block,
} from 'framework7-react';
import { getRecentWorkouts, groupWorkoutsByWeek } from '../js/workout-data';

const HistoryPage = () => {
  const workouts = getRecentWorkouts();
  const weeklyWorkouts = groupWorkoutsByWeek(workouts);
  const totalWorkouts = workouts.length;

  return (
    <Page name="history" className="activity-page">
      {/* Top Navbar */}
      <Navbar backLink="Back" sliding={true} />

      {/* Page content */}
      <Block className="activity-content">
        {/* Page Title */}
        <div className="page-title">
          <h1 style={{
            fontFamily: '-apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '26px',
            fontWeight: '600',
            margin: '0',
            textAlign: 'left'
          }}>History</h1>
        </div>

        {/* Header with stats */}
        <div className="history-stats">
          <p className="total-workouts">{totalWorkouts} total workouts</p>
        </div>

        {/* All workout weeks */}
        <div className="workout-history-section">
          {weeklyWorkouts.map((week, weekIndex) => (
            <div key={weekIndex} className="glass-card workout-week-card">
              <div className="week-header">
                <span className="week-label">
                  Week of {week.startDate.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: week.startDate.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
                  })}
                </span>
                <span className="workout-count">
                  {week.workouts.length} workout{week.workouts.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="workouts-list">
                {week.workouts.map((workout, workoutIndex) => (
                  <div key={workoutIndex} className="workout-item">
                    <div className="workout-info">
                      <span className="workout-type">{workout.type}</span>
                      <span className="workout-date">
                        {workout.date.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="workout-duration">
                      {workout.duration}m
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {weeklyWorkouts.length === 0 && (
            <div className="glass-card empty-state">
              <div className="empty-content">
                <h3>No workout history yet</h3>
                <p>Start your fitness journey and your workouts will appear here!</p>
              </div>
            </div>
          )}
        </div>
      </Block>
    </Page>
  );
};

export default HistoryPage; 