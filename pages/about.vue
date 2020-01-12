<template>
  <div class="container">
    <site-header active="about" />
    <div class="main-content">
      <section id="content-1">
        <div id="content-1-first">
          <h1>About</h1>
          <span v-html="parseMarkdown(Content['about-1'])"></span>
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

<style scoped>
.main-content-enter-active {
  animation: acrossIn 2s ease-out both;
}

.main-content-leave-active {
  animation: acrossOut 2s ease-in both;
}

@keyframes acrossIn {
  0% {
    /*transform: translate3d(-100%, 0, 0);*/
    opacity: 0;
  }
  100% {
    /*transform: translate3d(0, 0, 0);*/
    opacity: 1;
  }
}

@keyframes acrossOut {
  0% {
    /*transform: translate3d(0, 0, 0);*/
    opacity: 1;
  }
  100% {
    /*transform: translate3d(100%, 0, 0);*/
    opacity: 0;
  }
}
</style>
