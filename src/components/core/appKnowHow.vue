<template>
  <div class="blue-container">
    <div class="container unskew">
        <h2 class="box-heading">Jesteś głodny?</h2>
        <p class="subheader">
          Wystarczą trzy proste kroki, by zjeść smacznie i szybko. Nie musisz się rejestrować, żeby cieszyć się posiłkiem!
        </p>
      <ul class="steps-list">
        <li class="step-item">
          <i class="fas fa-cookie-bite item-icon"></i>
          <p class="step">Krok  <mark>1.</mark></p>
          <p class="item-desc">Wybierz jedzenie na które masz największą ochotę.</p>
        </li>
        <li class="step-item">
          <i class="fas fa-credit-card item-icon"></i>
          <p class="step">Krok <mark>2.</mark></p>
          <p class="item-desc">Wybierz sposób płatności: on-line lub przy odbiorze.</p>
        </li>
        <li class="step-item">
          <i class="fas fa-truck item-icon"></i>
          <p class="step">Krok <mark>3.</mark></p>
          <p class="item-desc">Czekaj cierpliwie na dostawę i ciesz się ulubionym posiłkiem.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blue-container {
  padding: 3.5em 0;
  transform: skewY(-3deg);
  background-color: #00E8FF;

  .box-heading, .subheader {color:white}
  .unskew {
    transform: skewY(3deg);
  }
}

.steps-list {
  text-align: center;

  .step-item {
    background-color: #fff;
    padding: 2.5em 2em;
    margin: 1em 0;
    position: relative;

    &::after {
      content: '';
      background-color: #fff;
      width: 100%;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }
  .item-icon {
    display: block;
    color: rgb(71, 71, 71);
    font-size: 3em;
  }

  .step {
      font-weight: 800;
      font-size: 1.5em;
      color: #bbb;
      border: 2px dotted #eee;
      margin: .3em 0;
  }
}

@media screen and (min-width: 980px) {

  .blue-container {
    padding: 13em 0;
  }
  .steps-list {
    display: flex;
    justify-content: space-between;

    .step-item {
        width: 25%;
    }
  }
}
</style>


