import React from 'react';
import {
  Page,
  Navbar,
  Block,
  Link,
  Icon,
} from 'framework7-react';
import { getRecentWorkouts, groupWorkoutsByWeek } from '../js/workout-data';
// import LiquidGlass from 'liquid-glass-react';

const HomePage = () => {
  const workouts = getRecentWorkouts();
  const weeklyWorkouts = groupWorkoutsByWeek(workouts);
  const currentWeekWorkouts = weeklyWorkouts.slice(0, 1); // Only show current/most recent week

  return (
    <Page name="home" className="activity-page">
      {/* Page content */}
      <Block className="activity-content">
        {/* Dashboard Title */}
        <div className="page-title">
          <h1>Dashboard</h1>
        </div>

        {/* Profile Section */}
        <Link href="/profile/">
          <div className="glass-card profile-card">
            <div className="profile-content">
              <div className="profile-avatar">
                <Icon ios="f7:person_crop_circle_fill" md="material:account_circle" size="40" />
              </div>
              <div className="profile-info">
                <h3>Mario Fabelo</h3>
                <p>142 workouts</p>
              </div>
              <div className="profile-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* This Week's Title */}
        <div className="page-title" style={{ marginBottom: '0px', marginTop: '16px' }}>
          <h1>This Week</h1>
        </div>

        {/* This Week's Workouts Section */}
        <div className="recent-workouts-section">
          {currentWeekWorkouts.length > 0 ? (
            currentWeekWorkouts.map((week, weekIndex) => (
              <div key={weekIndex} className="glass-card workout-week-card">
                <div className="week-header">
                  <span className="week-label">
                    Week of {week.startDate.toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="workout-count">
                    {week.workouts.length} workout{week.workouts.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className="workouts-list">
                  {week.workouts.slice(0, 5).map((workout, workoutIndex) => (
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
            ))
          ) : (
            <div className="glass-card workout-week-card">
              <div className="empty-week">
                <p>No workouts this week yet</p>
                <span>Start your first workout!</span>
              </div>
            </div>
          )}

          {/* See More Button */}
          <Link href="/history/" className="see-more-button">
            <div className="see-more-content">
              <span className="see-more-text">See All History</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

        {/* Stats and Connect Row */}
        <div className="cards-row">
          <Link href="/connect/" className="glass-card connect-card">
            <div className="card-content centered">
              <h3>Connect</h3>
            </div>
          </Link>

          <Link href="/stats/" className="glass-card stats-card">
            <div className="card-content centered">
              <h3>Stats</h3>
            </div>
          </Link>
        </div>
      </Block>
    </Page>
  );
};

export default HomePage;
