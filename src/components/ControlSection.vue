<template>
  <div class="flex flex-col bg-red-200 w-1/4 px-10 pt-20">
    <div class="mb-4 flex items-center justify-center py-3 w-full">
      <input
        type="text"
        class="px-4 shadow rounded-lg py-3 w-full"
        v-model="newCard"
        @keyup.enter="addCard"
        placeholder="Add New card"
      />
      <span class="bg-white rounded-full ml-1 flex items-center justify-center">
        <button @click="addCard" class="btn w-6 h-6">
          <PlusCircleIcon />
        </button>
      </span>
    </div>
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
        @deleteCard="deleteCard"
        v-for="user in this.$store.state.cardList"
        :key="user.id"
        :user="user"
      >
      </control-card>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ControlCard from "./ControlCard";
import { PlusCircleIcon } from "vue-feather-icons";

export default {
  components: {
    draggable,
    ControlCard,
    PlusCircleIcon,
  },
  data() {
    return {
      newCard: "",
      cardId: 5,
      idArray: [],
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
  },
  methods: {
    deleteCard(card) {
      const cardIndex = this.$store.state.cardList.indexOf(card);
      this.$store.state.cardList.splice(cardIndex, 1);
    },
    addCard() {
      if (this.newCard) {
        this.$store.state.cardList.push({
          name: this.newCard,
        });
        this.$store.state.cardList.forEach((item, i) => {
          item.id = i + 1;
        });
        this.newCard = "";
      }
    },
  },
};
</script>

<style>
</style>