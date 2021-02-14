<template>
  <div>
    <label for="title">主催者</label>
    <input
      type="text"
      id="title"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>