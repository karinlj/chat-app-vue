<template>
  <div class="chat container">
    <!-- outputting prop -->
    <h2 class="ceter teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text name">{{message.name}}</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <!-- passing prop -->
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "./NewMessage";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  //accepting props
  props: ["name"],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {},
  //when comp created but not yet mounted
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    //listener for changes (messages)
    //snapshot= for entire db
    //we only want changes
    ref.onSnapshot((snapshot) => {
      //console.log("snapshot", snapshot.docChanges());
      //for each changes: is it and added-type?
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          //push changes to the messages prop
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            //format with moment
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
};
</script>

<style>
.chat h2 {
  font-size: 2.6rem;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4rem;
}
.chat .time {
  display: block;
  font-size: 0.8rem;
}
.chat .name {
  padding-right: 0.5rem;
}
.chat .messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
