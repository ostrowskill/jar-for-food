<template>
  <div class="blur-container">
    <div class="container">
      <div class="box-suggestions">
        <h2 class="box-heading">Nasze propozycje!</h2>
        <p class="subheader">Z naszych statystych wynika, że największą popularnością cieszą się poniższe dania. Zerknij i <mark>sprawdź</mark> czy znajdziesz wśród nich coś dla siebie.</p>
      </div>
    </div>
    <app-slider></app-slider>
  </div>
</template>

<script>
import appSlider from "../views/appSlider";

export default {
  components: {
    "app-slider": appSlider
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.box-suggestions {
  margin: 5em 0;
  text-align: right;
}

@media screen and (min-width: 960px) {
  .blur-container {
    position: relative;
    margin-top: 10em;

    &::before,
    &::after {
      content: "";
      height: 70%;
      width: 31vw;
      position: absolute;
      top: 61%;
      transform: translateY(-50%);
      z-index: 12;
    }

    &::before {
      background: linear-gradient( 90deg, #fff,  rgba(255, 255, 255, 0.938), transparent );
      left: 0;
    }

    &::after {
      background: linear-gradient( 90deg, transparent,rgba(255, 255, 255, 0.938), #fff);
      right: 0;
    }
  }

  .box-suggestions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>


