<template>
  <div class="container">
    <site-header active="books" />
    <div class="main-content">
      <section id="content-1">
        <div id="content-1-first">
          <h1>Books</h1>
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
  text-align: center;
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

#content-1-second {
  width: 35%;
  /*float: right;*/
}

p {
  margin: 1em;
}

a {
  color: rgba(0, 0, 0, 0.68);
  font-weight: bold;
}

.subscribe-area {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.subscribe-area input {
  background: hsla(0, 0%, 74%, 0.48);
  border: none;
  padding: 20px;
  font-size: 36px;
  font-family: 'Athelas', serif;
  width: 100%;
}

.subscribe-area input:focus {
  outline: none;
  background: hsla(0, 0%, 74%, 0.68);
}

.subscribe-area button {
  background: #000;
  border: none;
  color: #fff;
  font-size: 36px;
  font-family: 'Athelas', serif;
  min-width: 240px;
}

.subscribe-area button:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
}

.subscribe-area button:focus {
  outline: none;
  background: rgba(0, 0, 0, 0.8);
}
</style>
