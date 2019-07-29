<template>
  <div>
    <ImgBanner />
    <memberCarousel />
    <gitRepositories />
  </div>
</template>

<script>
export default {
  name: "homePage",
  components: {
    memberCarousel: () => import("../components/MemberCarousel.vue"),
    gitRepositories: () => import("../components/GitRepositories.vue"),
    ImgBanner: () => import("../components/ImgBanner.vue")
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>
</style>
