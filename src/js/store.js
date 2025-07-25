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
          { name: 'Bench Press', sets: [], notes: '' },
          { name: 'Pull-ups', sets: [], notes: '' },
          { name: 'Shoulder Press', sets: [], notes: '' },
          { name: 'Bicep Curls', sets: [], notes: '' },
          { name: 'Tricep Extensions', sets: [], notes: '' },
          { name: 'Dumbbell Flyes', sets: [], notes: '' }
        ],
        duration: 45,
        createdAt: new Date('2024-01-01')
      },
      {
        id: '2',
        name: 'Legs',
        emoji: '🦵',
        exercises: [
          { name: 'Squats', sets: [], notes: '' },
          { name: 'Deadlifts', sets: [], notes: '' },
          { name: 'Lunges', sets: [], notes: '' },
          { name: 'Leg Press', sets: [], notes: '' },
          { name: 'Leg Curls', sets: [], notes: '' },
          { name: 'Calf Raises', sets: [], notes: '' },
          { name: 'Bulgarian Split Squats', sets: [], notes: '' }
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
