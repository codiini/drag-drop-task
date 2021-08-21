<template>
  <div
    class="controls-container flex items-start justify-center"
    :class="{ addWidth: controls }"
  >
    <div class="flex flex-col pt-20" v-if="controls">
      <draggable
        :animation="200"
        ghost-class="moving-card"
        :group="{ name: 'users', pull: 'clone', put: false }"
        filter=".action-button"
        class="w-full max-w-md card-container"
        tag="ul"
        :list="myList"
        :move="move"
      >
        <control-card
          @deleteCard="deleteCard"
          v-for="user in this.$store.state.controlCardList"
          :key="user.id"
          :id="user.id"
          :user="user"
        >
        </control-card>
      </draggable>
      <div
        class="
          input-container
          mb-4
          flex
          items-center
          justify-center
          py-3
          w-full
        "
      >
        <input
          type="text"
          class="px-4 shadow-md rounded-lg py-3 w-full"
          v-model="newCard"
          @keyup.enter="addCard"
          placeholder="Add New Application"
        />
        <span
          class="
            bg-white
            shadow-xl
            rounded-full
            ml-1
            flex
            items-center
            justify-center
          "
        >
          <button @click="addCard" class="btn w-6 h-6">
            <PlusCircleIcon />
          </button>
        </span>
      </div>
    </div>
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
  props: ["controls"],
  data() {
    return {
      newCard: "",
    };
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.controlCardList;
      },
      set(value) {
        this.$store.commit("updateControlList", value);
      },
    },
  },
  methods: {
    deleteCard(card) {
      const cardIndex = this.$store.state.controlCardList.indexOf(card);
      this.$store.dispatch("deleteCard", cardIndex);
    },
    makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$%*&";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    addCard() {
      if (this.newCard) {
        this.$store.dispatch("getRandomColor");
        this.$store.dispatch("addCard", {
          name: this.newCard,
          color: this.$store.state.currentColor,
          id: this.makeid(3),
        });
        this.newCard = "";
      }
    },
    move(id) {
      if (id.to.classList.contains("drop-zone")) {
        this.$store.state.presentIndex = id.draggedContext.index;
      }
    },
  },
};
</script>

<style>
.controls-container {
  position: fixed;
  z-index: 5;
  width: 0;
  top: 0;
  left: 0;
  background: #fff;
  height: 100%;
  transition: 0.5s;
  overflow-y:scroll;
}
.addWidth {
  width: 300px;
}
</style>