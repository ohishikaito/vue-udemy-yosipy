<template>
  <div>
    <p v-border:solid.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{tmp | lowerCase | upperCase }}</h2>
    <h3>{{sub | upperCase | lowerCase}}</h3>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmp: "Hellooooooooo",
      sub: "TTTTTTTTTTT"
    };
  },
  computed: {
    uct() {
      return this.tmp.toUpperCase();
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  components: {
    CountNumber
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "1rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 1)";
      }
    }
  }
};
</script>