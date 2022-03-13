<template>
    <d2-container>
        <!--        头部-->
        <div class="header_div">
            <p class="message">姓名:
                <input class="inputtx" type="text" v-model="report_info.rep_name" placeholder="请输入姓名">
            </p>
            <p class="message">性别:
                <input class="inputtx" type="text" v-model="report_info.rep_gender" placeholder="请输入性别">
            </p>
            <p class="message">年龄:
                <input class="inputtx" type="text" v-model="report_info.rep_age" placeholder="请输入年龄">
            </p>
            <p class="message">科别:
                <input class="inputtx" type="text" v-model="report_info.rep_branch" placeholder="请输入科别">
            </p>
            <p class="message">诊断类型:
                <input class="inputtx" type="text" v-model="report_info.rep_diagnosisType" placeholder="请输入诊断类型">
            </p>
        </div>
        <!--中间-->
        <div class="middle_div">
            <div class="middle_div_d">
                <p class="middle_div_p">临床诊断:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_diagnosis" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">大体检查:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_check" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">病理诊断:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_blzd" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">免疫/组化:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_immunity" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">结果:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_reportRel" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">备注:</p>
                <textarea class="detail_inp11" v-model="report_info.rep_remark" :disabled="isEidt"></textarea>
            </div>
        </div>
        <!--        底部-->
        <div class="bottom_div">
            <div class="div1">上传附件:
                <span>最多上传3个附件,每个附件大小不超过2M</span>
            </div>
            <div class="div2">文件描述:
                <input type="text" style="width: 150px" class="div2_1">
                <el-upload
                        class="div2_4"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                     <div class="div2_2">上传</div>
                </el-upload>
                <div class="div2_3">浏览</div>
            </div>
        </div>
<!--        保存取消部分-->
        <div class="bottem">
            <el-button class="button_bc" type="success" round>保存</el-button>
            <el-button class="button_qx" type="danger" round>取消</el-button>
        </div>
    </d2-container>
</template>

<script>
  export default {
    name: 'AddReport',
    isEidt: true,
    data () {
      return {
        isEidt: true,// 是否修改页面
        isShowMask: false,// 是否显示附件弹窗
        report_info: {
          rep_id: '',
          rep_name: '',
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
        },
        fileList: []
      }
    },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        // this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        // return this.$confirm(`确定移除 ${ file.name }？`);
      }
  }}
</script>

<style lang="less" scoped>
    a, p, span {
        font-size: 15px;
    }
    /*头部部分*/
    .inputtx {
        width: 160px;
        /*border-radius: 2px;*/
    }
    .header_div {
        width: 95%;
        height: 50px;
        /*border: 1px solid red;*/
        padding-left: 40px;
        border-bottom: 1px solid #999999;

        p {
            color: #606266;

            span {
                color: black;
            }
        }

        .message {
            float: left;
            margin-right: 99px;
        }
    }
    /*中间部分*/
    .middle_div {
        /*border: 1px solid darkcyan;*/
        width: 90%;
        padding: 20px 4%;
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
    .bottom_div{
        width: 80%;
        height: 80px;
        /*border: 1px solid red;*/
        margin-left: 5%;
        margin-top: 20px;
        .div1{
            span{
                color: #3be1c3;
                font-size: 16px;
            }
        }
        .div2{
            margin-top: 10px;
            float: left;
            width: 400px;
            height: 50px;
        }
        .div2_3 {
            float: right;
            width: 60px;
            height: 27px;
            border-radius:15px;
            border-color: #999999;
            background: #999999;
            padding: 0 6px;
            border-width: 1px;
            border-style: solid;
            border-radius: 50px;
            font-size: 14px;
            color: white;
            line-height: 26px;
            text-align: center;
            /* 鼠标形状 */
            cursor: pointer;
            /*margin-left: 10px;*/
        }
        .div2_2 {
            float: right;
            width: 60px;
            height: 27px;
            /*border-radius:15px;*/
            border-color: #16dcb8;
            background: #16dcb8;
            padding: 0 6px;
            border-width: 1px;
            border-style: solid;
            border-radius: 50px;
            font-size: 14px;
            color: white;
            line-height: 26px;
            text-align: center;
            /* 鼠标形状 */
            cursor: pointer;
        }
        .div2_2:hover {
            color: #16DCB8;
            background: white;
        }
        .div2_3:hover {
            color: #999999;
            background: white;
        }
        .div2_4{
            float: right;
        }
    }

    .bottem{
        /*border: 1px solid rebeccapurple;*/
        height: 40px;
        width: 20%;
        margin-left:35%;
        .button_bc{
            width: 120px;
        }
        .button_qx{
            width: 120px;
            float: right;
        }
    }
</style>
