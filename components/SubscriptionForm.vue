<template>
  <div>
    <div class="subscribe-area">
      <input
        type="text"
        :placeholder="Content['free-chapters-download-box'].text"
        v-model="email"
      />
      <button v-show="!isShowingSubscription" @click="continueSubscription">
        {{ Content['free-chapters-download-box'].button }}
      </button>
    </div>
    <div class="subscribe-area-second" v-show="isShowingSubscription">
      <p>One more thing...</p>
      <div>
        <input
          type="text"
          v-model="nameGiven"
          placeholder="Your first name..."
        />
      </div>
      <div>
        <input
          id="is-allowing-newsletter"
          type="checkbox"
          :checked="isAllowingNewsletter"
        /><label for="is-allowing-newsletter"
          >Send me updates a few times a year about new releases</label
        >
      </div>
      <button v-show="isShowingSubscription" @click="performSubscribe">
        {{ Content['free-chapters-download-box'].button }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Content from '@/assets/content/content/content.json'

export default {
  data() {
    return {
      Content,
      isShowingSubscription: false,
      nameGiven: '',
      email: '',
      isAllowingNewsletter: true
    }
  },
  methods: {
    continueSubscription() {
      this.isShowingSubscription = true
    },
    performSubscribe() {
      const body = {
        nameGiven: this.nameGiven,
        email: this.email,
        isAllowingNewsletter: this.isAllowingNewsletter
      }

      console.log(body)

      const apiUrl = `https://zwfyn9ekgg.execute-api.us-east-1.amazonaws.com/dev/newsletter-subscriptions`

      axios.post(apiUrl, body).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.subscribe-area,
.subscribe-area-second {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}

.subscribe-area-second {
  flex-direction: column;
}

.subscribe-area input,
.subscribe-area-second input {
  background: hsla(0, 0%, 74%, 0.48);
  border: none;
  padding: 30px;
  font-size: 20px;
  font-family: 'Athelas', serif;
  width: 100%;
}

.subscribe-area input:focus,
.subscribe-area-second input[type='text']:focus {
  outline: none;
  background: hsla(0, 0%, 74%, 0.68);
}

.subscribe-area button,
.subscribe-area-second button {
  background: #7c1e09;
  border: none;
  color: #fff;
  font-size: 24px;
  font-family: 'Athelas', serif;
  min-width: 240px;
}

.subscribe-area button:hover,
.subscribe-area-second button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.subscribe-area button:focus,
.subscribe-area-second button:focus {
  outline: none;
  opacity: 0.8;
}

.subscribe-area-second {
  text-align: left;
}
</style>
