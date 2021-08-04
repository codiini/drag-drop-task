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
        :list="getList"
      >
        <user-card
          v-for="user in users"
          :key="user.id"
          :user="user"
        ></user-card>
      </draggable>
    </div>
    <div
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
      <draggable
      :list="getList"
        :animation="200"
        ghost-class="moving-card"
        group="users"
        filter=".action-button"
        class="w-full"
        tag="ul"
      >
        <user-card
          v-for="user in users"
          :key="user.id"
          :user="user"
          class="h-44"
        ></user-card>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import UserCard from "./components/UserCard";
export default {
  name: "App",
  components: {
    draggable,
    UserCard,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Adrian Schubert",
        },
        {
          id: 2,
          name: "Violet Gates",
        },
        {
          id: 3,
          name: "Steve Jobs",
        },
        {
          id: 4,
          name: "Yassine Smith",
        },
        {
          id: 5,
          name: "Senior Saez",
        },
      ],
    };
  },
  computed:{
    getList(){
      return this.$store.state.userList
    }
  },
  mounted() {
    console.log(this.$store);
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

