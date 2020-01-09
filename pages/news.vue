<template>
  <div class="container">
    <site-header active="news" />
    <div class="main-content">
      <section id="content-1">
        <div id="content-1-first">
          <h1>News</h1>
          <div class="news-container">
            <div v-for="article in newsArticles" class="news-article">
              <h3>{{ article.title }}</h3>
              <p :title="formatDate(article.date)">
                {{ relativeTime(article.date) }}
              </p>
              <p v-html="parseMarkdown(article.body)"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { markdown } from 'markdown'

import Header from '../components/Header'

import newsArticles from '@/assets/content/news.json'

export default {
  components: {
    siteHeader: Header
  },
  data() {
    return {
      newsArticles
    }
  },
  methods: {
    relativeTime(date) {
      return moment('2020-01-09T00:44:20.713Z').fromNow()
    },
    formatDate(date) {
      return new Date('2020-01-09T00:44:20.713Z').toLocaleString()
    },
    parseMarkdown(content) {
      return markdown.toHTML(content)
    }
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
  text-align: left;
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

.news-article {
  border: 3px solid #000;
}
</style>
