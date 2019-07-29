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
    memberCarousel: () => import("../components/Home/MemberCarousel.vue"),
    gitRepositories: () => import("../components/Git/GitRepositories.vue"),
    ImgBanner: () => import("../components/ImgBanner/ImgBanner.vue")
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
