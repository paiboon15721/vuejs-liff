<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>userId: {{ profile.userId || '-' }}</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data: () => ({
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: ''
    }
  }),
  methods: {
    getUserId() {
        this.$liff.init().then(function (userId) {
            let _this = 
            _this.userId = userId
        })
    },
    openWindow () {
      this.$liff.openWindow({
        url: 'https://developers.line.me/en/docs/liff/overview/'
      })
    },
    closeWindow () {
      this.$liff.closeWindow()
    },
    sendMessage () {
      this.$liff.sendMessages([
        {
          type: 'text',
          text: 'You/\'ve successfully sent a message! Hooray!'
        },
        {
          type: 'sticker',
          packageId: '2',
          stickerId: '144'
        }
      ]).then(function () {
        window.alert('Message sent')
      }).catch(function (error) {
        window.alert('Error sending message: ' + error)
      })
    },
    getProfile () {
      let _this = this
      this.$liff.getProfile().then(function (profile) {
        _this.profile = profile
      }).catch(function (error) {
        alert('Error getting profile: ' + error)
      })
    }
  }
}
</script>
