<template>
  <div class="projects-container">
    <h2 class="header">Projekty</h2>
    <div class="projects">
      <figure class="project hover-effect">
        <img src="assets/portfolio-sw.jpg" alt>
        <figcaption>
          <h2 class="project-header">
            Star
            <span>wars</span>
          </h2>
          <p>Chcesz dołaczyć do ciemnej strony mocy?</p>
          <a href="https://ostrowskill.github.io/sw-recruitment/" target="_blank"></a>
        </figcaption>
      </figure>

      <figure class="project hover-effect">
        <img src="assets/portfolio-weather.jpg" alt>
        <figcaption>
          <h2 class="project-header">
            Weather
            <span>app</span>
          </h2>
          <p>Sprawdź pogodę w swoim mieście.</p>
          <a href="https://ostrowskill.github.io/weather-app/" target="_blank">View more</a>
        </figcaption>
      </figure>

      <figure class="project hover-effect">
        <img src="assets/portfolio-todo.jpg" alt>
        <figcaption>
          <h2 class="project-header">
            Todo
            <span>app</span>
          </h2>
          <p>todo app z wykorzystaniem firebase.</p>
          <a href="https://ostrowskill.github.io/todo-with-fb/" target="_blank">View more</a>
        </figcaption>
      </figure>

      <figure class="project hover-effect">
        <img src="assets/portfolio-rps.jpg" alt>
        <figcaption>
          <h2 class="project-header">
            rps
            <span>game</span>
          </h2>
          <p>Ot prosta gra w papier, kamień, nożyce.</p>
          <a href="https://ostrowskill.github.io/rps-game/" target="_blank">View more</a>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.projects-container {
  h2.header {
    font-size: 1em;
    padding: 1em;
    background: #00E8FF;
    color: white;
    position: relative;
    &::after {
      content: "";
      width: 20px;
      height: 20px;
      background-color: #00E8FF;
      transform: rotate(45deg) translate(-50%, -50%);
      position: absolute;
      bottom: -40%;
      left: 48.5%;
      z-index: 3999;
    }
  }
}
.projects {
  display: flex;
  flex-wrap: wrap;
}
.project {
  flex: 1 0 17em;
  height: 10em;
  cursor: pointer;
  position: relative;
}

figure {
  position: relative;
  overflow: hidden;
  background: #fff;
  text-align: center;
  cursor: pointer;
}

figure img {
  position: relative;
  display: block;
  top: 0;
}

figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
}

figure figcaption::before,
figure figcaption::after {
  pointer-events: none;
}

figure figcaption,
figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

figure h2.project-header {
  font-size: .7em;
  color: #a0a0a0;
  font-weight: 400;
}

h2.project-header span {
  font-weight: 800;
}

figure.hover-effect {
  background: #EBEBEB;
}

figure.hover-effect img {
  max-width: none;
  width: calc(100% + 60px);
  opacity: 0.02;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(-10px, 0, 0) scale(1.3);
  backface-visibility: hidden;
}

figure.hover-effect:hover {
  & img {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1.5);
  }
  & h2 {
    opacity: 0;
  }
}

figure.hover-effect h2 {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5em 1em;
}

figure.hover-effect p {
  font-size: 0.6em;
  padding: 1em;
  width: 80%;
  background: rgba(0, 0, 0, .7);
  text-align: right;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(-40px, 0, 0);
}

figure.hover-effect:hover p {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>


