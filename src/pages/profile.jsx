import React, { useState } from 'react';
import {
  Page,
  Link,
  Block,
  Button,
  Navbar,
  f7
} from 'framework7-react';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  
  // Mock user data - in real app this would come from state/API
  const userData = {
    username: "Alex Johnson",
    level: 12,
    xp: 3450,
    age: 29,
    height: 178, // cm
    weight: 76, // kg
    bodyFat: 14, // %
    streak: 14,
    workoutsCompleted: 156,
    friends: 12,
    leaderboardPosition: 8,
    lastUpdated: "3 days ago"
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const handleImageUpload = () => {
    f7.dialog.prompt('Enter image URL', 'Profile Picture', (url) => {
      if (url) setProfileImage(url);
    });
  };

  const handleInviteFriends = () => {
    f7.dialog.alert('Share link copied to clipboard!', 'Invite Friends');
  };

  const handleLogout = () => {
    f7.dialog.confirm('Are you sure you want to logout?', 'Logout', () => {
      // Handle logout logic here
      f7.dialog.alert('Logged out successfully!');
    });
  };

  return (
    <Page name="profile" className="activity-page">
      <Navbar backLink="Back">
        <Link slot="right" href="/settings/">
          <i className="f7-icons" style={{fontSize: '22px'}}>gear</i>
        </Link>
      </Navbar>
      
      <Block className="activity-content">
        {/* HEADER - Profile Info with Level/XP */}
        <div className="profile-header-card glass-card">
          <div className="profile-header-content">
            <div className="profile-picture-container">
              <div 
                className="profile-picture-ring"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #007AFF 0%, #34C759 50%, #FF9500 100%)',
                  padding: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={handleImageUpload}
              >
                <div 
                  style={{
                    width: '94px',
                    height: '94px',
                    borderRadius: '50%',
                    background: profileImage ? `url(${profileImage}) center/cover` : '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {!profileImage && <i className="f7-icons" style={{fontSize: '36px', color: '#666'}}>person_fill</i>}
                </div>
              </div>
            </div>
            
            <div className="profile-header-info">
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#000',
                margin: '0 0 4px 0'
              }}>{userData.username}</h2>
              <p style={{
                fontSize: '16px',
                color: '#007AFF',
                fontWeight: '600',
                margin: '0'
              }}>Level {userData.level} | XP: {userData.xp.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* SECTION 1: QUICK ACTIONS */}
        <div className="section-title">
          <h3 style={{fontSize: '18px', fontWeight: '600', color: '#000', margin: '24px 0 16px 0'}}>
            Quick Actions
          </h3>
        </div>
        
        <div className="quick-actions-grid">
          <div className="glass-card quick-action-card" onClick={() => f7.views.main.router.navigate('/measurements/')}>
            <div className="quick-action-content">
              <div className="action-icon">📏</div>
              <h4>Body Measurements</h4>
            </div>
          </div>
          
          <div className="glass-card quick-action-card" onClick={() => f7.dialog.alert('Achievements coming soon!')}>
            <div className="quick-action-content">
              <div className="action-icon">🏆</div>
              <h4>Achievements</h4>
            </div>
          </div>
          
          <div className="glass-card quick-action-card" onClick={() => f7.views.main.router.navigate('/stats/')}>
            <div className="quick-action-content">
              <div className="action-icon">📊</div>
              <h4>Workout Stats</h4>
            </div>
          </div>
          
          <div className="glass-card quick-action-card" onClick={() => f7.dialog.alert('Friends feature coming soon!')}>
            <div className="quick-action-content">
              <div className="action-icon">🤝</div>
              <h4>Friends</h4>
            </div>
          </div>
        </div>

        {/* SECTION 2: PERSONAL INFO SNAPSHOT */}
        <div className="section-title">
          <h3 style={{fontSize: '18px', fontWeight: '600', color: '#000', margin: '32px 0 16px 0'}}>
            Personal Info
          </h3>
        </div>
        
        <div className="glass-card personal-info-card">
          <div className="personal-info-grid">
            <div className="info-item">
              <span className="info-label">Age</span>
              <span className="info-value">{userData.age}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Height</span>
              <span className="info-value">{userData.height} cm</span>
            </div>
            <div className="info-item">
              <span className="info-label">Weight</span>
              <span className="info-value">{userData.weight} kg</span>
            </div>
            <div className="info-item">
              <span className="info-label">BMI</span>
              <span className="info-value">{calculateBMI(userData.weight, userData.height)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Body Fat</span>
              <span className="info-value">{userData.bodyFat}%</span>
            </div>
            <div className="info-item">
              <span className="info-label"></span>
              <span className="info-value"></span>
            </div>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '16px 0 0 0',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>Last updated: {userData.lastUpdated}</p>
        </div>

        {/* SECTION 3: PROGRESS SUMMARY */}
        <div className="section-title">
          <h3 style={{fontSize: '18px', fontWeight: '600', color: '#000', margin: '32px 0 16px 0'}}>
            Progress Summary
          </h3>
        </div>
        
        <div className="glass-card progress-summary-card">
          <div className="progress-stats">
            <div className="progress-item">
              <span className="progress-icon">📈</span>
              <span className="progress-text">Strength Gains: <strong>↑ 18%</strong> in last 90 days</span>
            </div>
            <div className="progress-item">
              <span className="progress-icon">🏃</span>
              <span className="progress-text">Cardio Endurance: <strong>↑ 12%</strong></span>
            </div>
            <div className="progress-item">
              <span className="progress-icon">💪</span>
              <span className="progress-text">Best Lift: <strong>Deadlift 180kg</strong></span>
            </div>
          </div>
          
          <div className="progress-metrics">
            <div className="metric-item">
              <span className="metric-label">Streak</span>
              <span className="metric-value">{userData.streak} days</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Workouts Completed</span>
              <span className="metric-value">{userData.workoutsCompleted}</span>
            </div>
          </div>
        </div>

        {/* SECTION 4: SOCIAL & COMPETITION */}
        <div className="section-title">
          <h3 style={{fontSize: '18px', fontWeight: '600', color: '#000', margin: '32px 0 16px 0'}}>
            Social & Competition
          </h3>
        </div>
        
        <div className="glass-card social-card">
          <div className="social-stats">
            <div className="social-item">
              <span className="social-label">Friends</span>
              <span className="social-value">{userData.friends}</span>
            </div>
            <div className="social-item">
              <span className="social-label">Leaderboard Position</span>
              <span className="social-value">#{userData.leaderboardPosition} in Strength</span>
            </div>
          </div>
          
          <Button 
            fill 
            style={{
              background: '#007AFF',
              margin: '16px 0 0 0',
              borderRadius: '12px'
            }}
            onClick={handleInviteFriends}
          >
            Invite Friends → Share Link
          </Button>
        </div>

        {/* SECTION 5: CUSTOMIZATION */}
        <div className="section-title">
          <h3 style={{fontSize: '18px', fontWeight: '600', color: '#000', margin: '32px 0 16px 0'}}>
            Customization
          </h3>
        </div>
        
        <div className="customization-options">
          <div className="glass-card customization-card" onClick={() => f7.dialog.alert('Voice Coach settings coming soon!')}>
            <div className="customization-content">
              <span className="customization-icon">🔊</span>
              <span className="customization-text">Voice Coach Settings</span>
              <i className="f7-icons" style={{color: '#666', fontSize: '16px'}}>chevron_right</i>
            </div>
          </div>
          
          <div className="glass-card customization-card" onClick={() => f7.dialog.alert('Goal preferences coming soon!')}>
            <div className="customization-content">
              <span className="customization-icon">🎯</span>
              <span className="customization-text">Goal Preferences</span>
              <i className="f7-icons" style={{color: '#666', fontSize: '16px'}}>chevron_right</i>
            </div>
          </div>
          
          <div className="glass-card customization-card" onClick={() => f7.dialog.alert('App theme settings coming soon!')}>
            <div className="customization-content">
              <span className="customization-icon">🎨</span>
              <span className="customization-text">App Theme</span>
              <i className="f7-icons" style={{color: '#666', fontSize: '16px'}}>chevron_right</i>
            </div>
          </div>
        </div>

        {/* SECTION 6: LOGOUT / SUPPORT */}
        <div className="section-title">
          <h3 style={{fontSize: '18px', fontWeight: '600', color: '#000', margin: '32px 0 16px 0'}}>
            Support
          </h3>
        </div>
        
        <div className="support-options">
          <div className="glass-card support-card" onClick={() => f7.dialog.alert('Help & Feedback coming soon!')}>
            <div className="support-content">
              <span className="support-icon">❓</span>
              <span className="support-text">Help & Feedback</span>
              <i className="f7-icons" style={{color: '#666', fontSize: '16px'}}>chevron_right</i>
            </div>
          </div>
          
          <div className="glass-card support-card logout-card" onClick={handleLogout}>
            <div className="support-content">
              <span className="support-icon">🚪</span>
              <span className="support-text" style={{color: '#FF3B30'}}>Logout</span>
              <i className="f7-icons" style={{color: '#FF3B30', fontSize: '16px'}}>chevron_right</i>
            </div>
          </div>
        </div>
      </Block>
    </Page>
  );
};

export default ProfilePage;
