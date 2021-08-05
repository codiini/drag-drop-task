<template>
  <ul
    class="right-side flex flex-col items-center w-3/4 bg-blue-200 px-20 pt-10"
  >
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
};
</script>

<style>
</style>