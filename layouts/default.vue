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
  background: url('~assets/img/background-main.jpg') fixed;
  background-size: cover;
}

.main-content {
  font-family: 'Athelas', serif;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.68);
  text-align: center;
  margin-top: 180px;
  margin-bottom: 60px;
}

#content-1 {
  background: #f4f4f4;
  padding: 80px;
  overflow: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 80vw;
  margin: 0 auto;
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
.container {
  overflow: auto;
}
</style>
