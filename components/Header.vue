<template>
  <header>
    <h1>Will Stone</h1>
    <nav>
      <ul>
        <nuxt-link to="/">
          <li :class="active === 'home' ? ' active' : ''">
            <div class="inside-border"></div>
            <div class="li-content">
              Home
              <icon-skull v-if="active === 'home'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div></li
        ></nuxt-link>
        <nuxt-link to="/about">
          <li :class="active === 'about' ? ' active' : ''">
            <div class="inside-border"></div>
            <div class="li-content">
              About
              <icon-skull v-if="active === 'about'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/books">
          <li :class="active === 'books' ? ' active' : ''">
            <div class="inside-border"></div>
            <div class="li-content">
              Books
              <icon-skull v-if="active === 'books'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/news">
          <li :class="active === 'news' ? ' active' : ''">
            <div class="inside-border"></div>
            <div class="li-content">
              News
              <icon-skull v-if="active === 'news'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div>
          </li>
        </nuxt-link>
      </ul>
    </nav>
    <div id="social-links">
      <a
        v-if="SocialLinks.facebook.enabled"
        :href="SocialLinks.facebook.url"
        target="_blank"
        rel="noopener"
        ><icon-facebook
      /></a>
      <a
        v-if="SocialLinks.twitter.enabled"
        :href="SocialLinks.twitter.url"
        target="_blank"
        rel="noopener"
        ><icon-twitter
      /></a>
      <a
        v-if="SocialLinks.reddit.enabled"
        :href="SocialLinks.reddit.url"
        target="_blank"
        rel="noopener"
        ><icon-reddit
      /></a>
    </div>
  </header>
</template>

<script>
import ArrowRight from './icons/IconArrowRight'
import IconSkull from './icons/IconSkull'
import IconFacebook from './icons/IconFacebook'
import IconTwitter from './icons/IconTwitter'
import IconReddit from './icons/IconReddit'

import SocialLinks from '@/assets/content/social-links/social-links.json'

export default {
  props: {
    active: String
  },
  components: {
    ArrowRight,
    IconSkull,
    IconFacebook,
    IconTwitter,
    IconReddit
  },
  data() {
    return {
      SocialLinks
    }
  }
}
</script>

<style scoped>
header {
  background: rgba(0, 0, 0, 0.37); /* consider changing opacity on scroll */
  backdrop-filter: blur(24px);
  color: #fff;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;
  position: fixed;
  width: calc(100vw - 80px);
}

h1 {
  font-family: 'Cinzel Decorative', cursive;
  font-weight: 200;
  font-size: 48px;
  margin-right: auto;
}

nav ul {
  list-style-type: none;
}

nav ul li {
  font-family: 'Lexend Deca', Helvetica, sans-serif;
  border: 2px solid rgba(255, 255, 255, 1);
  width: 161px;
  height: 59px;
  font-size: 22px;
  text-transform: lowercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  position: relative;
  transition: 0.4s border, 0.4s transform;
}

nav ul li:hover,
nav ul li.active {
  cursor: pointer;
  border: 2px solid rgba(124, 30, 9, 1); /* can experiment with no border or having a border */
  transform: scale(1.05);
}

nav ul li.active {
  cursor: default;
  position: relative;
  top: 1px;
  animation: 0.4s shrink forwards;
}

@keyframes shrink {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(0.95);
  }
}

.li-content {
  transform: translateX(10px);
  transition: 0.4s all;
}

li.active .li-content {
  transform: translateX(14px);
}

.arrow-right,
.tick {
  opacity: 0;
  transition: 0.4s opacity;
  height: 24px;
}

nav ul li:hover .li-content,
nav ul li.active .li-content {
  transform: none;
}

nav ul li:hover .arrow-right,
nav ul li:hover .tick {
  opacity: 1;
}

nav ul li.active .tick {
  opacity: 0;
  animation: 0.4s fade-in forwards;
}

@keyframes fade-in {
  /* TODO: would be perfect for GSAP morph */
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.inside-border {
  width: 8px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.2s width;
  z-index: 1;
}

.li-content {
  z-index: 2;
}

nav ul li:hover .inside-border,
nav ul li.active .inside-border {
  width: 100%;
}

nav ul li .inside-border {
  background: #7c1e09;
}

#social-links {
  margin-left: 40px;
}

#social-links a {
  margin: 0 10px;
  transition: opacity 0.4s;
}

#social-links a * {
  height: 60px;
  width: 60px;
}

#social-links a:hover {
  opacity: 0.5;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
}

@media only screen and (max-width: 1920px) {
  header {
    height: 74px;
  }

  h1 {
    font-size: 36px;
  }

  nav ul li {
    width: 100px;
    height: 40px;
    font-size: 18px;
  }

  nav ul li:hover {
    width: 104px;
    height: 44px;
  }

  #social-links {
    margin-left: 10px;
  }

  #social-links a {
    margin: 0 5px;
  }

  #social-links a * {
    height: 40px;
    width: 40px;
  }

  .arrow-right,
  .tick {
    height: 16px;
    top: 2px;
  }
}

@media only screen and (max-width: 1020px) {
  header {
    height: 280px;
    flex-direction: column;
    align-content: space-evenly;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
  }

  h1 {
    margin: 0 auto;
  }

  nav {
    margin: 20px 0;
  }

  #social-links {
    margin-left: 0;
  }
}
</style>
