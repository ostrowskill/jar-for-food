<template>
  <div class="comment-section">
    <div class="container">
      <h1>
        Zostaw po sobie ślad
        <mark>!</mark>
      </h1>
      <p class="subheader">
        Twoj komentarz zostanie wyświetlony na
        <mark>stronie głównej</mark>, więc proszę - nie pisz głupot ;)
      </p>
      <div class="flex-container">
        <div class="form-container">
          <form v-if="!submitted">
            <label for="name">Imię</label>
            <input type="text" id="name" v-model.lazy="post.name" required>
            <label for="comment">Komentarz</label>
            <textarea name id="comment" cols="30" rows="10" v-model.lazy="post.comment" required></textarea>
            <a class="cta" @click.prevent="send">dodaj</a>
          </form>
          <div v-if="submitted" class="thanks">
            <h2>
              Dzięki za komentarz
              <mark>{{post.name}}</mark>
            </h2>
            <i class="far fa-kiss-wink-heart"></i>
          </div>
        </div>

        <div class="comments-container">
          <div class="single-comment">
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
                <p class="time">data</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: "",
        comment: "",
        date: ""
      },
      submitted: false
    };
  },
  methods: {
    send() {
      if (this.post.name === "" && this.post.comment === "") {
        return;
      } else {
        const time = new Date();
        const day = time.getDate();
        let month = time.getMonth() + 1;
        const year = time.getFullYear();

        const hours = time.getHours();
        let minuts = time.getMinutes();
        month = month < 10 ? "0" + month : month;
        minuts = minuts < 10 ? "0" + minuts : minuts;

        const fullDate = `${day}/${month}/${year} | ${hours}:${minuts}`;

        this.post.date = fullDate;

        this.$http
          .post(
            "https://vue-projects-94bf3.firebaseio.com/comments.json",
            this.post
          )
          .then(() => {
            this.submitted = true;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-section {
  // background: url('/assets/comment-bg.png') no-repeat;
  // background-size: 15em;
  // background-position: 80% 25%;
  padding: 7em 0;
  h1 {
    line-height: 1em;
  }
}

.thanks {
  text-align: center;

  mark {
    color: #e43e21;
  }

  i {
    color: #ddd;
    font-size: 10em;
    margin: 0.1em 0;
    animation: kiss 1s ease-in-out forwards;
  }
}

form {
  margin: 1.4em 0;
}
label {
  display: block;
  background: #00e8ff;
  color: #fff;
  padding: 0.5em;
}

input[type="text"],
textarea {
  resize: none;
  display: block;
  width: 100%;
  transition: all 0.3s ease-in-out;

  outline: none;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0.5em 15px #11111125;
}

input[type="text"]:focus,
textarea:focus {
  box-shadow: 0 1em 25px #11111125;
  padding: 1.1em 1em;
  margin-bottom: 2.5em;
}

#preview {
  padding: 1em;
  border: 1px dotted #ccc;
  margin: 2em 0;
}

@keyframes kiss {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and(min-width: 960px) {
  .comment-section {
    padding: 25em 0;
    height: 100vh;
    background: url('/assets/comment-bg.jpg') no-repeat;
    background-size: 30%;
    background-position: 100% 25%;
  }
  .flex-container {
    display: flex;
    align-items: center;

    .form-container {
      flex: 1 0 45%;
    }
    .card {
      width: 20em;
      margin: 0 10em;
    }
  }
}
</style>


