<template>
    <d2-container>
<!--        头部图标部分-->
        <div class="header_img">
            <span>个人信息</span>
        </div>
        <div class="subject">
            <div class="subject_header">
                <div class="subject_header_text">
                    <span class="subject_header_text1">我的信息</span>
                </div>
                <span class="subject_header_text2" @click="add"><i class="fa fa-pencil"></i>修改信息</span>
            </div>
            <!--          左侧部分-->
            <div class="subject_middle">
                <div class="medicalDetail_con_side1">
                    <div class="detail_con_left_side_row">
                        <p>医生姓名</p>
                        <el-input class="detail_inp10"   v-model="details[0].name" :disabled="!isEidt"  placeholder="请输入医生姓名" ></el-input>
                    </div>
                    <div class="detail_con_left_side_row detail_side_doubuleCol1">
                        <div style="display: inline-block">
                            <p>性别</p>
                            <el-input class="detail_inp8" v-model="details[0].sex" :disabled="!isEidt"  placeholder="请输入性别" style="width:86.5%"></el-input>
                        </div>
                        <div style="display: inline-block">
                            <p>年龄</p>
                            <el-input class="detail_inp8" v-model="details[0].age" :disabled="!isEidt"  placeholder="请输入年龄" style="width:86.5%"></el-input>
                        </div>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>出生日期</p>
                        <div class="detail_side_doubuleCol">
                            <!--                            <input class="detail_inp8" type="text" value="2018" :disabled="isEidt">-->
                            <el-input class="detail_inp9" v-model="details[0].year" :disabled="!isEidt"  placeholder="请输入年份" ></el-input>
                            <span>&nbsp;&nbsp;年&nbsp;&nbsp;</span>
                            <el-input class="detail_inp9" v-model="details[0].month" :disabled="!isEidt"  placeholder="请输入月份" ></el-input>
                            <span>&nbsp;&nbsp;月&nbsp;&nbsp;</span>
                            <!--                            <input class="detail_inp8" type="text" value="10" :disabled="isEidt"><span>月</span>-->
                        </div>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>联系电话</p>
                        <el-input class="detail_inp10" v-model="details[0].number" :disabled="!isEidt"  placeholder="请输入联系电话" ></el-input>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>地址</p>
                        <el-input class="detail_inp10" v-model="details[0].address" :disabled="!isEidt"  placeholder="请输入地址" ></el-input>
                    </div>
                </div>
<!--                中间部分-->
                <div class="medicalDetail_con_mid1">
                    <div class="detail_con_left_side_row">
                        <p>就职医院</p>
                        <el-input class="detail_inp10" v-model="details[0].family" :disabled="!isEidt"  placeholder="请输入科室" ></el-input>
                    </div>
                    <div class="detail_con_left_side_row diseaseDes_wrap">
                        <p>医院级别</p>
                        <el-input class="detail_inp10" v-model="details[0].rank" :disabled="!isEidt"  placeholder="请输入科室"></el-input>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>医院地址</p>
                        <div class="detail_side_doubuleCol">
                            <!--                            <input class="detail_inp8" type="text" value="2018" :disabled="isEidt">-->
                            <el-input class="detail_inp9" v-model="details[0].province" :disabled="!isEidt"  placeholder="请输入年份" ></el-input>
                            <span>&nbsp;&nbsp;省&nbsp;&nbsp;</span>
                            <el-input class="detail_inp9" v-model="details[0].city" :disabled="!isEidt"  placeholder="请输入月份" ></el-input>
                            <span>&nbsp;&nbsp;市&nbsp;&nbsp;</span>
                            <!--                            <input class="detail_inp8" type="text" value="10" :disabled="isEidt"><span>月</span>-->
                        </div>
                    </div>
<!--                    底部部分-->
                    <div class="detail_con_left_side_row">
                        <p>所属科室</p>
                        <el-input class="detail_inp10" v-model="details[0].allergy" :disabled="!isEidt"  placeholder="请输入过敏史" ></el-input>
                    </div>
                    <div class="detail_con_left_side_row">
                        <p>详细地址</p>
                        <el-input class="detail_inp10" v-model="details[0].docterName" :disabled="!isEidt"   placeholder="请输入详细地址"></el-input>
                    </div>
                </div>
                <div class="medicalDetail_con_side2">
                    <div>
                        <p>医生简历</p>
                        <textarea class="detail_inp12 diseaseTextarea" v-model="details[0].medicine" :disabled="!isEidt"  placeholder="请输入医生简历"></textarea>
                    </div>
                    <div>
                        <p>工作经历</p>
                        <textarea class="detail_inp12 diseaseTextarea" v-model="details[0].remark" :disabled="!isEidt"  placeholder="请输入工作经历"></textarea>
                    </div>
                    <div>
                        <p>上传诊断报告</p>
                        <div class="bg_img"></div>
                    </div>
                </div>
            </div>
<!--            显示的保存取消-->
            <div class="bottem" v-if="isEidt">
                <el-button class="button_bc" type="success" @click="add()" round>保存</el-button>
                <el-button class="button_qx" type="danger" @click="add()" round>取消</el-button>
            </div>
        </div>
    </d2-container>
</template>

<script>
  export default {
    name: 'PersonalInformation',
    data () {
      return {
        isEidt: false,
        details:[{
          name: '张某某',
          sex:'男',
          age:'34',
          year:'1988',
          month:'9',
          number:'155 8888 9999',
          address:'河南省郑州市中原区',
          family:'河南省人民医院',
          disease:'三甲',
          allergy:'外科',
          docterName:'河南省郑州市中原区',
          medicine:'添加简历...',
          remark:'添加简历...',
          province:'河南',
          city:'郑州',
          rank:'三甲'
        }]
      }
    },
    methods:{
        add(){
          this.isEidt = !this.isEidt
        }
    }
  }
</script>

<style lang="less" scoped>
    .header_img {
        width: 150px;
        height: 51px;
        background: url("../../../assets/style/image/title_bg_1.png");
        margin-left: 10px;

        span {
            position: absolute;
            margin-top: 17px;
            margin-left: 36px;
            color: white;
        }
    }
    .subject{
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
        .detail_side_doubuleCol1 div{
            /*display:inline-block;*/
            width: 45.5%;
        }
        .detail_inp10 {
            width: 90%;
        }
        .detail_inp9 {
            width: 39%;
        }
        .detail_inp11{
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
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 90%;

        }
        .detail_inp12{
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
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 90%;

        }

        .detail_inp11:focus{
            border-color: #409EFF;
            outline: 0;
        }
        .detail_inp12:focus{
            border-color: #409EFF;
            outline: 0;
        }

        .bg_img{
            background: url("../../../assets/style/image/doctor_uploadBG.png") no-repeat 30px;
            width: 90%;
            height: 100px;
            border: 1px solid #DCDFE6;
        }

    }
    .bottem{
        /*border: 1px solid rebeccapurple;*/
        height: 40px;
        width: 20%;
        margin:auto;
        .button_bc{
            width: 120px;
        }
        .button_qx{
            width: 120px;
            float: right;
        }
    }
</style>
