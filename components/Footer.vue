<template>
  <footer>
    <p>
      &copy; {{ year }} Will Stone. Site by
      <a href="https://bellcurve.com.au" target="_blank" rel="noopener"
        >Bellcurve</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  font-family: 'Lexend Deca', sans-serif;
  background: rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(24px);
  color: rgba(255, 255, 255, 0.37);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 3em;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.37);
  font-weight: 600;
}

a:hover {
  text-decoration: underline;
}
</style>
