<template>
  <div class="nav-container">
    <div class="container">
      <nav>
        <i class="fas fa-carrot logo"></i>
        <div class="hamburger" @click="menuToggle" ref="icon">
          <div class="stick"></div>
        </div>
        <ul ref="menu">
          <i class="fas fa-ellipsis-h"></i>
          <li>
            <router-link to="/" exact data-hover="strona główna">strona główna</router-link>
          </li>
          <li>
            <router-link to="/about" exact data-hover="o mnie">o mnie</router-link>
          </li>
          <li>
            <router-link to="/comment" exact data-hover="skomentuj">skomentuj</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  // methods -------
  methods: {
    menuToggle() {
      this.$refs.icon.classList.toggle("active");
      this.$refs.menu.classList.toggle("open");
    }
  },
  mounted() {
    const navbar = document.querySelector(".nav-container");
    window.addEventListener("scroll", function() {
      if (this.scrollY >= 200) navbar.classList.add("on-move");
      else navbar.classList.remove("on-move");
    });
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: 0.3s ease-in-out;

  &.on-move {
    background: rgba(255, 255, 255, 0.788);
    box-shadow: 1px 1px 5px rgba(17, 17, 17, 0.2);
    top: 10px;

    .logo {
      color: #e43e21;
    }
  }
}
nav {
  position: relative;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i.logo {
    color: #ebebeb;
    font-size: 2.5em;
  }

  ul {
    height: 85vh;
    width: 80%;
    padding: 15px;
    position: fixed;
    top: 60px;
    right: -100%;
    background: #ddd;
    z-index: 20;
    overflow: auto;
    transition: 0.3s;

    &.open {
      right: 0;
    }

    i {
      color: rgb(194, 194, 194);
      font-size: 2em;
    }
  }

  a {
    display: block;
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    font-weight: 800;
    transition: 0.3s;
    margin: 1em 0;
  }

  // hamburger ---------------------------------------------------
  .hamburger {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &.active .stick {
      background: rgba(0, 0, 0, 0);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0);

      &::before {
        top: 0;
        transform: rotate(45deg);
      }
      &::after {
        top: 0;
        transform: rotate(-45deg);
      }
    }

    .stick {
      width: 40px;
      height: 5px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 5px;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }

      &::before {
        top: -12px;
      }
      &::after {
        top: 12px;
      }
    }
  }
  // ---------------------------------------------------

  .router-link-active {
    color: #E43E21;

  }
}

// media querys -----------------------------------------------

@media screen and (min-width: 960px) {
  nav {
    .hamburger {
      display: none;
    }

    ul {
      all: unset;

      li {
        border-bottom: none;
        display: inline-block;
        //margin-left: 1.5em;
        overflow: hidden;

        &:hover a {
          transform: translateY(-100%);
          color: #ddd;
        }

        a {
          font-size: 1.5em;
          color: #ffffff;
          padding: 0.3em .5em;
          position: relative;
          margin: 0;
          display: inline-block;
          &.router-link-active {
            color: white;
            transform: translateY(-100%);
          }

          &::before,
          &::after {
            position: absolute;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }

          &::before {
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: block;
            background-color: #f1f1f1;
            //border-radius: .5em .5em 0 0;
            z-index: -1;
          }

          &::after {
            content: attr(data-hover);
            padding: 0.3em .5em;
            position: absolute;
            top: 100%;
            left: 0;
            color: #fff;
            background-color: #00E8FF;
            white-space: nowrap;
            //border-radius: 0 0 .5em .5em;
          }
        }
      }

      i {
        display: none;
      }
    }
  }
}
</style>

