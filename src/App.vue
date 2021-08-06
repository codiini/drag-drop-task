<template>
  <div id="app" class="flex justify-center h-screen">
    <ControlSection />
    <DisplaySection />
  </div>
</template>

<script>
import ControlSection from "./components/ControlSection";
import DisplaySection from "./components/DisplaySection";
export default {
  name: "App",
  components: {
    ControlSection,
    DisplaySection,
  },
};
</script>

<style>
.moving-card {
  opacity: 0.5;
  background: #f7fafc;
  border-bottom: 8px solid #000;
}
</style>

