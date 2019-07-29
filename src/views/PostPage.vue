<template>
  <div>
    
    <v-container>
      <!-- Post -->
      <v-layout>
        <v-flex xs12>
          <PostList :limits="6" :load-more="true"></PostList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PostList from "../components/Document/PostList"

export default {
  name: "postPage",
  components: {
    PostList
  }
}
</script>
