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
  data: (data) => ({
    profile: {
      userId: data.context.userId,
      displayName: '',
      pictureUrl: '',
      statusMessage: ''
    }
  }),
  methods: {
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
