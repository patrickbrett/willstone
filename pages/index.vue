<template>
  <div class="container">
    <site-header active="home" />
    <div class="main-content">
      <section id="content-1">
        <div id="content-1-first">
          <p>Hi there!</p>
          <p>I'm Will, a young-adult fantasy writer from Australia.</p>
          <p>
            My first novel, <strong>Finn: Red Shadow</strong>, is available on
            <a href="https://amazon.com" target="_blank" rel="noopener"
              >Amazon</a
            >,
            <a href="https://booktopia.com" target="_blank" rel="noopener"
              >Booktopia</a
            >, and other places that sell books.
          </p>
        </div>
        <div>
          <img
            :src="require('@/assets/img/finn-book-cover.jpg')"
            class="book-cover"
          />
        </div>
        <div id="content-1-second">
          <p>
            I’ve always been a fan of try-before-you-buy, so the first two
            chapters are completely free.
          </p>
          <p>
            Have a read, see if you like it, if it turns out you hate epic tales
            of good, evil, sacrifice and Nordic monster cults then no harm done.
          </p>
          <div class="subscribe-area">
            <input
              type="text"
              placeholder="Enter your email to get the free chapters..."
            />
            <button>Join the cult</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    siteHeader: Header
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
  width: 300px;
}
</style>
