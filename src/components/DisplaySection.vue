<template>
  <ul
    class="right-side flex flex-col items-center w-3/4 bg-blue-200 px-20 pt-10"
  >
    <div
      v-if="!getState"
      class="flex items-center justify-center flex-col pt-10"
    >
      <img src="../assets/empty-state.svg" alt="" class="w-56" />
      <p class="font-bold text-2xl text-white mt-4">
        Go on, add a new browser tab &#128579;
      </p>
    </div>
    <display-card
      v-for="user in this.$store.state.cardList"
      :key="user.id"
      :user="user"
      class="h-44 w-full"
      ref="hello"
    >
    </display-card>
  </ul>
</template>

<script>
import DisplayCard from "./DisplayCard";

export default {
  components: {
    DisplayCard,
  },
  data() {
    return {
      emptyState: "",
    };
  },
  computed: {
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