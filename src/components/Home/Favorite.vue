<template>
  <v-snackbar :value="snackbar" :right="true" :timeout="2000">
    Ctrl + D로 즐겨찾기 해보세요 :)
    <v-btn color="pink" text @click="setSnackbar()">close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "favorite",
  computed: {
    snackbar () {
      return this.$store.getters.getSnackbar
    }
  },
  methods: {
    setSnackbar () {
      this.$store.commit("setSnackbar")
    }
  }
}
</script>
