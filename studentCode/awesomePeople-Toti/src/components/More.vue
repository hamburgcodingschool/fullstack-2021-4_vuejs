<template>
  <a :href="link" target="_blank">{{text}}</a>
  <!-- <a>{{ link }}</a> -->
  <!-- <a :href="link"></a> -->
  <!-- <img :src="url" /> das war bei dem Foto-->
  <!--  <a href="https://www.exclusivitaeten.com/#"></a> -->
</template>

<script>
export default {
  props: ["link", "text"],
};
</script>
