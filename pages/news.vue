<template>
  <div class="container">
    <site-header active="news" />
    <div class="main-content">
      <section id="content-1">
        <div id="content-1-first">
          <h1>News</h1>
          <div class="news-container">
            <div v-for="article in newsArticles">
              <h3>{{ article.title }}</h3>
              <p>{{ article.body }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

import SocialLinks from '@/assets/content/social-links/social-links.json'

const news = require('require-all')('@/assets/content/news')

console.log(news)

export default {
  components: {
    siteHeader: Header
  }
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

.container {
  width: 100vw;
  height: 100vh;
  background: url('~assets/img/background-main.jpg') center;
  background-size: cover;
}

.main-content {
  font-family: 'Athelas', serif;
  font-size: 36px;
  color: rgba(0, 0, 0, 0.68);
  text-align: center;
}

#content-1 {
  margin-top: 200px;
  background: #f4f4f4;
  padding: 80px;
  overflow: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#content-1-first {
  width: 35%;
  /*float: left;*/
}

p {
  margin: 1em;
}

a {
  color: rgba(0, 0, 0, 0.68);
  font-weight: bold;
}
</style>
