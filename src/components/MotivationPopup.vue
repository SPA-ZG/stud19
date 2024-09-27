<template>
  <div v-if="motivationalMessage" class="motivation-popup">
    <p class="motivation-message">Motivacija za danas: {{ motivationalMessage }}</p>
    <button class="close-button" @click="closePopup">Zatvori</button>
  </div>
</template>

<script>
export default {
  props: {
    motivationalMessage: String,
  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
    },
  },
};
</script>

<style scoped>
.motivation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #265073;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.motivation-message {
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
}

.close-button {
  background-color: #2D9596;
  color: #fff;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: #1c2833;
}
</style>
