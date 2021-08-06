<template>
  <div id="app" class="flex justify-center min-h-screen">
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

</style>

