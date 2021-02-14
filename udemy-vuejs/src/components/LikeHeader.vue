<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fn: "jack",
        ln: "donald"
      }
    };
  }
};
</script>
