import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    workouts: [],
  }),
  actions: {
    addWorkout(workout) {
      this.workouts.push(workout);
    },
    removeWorkout(workoutId) {
      const index = this.workouts.findIndex((workout) => workout.id === workoutId);
      if (index !== -1) {
        this.workouts.splice(index, 1);
      }
    },
    clearAllWorkouts() {
      this.workouts.splice(0, this.workouts.length);
    },
  },
});
