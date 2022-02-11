<template>
  <div id="card">
    <div id="up">
      <Foto
        url="http://femaleberlin.de/wp-content/uploads/2018/03/LauraMeritt-cPollyFannlaf1.jpg"
      />
      <Identity
        theName="Mirijam Lachskeule von der Lachskeule"
        theDescription="Police officer"
      />
    </div>
    <div id="down">
      <Description
        text="Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
      />
      <More
        link="https://www.exclusivitaeten.com/#"
        text="alot more.."
      />
    </div>
  </div>
</template>

<script>
import Foto from "./Foto.vue";
import Identity from "./Identity.vue";
import Description from "./Description.vue";
import More from "./More.vue";

export default {
  components: {
    Foto,
    Identity,
    Description,
    More,
  },
};
</script>
<style scoped>
#up {
  display: flex;
  align-content: space-between;
  padding: 30px;
}
#down {
  display: block;
  align-content: space-between;
}
</style>
