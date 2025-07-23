// Shared workout data for consistent display across Home and History pages

// Generate consistent workout data based on date
const generateWorkoutData = () => {
  const workouts = [];
  const today = new Date();
  const workoutTypes = ['Push Day', 'Pull Day', 'Leg Day', 'Cardio', 'Full Body', 'Core'];
  
  // Generate sample workouts for the last month
  for (let i = 0; i < 30; i++) {
    const workoutDate = new Date(today);
    workoutDate.setDate(today.getDate() - i);
    
    // Use date as seed for consistent results
    const dateStr = workoutDate.toDateString();
    const dateHash = dateStr.split('').reduce((hash, char) => hash + char.charCodeAt(0), 0);
    
    // Deterministic "random" based on date hash
    const shouldHaveWorkout = (dateHash % 10) < 6; // ~60% chance, consistent per date
    
    if (shouldHaveWorkout) {
      const typeIndex = dateHash % workoutTypes.length;
      const duration = 45 + (dateHash % 45); // 45-90 minutes, consistent per date
      
      workouts.push({
        date: workoutDate,
        type: workoutTypes[typeIndex],
        duration: duration,
      });
    }
  }
  
  return workouts.sort((a, b) => b.date - a.date);
};

// Cache the workout data so it's generated only once
let cachedWorkouts = null;

export const getRecentWorkouts = () => {
  if (!cachedWorkouts) {
    cachedWorkouts = generateWorkoutData();
  }
  return cachedWorkouts;
};

// Group workouts by week
export const groupWorkoutsByWeek = (workouts) => {
  const weeks = {};
  
  workouts.forEach(workout => {
    const monday = new Date(workout.date);
    const dayOfWeek = monday.getDay();
    const diff = monday.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // adjust when day is sunday
    monday.setDate(diff);
    
    const weekKey = monday.toDateString();
    if (!weeks[weekKey]) {
      weeks[weekKey] = {
        startDate: new Date(monday),
        workouts: []
      };
    }
    weeks[weekKey].workouts.push(workout);
  });
  
  return Object.values(weeks).sort((a, b) => b.startDate - a.startDate);
}; 