<template>
  <div class="container">
    <site-header active="news" />
    <transition name="content" mode="out-in">
      <div class="main-content">
        <section id="content-1">
          <div class="content-1-first">
            <h1>
              <nuxt-link to="/news">News</nuxt-link> >
              {{ currentArticle.title }}
            </h1>
            <span v-html="parseMarkdown(Content['news-1'])"></span>
            <div class="news-container">
              <div class="news-article">
                <h3>{{ currentArticle.title }}</h3>
                <p :title="formatDate(currentArticle.date)">
                  {{ relativeTime(currentArticle.date) }}
                </p>
                <p v-html="parseMarkdown(currentArticle.body)"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from 'moment'
import { markdown } from 'markdown'

import Header from '../../components/Header'

import newsArticles from '@/assets/content/news.json'
import Content from '@/assets/content/content/content.json'

export default {
  components: {
    siteHeader: Header
  },
  data() {
    return {
      id: this.$route.params.id,
      Content
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
  },
  computed: {
    currentArticle() {
      return newsArticles.find(({ slug }) => slug === this.id)
    }
  }
}
</script>

<style scoped>
.news-article {
  border: 3px solid #ccc;
  margin: 30px 0;
}
</style>
