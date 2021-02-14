<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="inc">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],

  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    inc() {
      this.$emit("my-click", this.totalNumber + 2);
    }
  }
};
</script>

  // props: {
  //   totalNumber: {
  //     type: Number,
  //     default: function() {
  //       return {
  //         number: 5
  //       };
  //     }
  //   },
  //  testProps: {
  //     type: String;
  //   },
  // },