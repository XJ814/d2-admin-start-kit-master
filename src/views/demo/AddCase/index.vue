<template>
    <d2-container>
        <div class="subject">
<!--            头部部分-->
            <div class="subject_header">
                <div class="subject_header_text">
                    <span class="subject_header_text1">病例夹</span>
                </div>
                <span class="subject_header_text2" @click="add"><i class="fa fa-pencil"></i>修改信息</span>
            </div>
            <!--          左侧部分-->
            <div class="subject_middle">
                <div class="medicalDetail_con_side1">
                    <div class="detail_con_left_side_row">
                        <p>患者姓名</p>
                        <el-input class="detail_inp10" v-model="details[0].name" placeholder="请输入患者姓名"
                                  :disabled="!isEidt"></el-input>
                    </div>
                    <div class="detail_con_left_side_row detail_side_doubuleCol1">
                        <div style="display: inline-block">
                            <p>性别</p>
                            <el-input class="detail_inp8" v-model="details[0].sex" placeholder="请输入性别"
                                      :disabled="!isEidt" style="width:86.5%"></el-input>
                        </div>
                        <div style="display: inline-block">
                            <p>年龄</p>
                            <el-input class="detail_inp8" v-model="details[0].age" placeholder="请输入年龄"
                                      :disabled="!isEidt" style="width:86.5%"></el-input>
                        </div>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>就诊日期</p>
                        <div class="detail_side_doubuleCol">
                            <el-input class="detail_inp9" v-model="details[0].year" placeholder="请输入年份"
                                      :disabled="!isEidt"></el-input>
                            <span>&nbsp;&nbsp;年&nbsp;&nbsp;</span>
                            <el-input class="detail_inp9" v-model="details[0].month" placeholder="请输入月份"
                                      :disabled="!isEidt"></el-input>
                            <span>&nbsp;&nbsp;月&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>联系电话</p>
                        <el-input class="detail_inp10" v-model="details[0].number" placeholder="请输入联系电话"
                                  :disabled="!isEidt"></el-input>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>地址</p>
                        <el-input class="detail_inp10" v-model="details[0].address" placeholder="请输入地址"
                                  :disabled="!isEidt"></el-input>
                    </div>
                </div>
<!--                中间部分-->
                <div class="medicalDetail_con_mid1">
                    <div class="detail_con_left_side_row">
                        <p>就诊科室</p>
                        <el-input class="detail_inp10" v-model="details[0].family" placeholder="请输入科室"
                                  :disabled="!isEidt"></el-input>
                    </div>
                    <div class="detail_con_left_side_row diseaseDes_wrap">
                        <p>病情描述</p>
                        <!--                        <el-input :autosize="{ minRows: 5, maxRows: 6 }" class="detail_inp11" v-model="details[0].disease"  type="textarea" :disabled="isEidt"></el-input>-->
                        <textarea class="detail_inp11 diseaseTextarea" v-model="details[0].disease" :disabled="!isEidt"
                                  placeholder="请输入病症"></textarea>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>过敏史</p>
                        <el-input class="detail_inp10" v-model="details[0].allergy" placeholder="请输入过敏史"
                                  :disabled="!isEidt"></el-input>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>诊断医生</p>
                        <el-input class="detail_inp10" v-model="details[0].docterName" placeholder="请输入诊断医生姓名"
                                  :disabled="!isEidt"></el-input>
                    </div>
                </div>
<!--                右边部分-->
                <div class="medicalDetail_con_side2">
                    <div>
                        <p>用量详情</p>
                        <textarea class="detail_inp12 diseaseTextarea" v-model="details[0].medicine" :disabled="!isEidt"
                                  placeholder="请输入用量详情"></textarea>
                    </div>
                    <div>
                        <p>备注</p>
                        <textarea class="detail_inp12 diseaseTextarea" v-model="details[0].remark" :disabled="!isEidt"
                                  placeholder="请输入备注"></textarea>
                    </div>
                    <div>
                        <p>上传诊断报告</p>
                        <el-upload
                                class="upload-demo"
                                drag
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple>
                            <div class="bg_img"></div>
                        </el-upload>
                    </div>
                </div>
            </div>
<!--            底部保存取消-->
            <div class="bottem" v-if="isEidt">
                <el-button class="button_bc" @click="add" type="success" round>保存</el-button>
                <el-button class="button_qx" @click="add"  type="danger" round>取消</el-button>
            </div>
        </div>
    </d2-container>
</template>

<script>
  export default {
    name: 'AddCase',
    data () {
      return {
        isEidt: false,
        details: [{
          name: '',
          sex: '',
          age: '',
          year: '',
          month: '',
          number: '',
          address: '',
          family: '',
          disease: '',
          allergy: '',
          docterName: '',
          medicine: '',
          remark: ''
        }]
      }
    },
    methods: {
      add(){
        this.isEidt = !this.isEidt
      },
      open3 () {
        this.$prompt('请输入手机号', '查询', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '手机号格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的手机号是: ' + value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    },
    created () {
      this.open3()
    }
  }
</script>

<style lang="less" scoped>
    /deep/.el-upload-dragger {
        width: 430px;
        height: 100px;
    }
    .subject {
        height: 90%;
        width: 100%;
    }

    .subject_header {
        margin-left: 10px;
        width: 98%;
        height: 30px;
        padding: 10px;
        border-bottom: 1px solid #ABABAB;

        .subject_header_text {
            position: relative;
            left: -10px;
            width: 200px;
            height: 39px;
            border-bottom: 2px solid #16dcb8;
        }

        .subject_header_text1 {

            font-size: 25px;
            /*margin-left: 10px;*/
        }

        .subject_header_text2 {
            font-size: 15px;
            position: relative;
            top: -25px;
            color: red;
            float: right;
        }

    }

    .subject_middle {
        /*border: 1px solid red;*/
        margin-left: 20px;
        width: 95%;
        height: 500px;
        padding: 20px;
        display: flex;

        p {
            font-size: 15px;
            color: #999999;
        }

        .medicalDetail_con_side1 {
            /*border: 1px solid rebeccapurple;*/
            border-right: 2px solid #BDB76B;
            flex: 1;
            padding-left: 3%;
        }

        .medicalDetail_con_mid1 {
            border-right: 2px solid #BDB76B;

            flex: 1;
            padding-left: 3%;
            /*border: 1px solid darkblue;*/
        }

        .medicalDetail_con_side2 {
            flex: 1;
            padding-left: 3%;
            /*border: 1px solid firebrick;*/
        }

        .detail_side_doubuleCol1 div {
            /*display:inline-block;*/
            width: 45.5%;
        }

        .detail_inp10 {
            width: 90%;
        }

        .detail_inp9 {
            width: 39%;
        }

        .detail_inp11 {
            -webkit-appearance: none;
            background-color: #FFF;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 131px;
            line-height: 40px;
            outline: 0;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 90%;

        }

        .detail_inp12 {
            -webkit-appearance: none;
            background-color: #FFF;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 100px;
            line-height: 40px;
            outline: 0;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 90%;

        }

        .detail_inp11:focus {
            border-color: #409EFF;
            outline: 0;
        }

        .detail_inp12:focus {
            border-color: #409EFF;
            outline: 0;
        }

        .bg_img {
            background: url("../../../assets/style/image/doctor_uploadBG.png");
            width: 430px;
            height: 100px;
            border: 1px solid #DCDFE6;
        }

    }

    .bottem {
        /*border: 1px solid rebeccapurple;*/
        height: 40px;
        width: 20%;
        margin: auto;

        .button_bc {
            width: 120px;
        }

        .button_qx {
            width: 120px;
            float: right;
        }
    }
</style>
