<template>
    <d2-container>
        <!--        头部-->
        <div class="header_div">
            <p class="message">姓名:<span>{{ report_info.rep_name }}</span></p>
            <p class="message">性别:<span>{{ report_info.rep_gender }}</span></p>
            <p class="message">年龄:<span>{{ report_info.rep_age }}</span></p>
            <p class="message">科别:<span>{{ report_info.rep_branch }}</span></p>
            <p class="message">诊断类型:<span>{{ report_info.rep_diagnosisType }}</span></p>
            <span class="subject_header_text2" @click="add"><i class="fa fa-pencil"></i>修改信息</span>
        </div>
        <!--中间-->
        <div class="middle_div">
            <div class="middle_div_d">
                <p class="middle_div_p">临床诊断:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_diagnosis" :disabled="!isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">大体检查:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_check" :disabled="!isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">病理诊断:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_blzd" :disabled="!isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">免疫/组化:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_immunity" :disabled="!isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">结果:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_reportRel" :disabled="!isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">备注:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_remark" :disabled="!isEidt"></textarea>
            </div>
        </div>
        <!--        底部-->
        <div class="bottom_div">
            <p class="mge">报告医师:<span>{{report_info.rep_reportDoctor}}</span></p>
            <p class="mge">审核医师:<span>{{report_info.rep_verifyDoctor}}</span></p>
            <p class="mge">报告时间:<span>{{report_info.rep_time}}</span></p>
            <p>
                <el-popover
                        placement="right-end"
                        width="820"
                        trigger="click">
                    <img src="../../../assets/style/image/reportAccessory.png">
                    <el-button type="success" size="mini" slot="reference" style="margin-top: 25px">查看附件</el-button>
                </el-popover>
            </p>
        </div>
    </d2-container>
</template>

<script>
  export default {
    name: 'Report',
    isEidt: true,
    data () {
      return {
        isEidt: false,// 是否修改页面
        isShowMask: false,// 是否显示附件弹窗
        report_info: {
          rep_id: '',
          rep_name: '张某某',
          rep_gender: '男',
          rep_age: '50',
          rep_branch: '骨科',
          rep_diagnosisType: '复诊',
          // 临床诊断
          rep_diagnosis: '双足畸形, 皮下纤维脂肪增生',
          // 大体检查
          rep_check: '因(双足巨趾畸形)行畸形趾切除;送检(左3, 4, 右1, 2, 3, 4, 5均为皮肤)皮下纤维脂肪增生请结合临床...',
          // 病理诊断
          rep_blzd: '因(双足巨趾畸形)行畸形趾切除;送检(左3, 4, 右1, 2, 3, 4, 5均为皮肤)皮下纤维脂肪增生请结合临床...',
          // 免疫/组化
          rep_immunity: '',
          // 结果
          rep_reportRel: '因(双足巨趾畸形)行畸形趾切除;送检(左3, 4, 右1, 2, 3, 4, 5均为皮肤)皮下纤维脂肪增生请结合临床',
          // 备注
          rep_remark: '',
          // 报告医师
          rep_reportDoctor: '孙医生',
          // 审核医师
          rep_verifyDoctor: '赵医生',
          // 报告时间
          rep_time: '2014-12-4 10:40:56',
        }
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
    a, p, span {
        font-size: 14px;
    }


    /*头部部分*/
    .header_div {
        width: 95%;
        height: 50px;
        /*border: 1px solid red;*/
        padding-left: 50px;

        p {
            color: #606266;

            span {
                color: black;
            }
        }

        .message {
            float: left;
            margin-right: 200px;
        }
    }

    /*中间部分*/
    .middle_div {
        /*border: 1px solid darkcyan;*/
        width: 90%;
        padding: 0 4%;
        height: 670px;
    }

    /*输入框样式*/
    .detail_inp11 {
        float: left;
        background-color: #FFF;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        box-sizing: border-box;
        color: #606266;
        display: block;
        font-size: 14px;
        height: 100px;
        line-height: 40px;
        outline: 0;
        padding: 0px 15px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 95%;
        margin-top: 10px;
    }

    .detail_inp11:focus {
        border-color: #409EFF;
        outline: 0;
    }

    /*修改按钮*/
    .subject_header_text2 {
        margin-top: 10px;
        color: red;
        float: right;
    }

    /*左右排版格式*/
    .middle_div_p {
        font-size: 15px;
        width: 5%;
        float: left;
    }

    .middle_div_d {
          width: 100%;
          /*margin-top: 120px;*/
      }

    /*底部区域*/
    .bottom_div {
        width: 90%;
        height: 30px;
        /*border: 1px solid rebeccapurple;*/
        margin-left: 100px;
        /*float: left;*/

        .mge {
            float: left;
            /*border: 1px solid red;*/
            border-top: 2px solid #606266;
            padding: 15px 0;
            width: 30%;
            /*height: 30px;*/
        }
    }
</style>
