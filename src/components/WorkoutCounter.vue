<template>
  <div class="workout-counter">
    <h2>Brojač treninga</h2>
    <p>Ukupno: {{ totalWorkouts }}</p>
  </div>
</template>

<script>
export default {
  props: {
    totalWorkouts: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.workout-counter {
  margin: 20px auto;
  padding: 15px;
  border-radius: 20px;
  background-color: #ECF4D6;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>
