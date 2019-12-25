<template>
  <d2-container>
    <div class="img">
      <div class="img_g"></div>
      <div class="font">欢迎进入云医疗管理系统</div>
    </div>
  </d2-container>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.img{
  width: 80%;
  height: 80%;
  /*border: 1px solid salmon;*/
  margin: auto;
  font-size: 60px;
  line-height: 100px;
  width: 100%;
  /*margin-top: 10%;*/
  .img_g{
    width:450px;
    height: 450px;
    background: url("../../../assets/style/image/tb.png");
    /*border: 1px solid darkgoldenrod;*/
    margin: auto  ;
  }
  .font {
    width: 670px;
    height: 100px;
    /*border: 1px solid saddlebrown;*/
    margin: auto;
    color: gold;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
  }
}
</style>
