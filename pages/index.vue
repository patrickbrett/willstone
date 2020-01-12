<template>
  <div class="container">
    <site-header active="home" />
    <transition name="content" mode="out-in">
      <div class="main-content">
        <section id="content-1">
          <div
            id="content-1-first"
            v-html="parseMarkdown(Content['homepage-1'])"
          ></div>
          <div class="book-cover-container">
            <img
              :src="require('@/assets/img/finn-book-cover.jpg')"
              class="book-cover"
            />
          </div>
          <div id="content-1-second">
            <span v-html="parseMarkdown(Content['homepage-2'])"></span>
            <subscription-form></subscription-form>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import { markdown } from 'markdown'
import Header from '../components/Header'
import SubscriptionForm from '../components/SubscriptionForm'

import Content from '@/assets/content/content/content.json'

export default {
  components: {
    siteHeader: Header,
    subscriptionForm: SubscriptionForm
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
.book-cover {
  width: 200px;
}

@media screen and (max-width: 1020px) {
  #content-1 {
    flex-direction: column;
  }

  #content-1-first {
    width: 100%;
    /*float: left;*/
  }

  #content-1-second {
    width: 100%;
    /*float: right;*/
  }

  .book-cover-container {
    margin: 40px auto;
  }
}
</style>
