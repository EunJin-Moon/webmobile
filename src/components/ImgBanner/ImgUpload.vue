<template>
  <v-content>
    <v-container fluid>
      <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
        <img :src="imageUrl" height="150" v-if="imageUrl" />
        <v-text-field
          label="Select Image"
          @click="pickFile"
          v-model="imageName"
          prepend-icon="mdi-paperclip"
        ></v-text-field>
        <input
          type="file"
          style="display: none"
          ref="image"
          accept="image/*"
          @change="onFilePicked"
        />
      </v-flex>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios"

export default {
  data: () => ({
    title: "Image Upload",
    imageName: "",
    imageUrl: "",
    imageFile: "",
    idhash: ""
  }),
  methods: {
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf(".") <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
          this.$emit("sendImgUrl", this.imageUrl)
          this.onSubmit()
        })
      } else {
        this.imageName = ""
        this.imageFile = ""
        this.imageUrl = ""
      }
    },
    albumSave () {
      let formData = new FormData()
      const clientId = "7683da3c223f15c"
      formData.append("deletehashes[]", this.idhash)
      axios({
        method: "POST",
        url: "https://api.imgur.com/3/album/e7VvL5xWDvu4Wol/add",
        data: formData,
        timeout: 0,
        headers: {
          Authorization: "Client-ID " + clientId
        },
        mimeType: "multipart/form-data",
        processData: false,
        contentType: false
      })
    },
    onSubmit () {
      let formData = new FormData()
      const clientId = "7683da3c223f15c"
      formData.append("image", this.imageFile)
      axios({
        method: "POST",
        url: "https://api.imgur.com/3/image",
        data: formData,
        headers: {
          Authorization: "Client-ID " + clientId
        },
        mimeType: "multipart/form-data"
      }).then(response => {
        this.idhash = response.data.data.deletehash
      })
    }
  }
}
</script>
