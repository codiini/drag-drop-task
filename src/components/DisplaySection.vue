<template>
  <div
    class="right-side flex flex-col w-screen bg-blue-200 px-4 md:px-20 mx-auto pt-10 pb-20"
    :class="{ 'margin-add': controls }"
  >
    <slot></slot>
    <ul class="w-full">
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
        :animation="200"
        ghost-class="moving-card"
        tag="ul"
        class="w-full drop-zone"
        v-model="newList"
        :group="{ name: 'users' }"
        @change="change"
      >
        <display-card
          v-for="(user, index) in newList"
          :key="index"
          :user="user"
        >
        </display-card>
      </draggable>
    </ul>
  </div>
</template>

<script>
import DisplayCard from "./DisplayCard";
import draggable from "vuedraggable";

export default {
  components: {
    DisplayCard,
    draggable,
  },
  data() {
    return {
      emptyState: "",
    };
  },
  props: ["controls"],
  computed: {
    getState() {
      if (this.$store.state.controlCardList.length) {
        return true;
      } else {
        return false;
      }
    }, 
    newList: {
      get() {
        const payload = this.$store.state.controlCardList.map((b) =>
          Object.assign(b)
        );
        return payload;
      },
      set(value) {
        this.$store.commit("updateControlList", value);
      },
    },
  },
  methods: {
    change(id) {
      if (id.added) {
        if(id.added.newIndex > this.$store.state.presentIndex){
          this.$store.dispatch("deleteCard", this.$store.state.presentIndex);
        }
        else if(id.added.newIndex < this.$store.state.presentIndex){
          this.$store.dispatch("deleteCard", this.$store.state.presentIndex + 1);
        }
      }
    },
  },
};
</script>

<style>
.margin-add {
  margin-left: 18rem;
  transition: 0.5s;
}
@media screen and (max-width:760px) {
 .margin-add{
   margin-left:2rem;
 }
}
</style>