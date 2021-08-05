<template>
  <div id="app" class="flex justify-center h-screen">
    <ControlSection />
    <DisplaySection />
  </div>
</template>

<script>
import ControlSection from "./components/ControlSection";
import DisplaySection from "./components/DisplaySection";
import fscreen from "fscreen";
export default {
  name: "App",
  components: {
    ControlSection,
    DisplaySection,
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
};
</script>

<style>
.moving-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>

