<template>
  <div id="foto">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  props: ["url"],
};
</script>
<style>
img {
  width: 200px;
  height: 2 00px;
  border-radius: 200px;
}
</style>
