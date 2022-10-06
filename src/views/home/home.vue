<!-- 主文件 -->
<template>
  <div class="home">
    home页面生成成功 
    <div>
      joao add -p[pagename]快速生成页面
    </div>
    <div>
      <a href="/dag">点我跳转dag demo</a>
    </div>
  </div>
</template>

<script>
import { homeData } from './data.js'

export default {
  components: {},
  props: {},
  data () {
    return {
      data: homeData,
    }
  },
  created () {},
  mounted () {
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
}
</style>
