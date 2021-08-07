<template>
  <ul class="right-side flex flex-col items-center w-3/4 bg-blue-200 px-20 pt-10">
    <div
      v-if="!getState"
      class="flex items-center justify-center flex-col pt-10"
    >
      <img src="../assets/empty-state.svg" alt="" class="w-56" />
      <p class="font-bold text-2xl text-white mt-4">
        Go on and add a new Application &#128579;
      </p>
    </div>
    <draggable
      :animation="200" ghost-class="moving-card" group="users" 
      tag="ul" class="w-full" v-model="myList">
      <display-card
        v-for="user in this.$store.state.cardList"
        :key="user.id"
        :user="user"
        >
      </display-card>
    </draggable>
  </ul>
</template>

<script>
import DisplayCard from "./DisplayCard";
import draggable from "vuedraggable";
export default {
  components: {
    DisplayCard,
    draggable
  },
  data() {
    return {
      emptyState: "",
    };
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.cardList;
      },
      set(value) {
        this.$store.commit("updateList", value);
      },
    },
    getState() {
      if (this.$store.state.cardList.length) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>