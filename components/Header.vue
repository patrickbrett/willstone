<template>
  <header>
    <h1>Will Stone</h1>
    <nav>
      <ul>
        <nuxt-link to="/">
          <li :class="'color-1' + (active === 'home' ? ' active' : '')">
            <div class="inside-border"></div>
            <div class="li-content">
              Home
              <tick v-if="active === 'home'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div></li
        ></nuxt-link>
        <nuxt-link to="/about">
          <li :class="'color-2' + (active === 'about' ? ' active' : '')">
            <div class="inside-border"></div>
            <div class="li-content">
              About
              <tick v-if="active === 'about'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/books">
          <li :class="'color-3' + (active === 'books' ? ' active' : '')">
            <div class="inside-border"></div>
            <div class="li-content">
              Books
              <tick v-if="active === 'books'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/news">
          <li :class="'color-4' + (active === 'news' ? ' active' : '')">
            <div class="inside-border"></div>
            <div class="li-content">
              News
              <tick v-if="active === 'news'" class="tick" />
              <arrow-right v-else class="arrow-right" />
            </div>
          </li>
        </nuxt-link>
      </ul>
    </nav>
    <div id="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener"
        ><icon-facebook
      /></a>
      <a href="https://twitter.com/Willsimulated" target="_blank" rel="noopener"
        ><icon-twitter
      /></a>
    </div>
  </header>
</template>

<script>
import ArrowRight from './icons/IconArrowRight'
import Tick from './icons/IconTick'
import IconFacebook from './icons/IconFacebook'
import IconTwitter from './icons/IconTwitter'

export default {
  components: {
    ArrowRight,
    Tick,
    IconFacebook,
    IconTwitter
  },
  props: {
    active: String
  }
}
</script>

<style scoped>
:root {
  --color-1: #2a3b73;
  --color-2: #8d3c30;
  --color-3: #1b662d;
  --color-4: #861ea5;
}

header {
  background: rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(24px);
  color: #fff;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;
}

h1 {
  font-family: 'Cinzel Decorative', cursive;
  font-weight: 200;
  font-size: 56px;
  margin-right: auto;
}

nav ul {
  list-style-type: none;
}

nav ul li {
  font-family: 'Lexend Deca', Helvetica, sans-serif;
  border: 2px solid #fff;
  width: 161px;
  height: 69px;
  font-size: 28px;
  text-transform: lowercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  position: relative;
}

nav ul li:hover {
  cursor: pointer;
  border: none; /* can experiment with no border or having a border */
}

nav ul li.active {
  cursor: default;
}

.li-content {
  transform: translateX(10px);
  transition: 0.4s transform;
}

li.active .li-content {
  transform: translateX(14px);
}

.arrow-right,
.tick {
  opacity: 0;
  transition: 0.4s opacity;
}

nav ul li:hover .li-content {
  transform: translateX(0);
}

nav ul li:hover .arrow-right,
nav ul li:hover .tick {
  opacity: 1;
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

nav ul li:hover .inside-border {
  width: 100%;
}

nav ul li.color-1 .inside-border {
  background: #2a3b73;
}

nav ul li.color-2 .inside-border {
  background: #8d3c30;
}

nav ul li.color-3 .inside-border {
  background: #1b662d;
}

nav ul li.color-4 .inside-border {
  background: #861ea5;
}

#social-links {
  margin-left: 40px;
}

#social-links a {
  margin: 0 10px;
  transition: opacity 0.4s;
}

#social-links a:hover {
  opacity: 0.5;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
}
</style>
