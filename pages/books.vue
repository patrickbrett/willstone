<template>
  <div class="container">
    <site-header active="books" />
    <div class="main-content">
      <section id="content-1">
        <div id="content-1-first">
          <h1>Books</h1>
          <span v-html="parseMarkdown(Content['books-1'])"></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { markdown } from 'markdown'
import Header from '../components/Header'

import Content from '@/assets/content/content/content.json'

export default {
  components: {
    siteHeader: Header
  },
  methods: {
    parseMarkdown(content) {
      return markdown.toHTML(content)
    }
  },
  data() {
    return {
      Content
    }
  }
}
</script>

<style scoped></style>
