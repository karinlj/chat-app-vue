<template>
  <div class="welcome container">
    <!-- comp for entering the chat room -->
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <!-- om det finns feedback -->
          <p class="red-text" v-if="feedback">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {},
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      //console.log("name: ", this.name);
      //om man har skrivit i ett namn:
      if (this.name) {
        //redirect to chat-page
        //passing prop with params
        //inte: /chat/truls, utan som prop=truls men syns ej i url:en
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to join.";
      }
    },
  },
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3rem;
}
.welcome button {
  margin: 30px auto;
}
</style>
