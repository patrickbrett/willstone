<template>
  <div class="container">
    <site-header active="home" />
    <div class="main-content">
      <section id="content-1">
        <div
          id="content-1-first"
          v-html="parseMarkdown(Content['homepage-1'])"
        ></div>
        <div>
          <img
            :src="require('@/assets/img/finn-book-cover.jpg')"
            class="book-cover"
          />
        </div>
        <div id="content-1-second">
          <span v-html="parseMarkdown(Content['homepage-2'])"></span>
          <div class="subscribe-area">
            <input
              type="text"
              :placeholder="Content['free-chapters-download-box'].text"
            />
            <button>
              {{ Content['free-chapters-download-box'].button }}
            </button>
          </div>
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

<style>
.subscribe-area {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.subscribe-area input {
  background: hsla(0, 0%, 74%, 0.48);
  border: none;
  padding: 20px;
  font-size: 28px;
  font-family: 'Athelas', serif;
  width: 100%;
}

.subscribe-area input:focus {
  outline: none;
  background: hsla(0, 0%, 74%, 0.68);
}

.subscribe-area button {
  background: #7c1e09;
  border: none;
  color: #fff;
  font-size: 36px;
  font-family: 'Athelas', serif;
  min-width: 240px;
}

.subscribe-area button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.subscribe-area button:focus {
  outline: none;
  opacity: 0.8;
}

.book-cover {
  width: 200px;
}
</style>
