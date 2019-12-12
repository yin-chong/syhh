<template>
  <div>
    <p>{{title}}</p>
    <img v-lazy="titleIcon">
  </div>
</template>

<script>
import titleIcon from "../assets/titleIcon.png";
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      titleIcon
    };
  }
};
</script>

<style scoped>
p {
  margin: 10px auto;
  letter-spacing: 1.2rem;
  font-size: 1.5rem;
  font-weight: bold;
}
img {
  margin: 0 auto 10px;
}
@media (min-width: 992px) {
  p {
    margin: 3rem auto 1rem;
  }
  img {
    margin: 0 auto 0.8rem;
  }
}
</style>