<!-- 主文件 -->
<template>
  <div class="XXX">
    Welcome to use joao template!
    <p>vuex data pageSize: {{$store.state.XXX.pageSize}}</p>
  </div>
</template>

<script>
import { xxxXxample } from './data.js'

export default {
  components: {},
  props: {},
  data () {
    return {
      data: xxxXxample,
    }
  },
  created () {
    console.log("========store=========")
    console.log(this.$store.state.XXX)
  },
  mounted () {},
  methods: {},
}
</script>

<style scoped>
.XXX {}
</style>
