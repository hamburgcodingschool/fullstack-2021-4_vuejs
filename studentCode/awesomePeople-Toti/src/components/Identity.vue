<template>
  <div id="identity">
    <h2>{{ theName }}</h2>
    <h3>{{ theDescription }}</h3>
  </div>
</template>

<script>
export default {
  props: ["theName", "theDescription"],
};
</script>
<style scoped></style>
