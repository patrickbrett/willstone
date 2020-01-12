<template>
  <div class="container">
    <site-header active="news" />
    <transition name="content" mode="out-in">
      <div class="main-content">
        <section id="content-1">
          <div v-if="id" class="content-1-first">
            <h1>
              <nuxt-link to="/news">News</nuxt-link> >
              {{ getCurrentArticle().title }}
            </h1>
            <span v-html="parseMarkdown(Content['news-1'])"></span>
            <div class="news-container">
              <div class="news-article">
                <h3>{{ getCurrentArticle().title }}</h3>
                <p :title="formatDate(getCurrentArticle().date)">
                  {{ relativeTime(getCurrentArticle().date) }}
                </p>
                <p v-html="parseMarkdown(getCurrentArticle().body)"></p>
              </div>
            </div>
          </div>
          <div v-else class="content-1-first">
            <h1>
              News
            </h1>
            <span v-html="parseMarkdown(Content['news-1'])"></span>
            <div class="news-container">
              <div v-for="newsArticle in newsArticles" class="news-article">
                <h3>
                  <nuxt-link :to="{ path: 'news/' + newsArticle.slug }">{{
                    newsArticle.title
                  }}</nuxt-link>
                </h3>
                <p :title="formatDate(newsArticle.date)">
                  {{ relativeTime(newsArticle.date) }}
                </p>
                <p v-html="parseMarkdown(newsArticle.body)"></p>
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
      newsArticles,
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
    },
    getCurrentArticle() {
      console.log(this.id)
      console.log(newsArticles)
      console.log(
        newsArticles.find((article) => {
          console.log('aaa', article.slug, this.id)
          return article.slug === this.id
        })
      )
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
