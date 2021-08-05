<template>
  <li
    v-color
    class="
      p-4
      mb-3
      flex
      justify-between
      items-center
      bg-white
      shadow
      rounded-lg
      cursor-move
      border border-white
    "
  >
    <slot></slot>
      <div>
        <div class="flex items-center">
          <p
            class="
              ml-2
              font-semibold font-sans
              tracking-wide
              text-white text-2xl
            "
          >
            {{ user.name }}
          </p>
        </div>
        <div>
        </div>
      </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    data() {
      return {};
    },
  },
};
</script>

<style>
</style>