<template>
  <div>
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  components: {
    siteFooter: Footer
  }
}
</script>

<style>
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
  margin-bottom: 200px;
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
</style>
