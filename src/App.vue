<template>
  <div id="app" class="flex justify-center min-h-screen">
    <ControlSection :controls="control"/>
    <DisplaySection :controls="control">
      <div class="cursor-pointer flex items-start" @click="navMenu">
        <MenuIcon />
      </div>
    </DisplaySection>
  </div>
</template>

<script>
import ControlSection from "./components/ControlSection";
import DisplaySection from "./components/DisplaySection";
import { MenuIcon } from "vue-feather-icons";

export default {
  name: "App",
  components: {
    ControlSection,
    DisplaySection,
    MenuIcon,
  },
  data(){
    return{
      control: false,
    }
  },
  methods: {
    navMenu() {
      this.control = !this.control
    },
  },
};
</script>

<style>
</style>

