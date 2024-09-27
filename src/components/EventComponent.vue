<template>
  <div>
    <button class="motivation-button" @click="emitMotivationalMessage">Pronađi motivaciju...</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitMotivationalMessage() {
      const messages = [
        'Raketa do ljeta!',
        'Nikad poraz, samo lekcija!',
        'Ne čekaj ponedjeljak!',
      ];

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      this.$emit('motivational-message', randomMessage);
    },
  },
};
</script>

<style scoped>
.motivation-button {
  background-color: #2D9596;
  color: #fff;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;
}

.motivation-button:hover {
  background-color: #1c2833;
}
</style>
