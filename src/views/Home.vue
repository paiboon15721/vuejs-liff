<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>userId: {{ profile.userId || '-' }}</div>
    <div>displayName: {{ profile.displayName || '-' }}</div>
    <button @click="getProfile()">Get Profile</button>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data: () => ({
    profile: {
      userId: "",
      displayName: "",
      pictureUrl: "",
      statusMessage: ""
    }
  }),
  mounted() {
    this.getProfile();
  },
  methods: {
    openWindow() {
      this.$liff.openWindow({
        url: "https://developers.line.me/en/docs/liff/overview/"
      });
    },
    closeWindow() {
      this.$liff.closeWindow();
    },
    sendMessage() {
      this.$liff
        .sendMessages([
          {
            type: "text",
            text: "You/'ve successfully sent a message! Hooray!"
          },
          {
            type: "sticker",
            packageId: "2",
            stickerId: "144"
          }
        ])
        .then(function() {
          window.alert("Message sent");
        })
        .catch(function(error) {
          window.alert("Error sending message: " + error);
        });
    },
    async getProfile() {
      try {
        const profile = await this.$liff.getProfile();
        this.profile = profile;
      } catch (e) {
        console.log("Error getting profile: " + e);
      }
    }
  }
};
</script>
