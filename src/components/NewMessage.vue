<template>
  <div class="new_message container">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add) :</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  //accepting props
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      //the input, the prop, the time
      //console.log(this.NewMessage, this.name, Date.now());
      if (this.newMessage) {
        //om det inte finns en collection 'messages', så skapas en
        //async request, takes time to do, returns a promise
        db.collection("messages")
          //add a document object to db (from chat.vue listen to changes in db)
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          //do not need a then()
          .catch((err) => {
            console.log("error", err);
          });
        //reset data-properties
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message in order to send one.";
      }
    },
  },
};
</script>

<style>
</style>
