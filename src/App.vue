<template>
  <div id="app" class="flex justify-center">
    <div class="flex flex-col bg-red-200 w-1/4 px-10 pt-20">
      <draggable
        :animation="200"
        ghost-class="moving-card"
        group="users"
        filter=".action-button"
        class="w-full max-w-md"
        tag="ul"
        v-model="myList"
      >
        <control-card
          v-for="user in this.$store.state.userList"
          :key="user.id"
          :user="user"
        >
        </control-card>
      </draggable>
      <!-- <button @click="openScreen">CLick me</button> -->
    </div>

    <ul
      class="
        right-side
        flex flex-col
        items-center
        w-3/4
        bg-blue-200
        px-20
        pt-10
      "
    >
      <display-card
        v-for="user in this.$store.state.userList"
        :key="user.id"
        :user="user"
        class="h-44 w-full"
        ref="hello"
      >
      </display-card>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ControlCard from "./components/ControlCard";
import DisplayCard from "./components/DisplayCard";
import fscreen from "fscreen";
export default {
  name: "App",
  components: {
    draggable,
    ControlCard,
    DisplayCard,
  },
  data() {
    return {};
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.userList;
      },
      set(value) {
        this.$store.commit("updateList", value);
      },
    },
  },
  methods: {
    openScreen() {
      if (fscreen.fullscreenEnabled) {
        fscreen.addEventListener("fullscreenchange", handler, false);
        fscreen.requestFullscreen(this.$refs);
      }

      function handler() {
        if (fscreen.fullscreenElement !== null) {
          console.log("Entered fullscreen mode");
        } else {
          console.log("Exited fullscreen mode");
        }
      }
    },
  },
  mounted() {
    console.log(fscreen.fullscreenEnabled);
  },
};
</script>

<style>
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.moving-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>

