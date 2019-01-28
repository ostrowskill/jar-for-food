<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div v-for="slide in meals" class="slide" :key="slide.id">
        <img :src="slide.src" alt>
        <div class="description">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.desc }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meals: [
        {
          src: `/assets/meal-one.jpg`,
          title: "stek",
          desc: "soczysty kawał mięsa",
          id: 0
        },
        {
          src: `/assets/meal-two.jpg`,
          title: "œufs",
          desc: "jajka w koszulce",
          id: 1
        },
        {
          src: `/assets/meal-three.jpg`,
          title: "kanapka",
          desc: "z szarpaną wołowiną",
          id: 2
        },
        {
          src: `/assets/drink.jpg`,
          title: "shake",
          desc: "wybuchowy granat!",
          id: 3
        },
        {
          src: `/assets/meal-four.jpg`,
          title: "burger",
          desc: "mięso wołowe + ser",
          id: 4
        },
        {
          src: `/assets/meal-five.jpg`,
          title: "sałatka",
          desc: "z kurczakiem i szpinakiem",
          id: 5
        },
        {
          src: `/assets/meal-six.jpg`,
          title: "frytki",
          desc: "długie i chrupiące",
          id: 6
        },
        {
          src: `/assets/fruits.jpg`,
          title: "smoothie",
          desc: "tylko ze świeżych owoców",
          id: 7
        }
      ]
    };
  },
  created() {
    setInterval(this.next, 4500);
  },
  computed: {},
  methods: {
    next() {
      const first = this.meals.shift();
      this.meals = this.meals.concat(first);
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-view {
  margin-top: -9em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  width: 100%;
  min-height: 25em;
}
.slide {
  position: relative;
  flex: 0 0 10em;
  height: 10em;
  margin: 1em;
  border: 12px solid #ddd;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  .description {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    h3 {
      color: white;
      text-shadow: 1px 1px 10px #000;
      font-size: 1.5em;
    }
    p {
      font-size: 0.6em;
      color: white;
      background: rgba(0, 0, 0, 0.8);
      text-shadow: 1px 1px 10px #000;
      padding: 0.5em 1em;
      //border-radius: 1em;
    }
  }

  img {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 50%;
  }
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

@media screen and(min-width: 960px) {
  .carousel-view {
    margin-top: -2em;
  }
  .slide {
    flex: 0 0 18em;
    height: 18em;

    .description {
      width: 70%;
      h3 {
        font-size: 2em;
      }
      p {
        font-size: 0.8em;
      }
    }
  }
}
</style>