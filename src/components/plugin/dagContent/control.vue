<template>
     <g>
        <foreignObject width="200px" height="30px" style="position: relative">
        <body xmlns="http://www.w3.org/1999/xhtml">
            <div class="control_menu">
                 <span @click="changeModelRunningStatus">
                  <i :class="modelRunningStatus ?  'el-icon-video-pause' : 'el-icon-video-play'"></i>
                </span>
                <span @click="sizeExpend">
                  <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fangda"></use>
                  </svg>
                </span>
                <span @click="sizeShrink">
                  <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-suoxiao"></use>
                  </svg>
                </span>
                <span @click="sizeInit">
                  <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test"></use>
                  </svg>
                </span>
                <span :class="['sel_area', 'sel_area_ing'].indexOf(currentEvent) !== -1 ? 'sel_ing' : ''" @click="sel_area($event)">
                  <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-duoxuankuang"></use>
                  </svg>
                </span>
                <span @click="fullScreen">
                  <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-quanping"></use>
                  </svg>
                </span>
            </div>
        </body>
        </foreignObject>
    </g>
</template>

<script>
import '../assets/iconfont';

export default {
  props: {
    currentEvent: {
      type: String,
      default: () => {
        "";
      }
    },
    modelRunningStatus: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      changeScreen: "full"
    };
  },
  methods: {
    sizeExpend() {
      this.$emit("sizeExpend");
    },
    sizeShrink() {
      this.$emit("sizeShrink");
    },
    sizeInit() {
      this.$emit("sizeInit");
    },
    sel_area(e) {
      this.$emit("sel_area");
      e.preventDefault();
      e.stopPropagation();
      e.cancelBubble = true;
    },
    fullScreen() {
      if (this.changeScreen === "full") {
        this.changeScreen = "mini";
        let root = document.getElementById("svgContent");
        root.webkitRequestFullScreen();
      } else {
        this.changeScreen = "full";
        document.webkitExitFullscreen();
      }
    },
    changeModelRunningStatus() {
      this.$emit('changeModelRunningStatus', !this.modelRunningStatus)
    }
  }
};
</script>

<style scoped>
.control_menu {
  height: 30px;
  width: 150px;
  background: #cccccc;
  justify-content: space-around;
  display: flex;
  user-select: none;
}
.control_menu span {
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: block;
  border-radius: 50%;
  text-align: center;
  transform: translateY(5px);
}
.control_menu span {
    transform: scale(1.4);
    transform-origin: 50% 0;
}
.sel_ing {
  color: #289de9;
  border: 1px solid #289de9 !important;
  border-radius: 100%;
}
.icon {
  /* ???????????? font-size ????????????????????? */
  width: 1em; height: 1em;
  /* ??????????????????????????????????????? */
  vertical-align: -0.15em;
  /* ???????????? color ????????? SVG ?????????/fill */
  fill: currentColor;
  /* path ??? stroke ?????? viewBox ????????? IE ????????????
      normalize.css ?????????????????? */
  overflow: hidden;
}
</style>
