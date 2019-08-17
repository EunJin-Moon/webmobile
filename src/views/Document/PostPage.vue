<template>
  <div>
    <ParallaxTitle :title="name" />
    <v-container>
      <!-- Post -->
      <PostList :limits="6" :load-more="true"></PostList>
    </v-container>
  </div>
</template>

<script>
import PostList from "@/components/Document/PostList"

export default {
  name: "postPage",
  components: {
    PostList,
    ParallaxTitle: () => import("@/components/ImgBanner/ParallaxTitle.vue")
  },
  data () {
    return {
      name: "Post"
    }
  }
}
</script>
