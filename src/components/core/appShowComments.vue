<template>
  <div class="grey-container">
    <div class="container unskew">

      <h2 class="box-heading">Ostatnie komentarze</h2>
      <p class="subheader">
        Chcesz żeby Twoj komentarz też się tu znalazł? Przejdz do sekcji
        <router-link to="/comment">
          <strong>skomentuj </strong>
        </router-link>.
        A gdybyś się zastanawiał - tak, to naprawdę działa.
      </p>
      <div class="comments-container">
        <div class="single-comment" v-for="post in posts" :key="post.id">
          <ul class="card">
            <li class="card-head"></li>
            <li class="card-pic">
              <i class="fas fa-user-circle card-icon"></i>
            </li>
            <li class="card-name">{{ post.name }}</li>
            <li class="card-comment">
              <p>{{ post.comment }}</p>
            </li>
            <li class="card-bottom">
              <i class="far fa-clock"></i>
              <p class="time">{{ post.date }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.$http
      .get("https://vue-projects-94bf3.firebaseio.com/comments.json")
      .then(data => {
        return data.json();
      })
      .then(posts => {
        const postsArr = [];
        for (let key in posts) {
          posts[key].id = key;
          postsArr.unshift(posts[key]);
        }
        this.posts = postsArr.slice(0, 4);
      });
  }
};
</script>

<style lang="scss">
.grey-container {
  background: #ff4e2f;
  padding: 3.5em 0;
  margin: 5em 0 -2em 0;
  transform: skewY(3deg);
  .box-heading, .subheader {color: white}
  .unskew {
    transform: skewY(-3deg);
  }
}
.card {
  margin: 1em 0;
  text-align: center;
  box-shadow: 0 0.5em 15px #1111114d;

  &-head {
    background: url("/assets/card-bg-v2.jpg") no-repeat;
    background-size: cover;
    background-position: 20% 60%;
    height: 20vh;
    width: auto;
    img {
      width: 60%;
      height: auto;
    }
  }

  .card-name {
    position: relative;
    background: #1f1f1f;
    color: white;
    font-size: 1.2em;
    padding: 1em 0.5em;

    &::after {
      content: "";
      background-color: #111;
      height: 1px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -4px;
    }
  }
  .card-comment {
    background: #fff;
    min-height: 15em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-bottom {
    background: #ff4e2f;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .time {
      text-align: right;
      width: 100%;
      background: rgb(228, 62, 33);
      padding: 0.7em 0.5em;
      margin: 0;
    }

    i {
      color: #ca2d11;
      padding: 0 1.2em;
      font-weight: 800;
    }
  }
  .card-pic {
    position: relative;

    .card-icon {
      color: #ffffff;
      background: rgb(226, 226, 226);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
      border: 0.06em solid #646464;
      border-radius: 50%;
      font-size: 3em;
      position: absolute;
      top: -15px;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);

      &::after {
        content: "";
        height: 20px;
        width: 20px;
        background: #fff;
        position: absolute;
        right: -10px;
        border: 0.04em solid #646464;
        border-radius: 50%;

        z-index: -2;
      }
    }
  }
}

@media screen and (min-width: 960px) {
  .grey-container {
    padding: 13em 0;
    margin: 15em 0 -5em 0;
  }
  .comments-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .single-comment {
      flex: 0 0 23%;
    }

    .card {
      &-head {
        height: 5vh;
      }
      .card-comment {
        padding: 1em 3em;
        min-height: 15em;
      }
    }
  }
}
</style>


