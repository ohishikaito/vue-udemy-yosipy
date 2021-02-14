<template>
  <div>
    <h2>11{{tmp | lowerCase | upperCase }}</h2>
    <h3>22{{sub | upperCase | lowerCase}}</h3>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber]
};
</script>