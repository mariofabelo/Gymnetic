import React from 'react';
import {
  Page,
  Navbar,
  Block,
  Link,
  Icon,
} from 'framework7-react';

const StatsPage = () => {
  return (
    <Page name="stats" className="activity-page">
      <Navbar title="Stats" backLink="Back" />
      
      <Block className="activity-content">
        {/* Motivation Header */}
        <div className="motivation-header">
          <div className="motivation-badge">
            <div className="badge-icon">🔥</div>
            <div className="motivation-text">
              <h2>7-Day Streak!</h2>
              <p>Stronger than 85% of users!</p>
            </div>
            <div className="confetti-animation">🎉</div>
          </div>
        </div>

        {/* Section 1: Daily Snapshot */}
        <div className="stats-section daily-snapshot">
          <h3 className="section-title">Today's Performance</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">❤️</div>
              <div className="metric-info">
                <span className="metric-label">HR</span>
                <span className="metric-value">78 bpm</span>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🏃</div>
              <div className="metric-info">
                <span className="metric-label">Steps</span>
                <span className="metric-value">6,245</span>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🔥</div>
              <div className="metric-info">
                <span className="metric-label">Calories</span>
                <span className="metric-value">580</span>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">⏱</div>
              <div className="metric-info">
                <span className="metric-label">Active</span>
                <span className="metric-value">42 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Progress at a Glance */}
        <div className="stats-section progress-glance">
          <h3 className="section-title">📈 Strength Graph (Last 4 Weeks)</h3>
          <div className="strength-chart">
            <div className="chart-container">
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color bench"></div>
                  <span>Bench Press</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color squat"></div>
                  <span>Squat</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color deadlift"></div>
                  <span>Deadlift</span>
                </div>
              </div>
              <div className="chart-visual">
                <div className="chart-bars">
                  <div className="week-bar">
                    <div className="bar bench" style={{height: '60%'}}></div>
                    <div className="bar squat" style={{height: '75%'}}></div>
                    <div className="bar deadlift" style={{height: '85%'}}></div>
                    <span className="week-label">W1</span>
                  </div>
                  <div className="week-bar">
                    <div className="bar bench" style={{height: '65%'}}></div>
                    <div className="bar squat" style={{height: '78%'}}></div>
                    <div className="bar deadlift" style={{height: '88%'}}></div>
                    <span className="week-label">W2</span>
                  </div>
                  <div className="week-bar">
                    <div className="bar bench" style={{height: '70%'}}></div>
                    <div className="bar squat" style={{height: '82%'}}></div>
                    <div className="bar deadlift" style={{height: '90%'}}></div>
                    <span className="week-label">W3</span>
                  </div>
                  <div className="week-bar">
                    <div className="bar bench" style={{height: '75%'}}></div>
                    <div className="bar squat" style={{height: '85%'}}></div>
                    <div className="bar deadlift" style={{height: '92%'}}></div>
                    <span className="week-label">W4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="personal-bests">
            <h4 className="subsection-title">🏆 Personal Bests</h4>
            <div className="pb-list">
              <div className="pb-item">
                <span className="exercise-name">Bench</span>
                <span className="pb-value">100kg</span>
                <span className="pb-improvement">↑5%</span>
              </div>
              <div className="pb-item">
                <span className="exercise-name">Squat</span>
                <span className="pb-value">140kg</span>
                <span className="pb-improvement">↑3%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Form & Performance */}
        <div className="stats-section form-performance">
          <h3 className="section-title">✅ Form & Performance</h3>
          <div className="form-accuracy">
            <div className="accuracy-header">
              <span className="accuracy-score">Form Accuracy: 87%</span>
              <span className="accuracy-trend">↑ from 79% last week</span>
            </div>
            <div className="accuracy-bar">
              <div className="accuracy-fill" style={{width: '87%'}}></div>
            </div>
          </div>
          <div className="form-insight">
            <p>"Your squat depth improved 20% this month!"</p>
          </div>
        </div>

        {/* Section 4: Wearable Health Data */}
        <div className="stats-section health-data">
          <h3 className="section-title">⌚ Wearable Health Data</h3>
          <div className="health-metrics">
            <div className="health-item">
              <span className="health-label">Resting HR Trend</span>
              <span className="health-value">↓ from 72 → 68 bpm</span>
            </div>
            <div className="health-item">
              <span className="health-label">HRV</span>
              <span className="health-value">65 ms (↑ good recovery)</span>
            </div>
            <div className="health-item">
              <span className="health-label">Sleep Quality Impact</span>
              <span className="health-value">+7% strength</span>
            </div>
          </div>
        </div>

        {/* Section 5: Goals & Challenges */}
        <div className="stats-section goals-challenges">
          <h3 className="section-title">🎯 Goals & Challenges</h3>
          <div className="goal-item">
            <div className="goal-header">
              <span className="goal-title">Goal: 10 pull-ups in a row</span>
              <span className="goal-progress-text">7/10</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '70%'}}></div>
            </div>
            <p className="goal-encouragement">"Only 3 more to go!"</p>
          </div>
          
          <div className="challenge-item">
            <h4 className="challenge-title">⚡ Weekly Challenge: Beat 5k Time</h4>
            <div className="challenge-stat">
              <span className="challenge-label">Current Best</span>
              <span className="challenge-value">25:30</span>
            </div>
          </div>
        </div>

        {/* Section 6: Achievements & Streaks */}
        <div className="stats-section achievements">
          <h3 className="section-title">🏅 Achievements & Streaks</h3>
          <div className="badges-container">
            <div className="badge-item">
              <div className="badge-icon">🎯</div>
              <span className="badge-name">Perfect Form</span>
            </div>
            <div className="badge-item">
              <div className="badge-icon">💪</div>
              <span className="badge-name">PR Crusher</span>
            </div>
          </div>
          
          <div className="streak-stats">
            <div className="streak-item">
              <span className="streak-label">🔥 Streak</span>
              <span className="streak-value">14 days</span>
            </div>
            <div className="streak-item">
              <span className="streak-label">Level</span>
              <span className="streak-value">12</span>
            </div>
            <div className="streak-item">
              <span className="streak-label">XP</span>
              <span className="streak-value">3,450</span>
            </div>
          </div>
        </div>

        {/* Section 7: AI Insights */}
        <div className="stats-section ai-insights">
          <h3 className="section-title">🤖 AI Insights</h3>
          <div className="insights-list">
            <div className="insight-item">
              <div className="insight-icon">💤</div>
              <p>"You lifted 15% more weight on days you had >7h sleep — keep prioritizing rest!"</p>
            </div>
            <div className="insight-item">
              <div className="insight-icon">💡</div>
              <p>"Your bench press plateaued — try tricep pushdowns twice a week."</p>
            </div>
          </div>
        </div>
      </Block>
    </Page>
  );
};

export default StatsPage;
