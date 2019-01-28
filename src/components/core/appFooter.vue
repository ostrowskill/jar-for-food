<template>
  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="company">
          <i class="fas fa-carrot logo"></i>
          <span class="logotype">Eat with <mark>me!</mark></span>
          <p>Poznaj nas bliżej i obserwuj żeby być na bieżąco.</p>
          <div class="social">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
          </div>

        </div>
        <div class="mini-nav-container">
          <ul class="mini-nav">
            <li>
              <router-link to="/">strona główna</router-link>
            </li>
            <li>
              <router-link to="/about">o mnie</router-link>
            </li>
            <li>
              <router-link to="/comment">skomentuj</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: rgb(44, 44, 44);
  padding: 2em 0;
  position: relative;
  z-index: 10;
}

.mini-nav-container {
    display: flex;
    align-items: flex-end;
}

.company {
  border-bottom: 1px solid #4b4a4d;
  padding-bottom: .9em;
  span {
    font-size: 0.9em;
  }

  p {
    color: #8d8d8d;
    margin: 1em 0;
    font-size: .9em;
  }
  i.logo {
    color: #E43E21;
    font-size: 1.4em;
    margin-right: .5em;
  }

  .logotype {
    font-size: 1.5em;
    font-weight: 800;
    color: #ffffff;


  }
  mark {
    font-size: 1.1em;
  }

  .social {
    font-size: 2.5em;
    a {
      margin-right: .5em;
      color: #414141;
      transition: .3s all ease-in-out;

      &:hover {
        color:#dffcff;
      }
    }
  }
}

.mini-nav {
  margin: 1em 0;
  width: 100%;
  font-size: 1em;

  li {
    cursor: pointer;
    padding: 0.5em 0;
    border-bottom: 1px dotted #000000;
    transition: .3s all ease-in-out;
    padding: .5em;
    &:hover {
      background: #fff;
    }
  }

  a {
    color: #8d8d8d;
    
  }
}

@media screen and (min-width: 960px) {
  .footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .company {
    border-bottom: none;
    padding-bottom: 0;
    .social {
      font-size: 2em;
    }
  }
  .mini-nav {
    text-align: right;
  }
}
}
</style>


