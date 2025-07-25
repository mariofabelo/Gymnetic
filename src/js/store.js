import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
    workoutTemplates: [
      {
        id: '1',
        name: 'Upper Body',
        emoji: '🏋️',
        exercises: [
          { name: 'Bench Press', sets: [{ id: 1, weight: '185', reps: '8' }], notes: '' },
          { name: 'Pull-ups', sets: [{ id: 2, weight: '', reps: '10' }], notes: '' },
          { name: 'Shoulder Press', sets: [{ id: 3, weight: '65', reps: '12' }], notes: '' },
          { name: 'Bicep Curls', sets: [{ id: 4, weight: '30', reps: '12' }], notes: '' },
          { name: 'Tricep Extensions', sets: [{ id: 5, weight: '25', reps: '15' }], notes: '' },
          { name: 'Dumbbell Flyes', sets: [{ id: 6, weight: '20', reps: '12' }], notes: '' }
        ],
        duration: 45,
        createdAt: new Date('2024-01-01')
      },
      {
        id: '2',
        name: 'Legs',
        emoji: '🦵',
        exercises: [
          { name: 'Squats', sets: [{ id: 7, weight: '225', reps: '8' }], notes: '' },
          { name: 'Deadlifts', sets: [{ id: 8, weight: '275', reps: '5' }], notes: '' },
          { name: 'Lunges', sets: [{ id: 9, weight: '40', reps: '12' }], notes: '' },
          { name: 'Leg Press', sets: [{ id: 10, weight: '360', reps: '10' }], notes: '' },
          { name: 'Leg Curls', sets: [{ id: 11, weight: '120', reps: '12' }], notes: '' },
          { name: 'Calf Raises', sets: [{ id: 12, weight: '180', reps: '15' }], notes: '' },
          { name: 'Bulgarian Split Squats', sets: [{ id: 13, weight: '25', reps: '10' }], notes: '' }
        ],
        duration: 50,
        createdAt: new Date('2024-01-02')
      },
      {
        id: '3',
        name: 'Full Body',
        emoji: '🏃',
        exercises: [
          { name: 'Burpees', sets: [], notes: '' },
          { name: 'Push-ups', sets: [], notes: '' },
          { name: 'Squats', sets: [], notes: '' },
          { name: 'Pull-ups', sets: [], notes: '' },
          { name: 'Planks', sets: [], notes: '' },
          { name: 'Mountain Climbers', sets: [], notes: '' },
          { name: 'Jump Squats', sets: [], notes: '' },
          { name: 'Dips', sets: [], notes: '' }
        ],
        duration: 35,
        createdAt: new Date('2024-01-03')
      }
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    },
    workoutTemplates({ state }) {
      return state.workoutTemplates;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    addWorkoutTemplate({ state }, template) {
      const newTemplate = {
        ...template,
        id: Date.now().toString(),
        createdAt: new Date()
      };
      state.workoutTemplates = [...state.workoutTemplates, newTemplate];
    },
    updateWorkoutTemplate({ state }, updatedTemplate) {
      const index = state.workoutTemplates.findIndex(template => template.id === updatedTemplate.id);
      if (index !== -1) {
        state.workoutTemplates[index] = updatedTemplate;
        // Trigger reactivity by creating new array
        state.workoutTemplates = [...state.workoutTemplates];
      }
    },
    removeWorkoutTemplate({ state }, templateId) {
      state.workoutTemplates = state.workoutTemplates.filter(template => template.id !== templateId);
    }
  },
})
export default store;
