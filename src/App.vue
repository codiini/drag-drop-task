<template>
  <div id="app" class="flex justify-center min-h-screen">
    <ControlSection/>
    <DisplaySection>
      <div class="cursor-pointer flex items-start md:ml-0 inline-block" @click="navMenu">
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
    }
  },
  methods: {
    navMenu() {
      this.$store.state.navState = !this.$store.state.navState
    },
  },
};
</script>

<style>
</style>

