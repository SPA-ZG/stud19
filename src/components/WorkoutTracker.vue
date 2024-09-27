<template>
    <div class="workout-tracker">

        <div class="center-content">
            <h2>POPIS TRENINGA</h2>
            <div class="form-container">
                <form @submit.prevent="addWorkout">
                    <label for="workoutType">Odaberite tip treninga:</label>
                    <select v-model="selectedWorkoutType" id="workoutType" required>
                        <option value="Trčanje">Trčanje</option>
                        <option value="Trčanje - sprint">Trčanje - sprint</option>
                        <option value="Klasični fitness">Klasični fitness</option>
                        <option value="Kardio trening">Kardio trening</option>
                        <option value="HIIT">HIIT</option>
                        <option value="Pilates">Pilates</option>
                    </select>
                    <button type="submit">Dodaj</button>
                </form>
            </div>

            <motivation-popup v-if="isMotivationPopupVisible" :motivational-message="motivationalMessage"
                @close-popup="closeMotivationPopup" />

            <ul>
                <li v-for="workout in workouts" :key="workout.id">
                    <span>{{ workout.type }} </span>
                    <button @click="editWorkout(workout)">Uredi</button>
                    <button @click="removeWorkout(workout.id)">Ukloni</button>
                </li>
            </ul>

            <div v-if="isEditing" class="edit-modal">
                <label for="editedWorkoutType">Uredi</label>
                <input v-model="editedWorkout.type" id="editedWorkoutType" />
                <button @click="saveEdit">Spremi</button>
                <button @click="cancelEdit">Odustani</button>
            </div>

            <div v-if="workouts.length > 0">
                <button @click="clearWorkouts">Obriši sve treninge</button>
            </div>

            <div>
                <workout-counter :totalWorkouts="totalWorkouts" />
            </div>

            <div>
                <event-component @motivational-message="showMotivationPopup" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, watch } from 'vue';
import { useWorkoutStore } from '@/stores/counter';
import WorkoutCounter from '@/components/WorkoutCounter.vue';
import EventComponent from '@/components/EventComponent.vue';
import MotivationPopup from '@/components/MotivationPopup.vue';

export default {
    components: {
        WorkoutCounter,
        EventComponent,
        MotivationPopup
    },
    data() {
        return {
            isMotivationPopupVisible: false,
            motivationalMessage: '',
        };
    },
    methods: {
        showMotivationPopup(message) {
            this.motivationalMessage = message;
            this.isMotivationPopupVisible = true;
        },
        closeMotivationPopup() {
            this.isMotivationPopupVisible = false;
        },
    },

    setup() {
        const store = useWorkoutStore();

        const selectedWorkoutType = ref('');
        const isEditing = ref(false);
        const editedWorkout = ref({ type: '' });

        const workouts = store.workouts;

        const addWorkout = () => {
            if (selectedWorkoutType.value.trim() !== '') {
                store.addWorkout({ id: Date.now(), type: selectedWorkoutType.value });
                selectedWorkoutType.value = '';
            }
        };

        const totalWorkouts = ref(store.workouts.length);
        watch(() => store.workouts.length, (newValue) => {
            totalWorkouts.value = newValue;
        });

        const editWorkout = (workout) => {
            isEditing.value = true;
            editedWorkout.value = { ...workout };
        };

        const removeWorkout = (workoutId) => {
            store.removeWorkout(workoutId);
        };

        const clearWorkouts = () => {
            store.clearAllWorkouts();
        };

        const saveEdit = () => {
            isEditing.value = false;
            const index = workouts.findIndex((workout) => workout.id === editedWorkout.value.id);
            if (index !== -1) {
                store.workouts[index].type = editedWorkout.value.type;
            }
        };

        const cancelEdit = () => {
            isEditing.value = false;
            editedWorkout.value = { type: '' };
        };

        return { selectedWorkoutType, totalWorkouts, workouts, addWorkout, isEditing, editWorkout, removeWorkout, clearWorkouts, editedWorkout, saveEdit, cancelEdit };
    },
};
</script>
  
<style>
.center-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    text-align: center;
    background-color: #9AD0C2;
}
</style>