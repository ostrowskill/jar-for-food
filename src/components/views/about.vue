<template>
  <div class="hero-section">
    <div class="container">
      <div class="container-flex">
        <div class="hero-card">
          <img src="/assets/cv.jpg" alt="moje zdjecie">
          <ul>
            <li class="info name">
              <span>
                <mark>Łukasz </mark>Ostrowski
              </span>
            </li>
            <li class="info location">
              <i class="fas fa-map-marker-alt"></i>
              <span>Warszawa</span>
            </li>
            <li class="info about">
              <h3>O mnie</h3>
              <p>
                Moim celem zawodowym jest znalezienie pracy na stanowisu Junior Front-End Developera. Poszukuję pracodawcy, który da szansę wykazania się oraz umożliwi dalszy rozwój. Ze swojej strony mogę zagwarantować zaangażowanie, poczucie odpowiedzialności oraz kreatywność. 
                Przyjemność sprawia mi nie tylko dbanie o warstwę graficzną, ale również nauka nowych rozwiązań. Zapraszam do kontaktu!
              </p>
            </li>
            <li class="info skills">
              <h3 ref="skillsTitle">Core skills</h3>
              <div class="skills">
                <div class="skill-tree open" ref="basicSkills">
                  <i class="fab fa-js"></i>
                  <i class="fab fa-html5"></i>
                  <i class="fab fa-css3-alt"></i>
                  <i class="fab fa-vuejs"></i>
                  <i class="fab fa-angular"></i>
                </div>
                <i class="fas fa-exchange-alt btn-open" @click="openOtherSkills"></i>
                <div class="other-skills" ref="otherSkills">
                  <span>rest api</span> |
                  <span>scss</span> |
                  <span>npm</span> |
                  <span>rwd</span> |
                  <span>photoshop</span> |
                  <span>affinity</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="btn-contact" @click="openContact">Kontakt</div>
          <div class="contact-section" ref="contactSection">
            <ul>
              <li>
                <i class="fas fa-envelope-open"></i>
                <span>l.ostrowski.x@gmail.com</span>
              </li>
            </ul>
          </div>
          <ul class="socials">
            <li>
              <a href="https://www.linkedin.com/in/łukasz-ostrowski/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/ostrowskill" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="hero-projects">
          <projects></projects>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "./projects";

export default {
  components: {
    projects: Projects
  },
  methods: {
    openContact() {
      this.$refs.contactSection.classList.toggle("open");
    },

    openOtherSkills() {
      this.$refs.otherSkills.classList.toggle("open");
      this.$refs.basicSkills.classList.toggle("open");
      const skillsTitle = this.$refs.skillsTitle;
      skillsTitle.innerHTML === "Core skills"
        ? (skillsTitle.innerHTML = "Other skills")
        : (skillsTitle.innerHTML = "Core skills");
    }
  }
};
</script>


<style lang="scss" scoped>
.hero-section {
  height: 100%;
  padding: 10em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("/assets/about-bg2.png") no-repeat, url("/assets/about-bg2.png") no-repeat;
  background-size: 250%, 100%;
  background-position: 100% 20%, 100% 100%;
}
.hero-projects {
  margin-top: 2em;
}
.hero-card {
  background: #ebebeb;
  position: relative;
  

  &::after,
  &::before {
    content: "";
    border-radius: 50%;
    position: absolute;
  }
  &::after {
    height: 20px;
    width: 20px;
    background: #ebebeb;
    left: 8em;
    animation: floating 4.5s infinite;
  }
  &::before {
    height: 10px;
    width: 10px;
    background: #ebebeb;

    left: 7.25em;
    animation: floating 1.5s infinite ease-in-out;
  }

  img {
    max-width: 8em;
    position: absolute;
    top: -5.25em;
    right: 1em;
    border-radius: 50%;
    border: 0.5em solid #ebebeb;
  }
  hr {
    display: block;
    height: 0.5em;
    border: 1px solid #d8d8d8;
    background: #fcfcfc;
    margin: 2em 0;
  }
  .info {
    &.location {
      i {
        color: #e43e21;
        margin-right: 0.6em;
      }
    }

    &.name {
      font-size: 1.6em;
      padding: 1em 0.5em;
    }

    &.about,
    &.skills {
      position: relative;
      margin-top: 2.5em;
      h3 {
        font-size: 1.8em;
        color: white;
        position: absolute;
        top: -0.95em;
        left: 0.25em;
        text-shadow: 0 -1px 1px rgba(17, 17, 17, 0.4);
      }
    }
  }
  .skills {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-open {
      cursor: pointer;
      color: white;
      font-size: 1.5em;
      background: rgb(196, 196, 196);
      padding: 0.25em;
      transition: 0.3s all ease-in-out;
      &:hover {
        background: #e43e21;
      }
    }
  }

  .other-skills {
    overflow: hidden;
    width: 0;
    height: 0;
    transition: all 0.4s ease-in-out;
    font-size: 0.8em;

    &.open {
      width: 100%;
      height: 1.2em;
    }

    span:nth-child(1) {
      margin-left: 0.4em;
    }
  }

  .skill-tree {
    position: relative;
    overflow: hidden;
    width: 0;
    height: 0;
    transition: all 0.4s ease-in-out;
    font-size: 1.8em;
    i {
      margin-right: 0.4em;
    }

    &.open {
      width: 100%;
      height: 1.2em;
    }
  }
}

.btn-contact {
  position: relative;
  cursor: pointer;
  text-align: center;
  background: #00e8ff;
  color: white;
  font-weight: 800;
  padding: 1em 0;
  transition: 0.3s ease-in-out all;

  &::after {
    content: "";
    height: 20px;
    width: 20px;
    background: #00e8ff;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: rotate(45deg) translate(-50%, -50%);
    transition: 0.3s ease-in-out all;
  }

  &:hover {
    background: #2c2c2c;
    &::after {
      background: #2c2c2c;
    }
  }
}

.contact-section {
  height: 0;
  background-color: #dfdfdf;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.open {
    height: 5.4em;
  }

  i {
    color: #e43e21;
  }
  span {
    margin-left: 0.5em;
  }
}

.socials {
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  &::after {
    height: 30px;
    width: 30px;
    background: #fff;
    right: 7.5em;
    animation: floatingDown 2.5s infinite ease-in-out;
  }

  &::before {
    height: 10px;
    width: 10px;
    background: #fff;
    right: 7em;
    animation: floatingDown 3.5s infinite ease-in-out;
  }
  li {
    cursor: pointer;
    background: rgb(71, 71, 71);
    margin-left: 1em;
    width: 2.3em;
    text-align: center;
    transition: 0.3s all ease-in-out;
    &:hover {
      background: #00e8ff;
    }
    a {
      color: white;
    }
  }
}

ul {
  padding: 1em;
  li {
    background: white;
    color: rgb(134, 134, 134);
    padding: 0.5em 0.5em;
    margin: 0.4em 0;
    box-shadow: 0 0.3em 15px rgba(85, 85, 85, 0.1);
  }
}

@keyframes floating {
  0% {
    top: 0.4em;
  }
  50% {
    top: -3em;
  }
  100% {
    top: 0.4em;
  }
}
@keyframes floatingDown {
  0% {
    bottom: -1.8em;
  }
  50% {
    bottom: 2em;
  }
  100% {
    bottom: -1.8em;
  }
}

@media screen and (min-width: 960px) {
  .container-flex {
    position: relative;
    display: flex;
    justify-content: space-between;

    .hero-projects {
      margin-top: 0;
      flex: 0 1 35em;
    }
    .hero-card {
      flex: 0 0 40%;
      box-shadow: .25em .25em 5px rgba(0, 0, 0, .1);
    }
  }

  .hero-section {
    height: 100vh;
    background-size: 50%, 25%;
    background-position: 0% 50%, 80% 63%;
  }
}
</style>

