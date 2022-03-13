<template>
    <d2-container>
<!--        头部-->
        <div class="header_img">
            <span>出院打印</span>
        </div>
<!--        列表头-->
        <div class="middle_header">
            <div class="middle_header1">
                <div class="one">
                    <p>姓名:<span>{{dischargePatInfo.disP_name}}</span></p>
                    <p>性别:<span>{{dischargePatInfo.disP_gender}}</span></p>
                    <p>年龄:<span>{{dischargePatInfo.disP_age}}</span></p>
                    <p>科室:<span>{{dischargePatInfo.disP_section}}</span></p>
                    <p>住院时间:<span>{{dischargePatInfo.disP_hospTime}}</span></p>
                </div>
                <div class="two">
                    <p>住院号:<span>{{dischargePatInfo.disP_hospNum}}</span></p>
                    <p>病床号:<span>{{dischargePatInfo.disP_hosBedNum}}</span></p>
                    <p>主治医师:<span>{{dischargePatInfo.disP_doctor}}</span></p>
                    <p>护士:<span>{{dischargePatInfo.disP_nurse}}</span></p>
                    <p></p>
                </div>
            </div>
            <div class="button_header1">
                <div class="batch_check">
                    <a class="acl" href="javascript:window.print()">打印病例</a>
                </div>
            </div>
        </div>
<!--        列表第二分部-->
        <div class="middle_div">
            <div class="middle_div_d">
                <p class="middle_div_p">临床诊断:</p>
                <textarea class="detail_inp11" v-model="dischargePatInfo.disP_diagnose" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">手术:</p>
                <textarea class="detail_inp11" v-model="dischargePatInfo.disP_operation" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">恢复情况:</p>
                <textarea class="detail_inp11" v-model="dischargePatInfo.disP_recovery" :disabled="isEidt"></textarea>
            </div>
            <div class="middle_div_d">
                <p class="middle_div_p">备注:</p>
                <textarea class="detail_inp11" v-model="dischargePatInfo.disP_remark" :disabled="isEidt"></textarea>
            </div>
        </div>
<!--        底部部分-->

        <div class="bottom_div">
            <p class="mge">出院时间:<span>{{dischargePatInfo.disP_leaveTime}}</span></p>
            <p class="mge">核准医师:<span>{{dischargePatInfo.disP_approvedDoc}}</span></p>

        </div>
    </d2-container>
</template>

<script>
  export default {
    name: 'LeaveHospital',
    data () {
      return {
        dischargePatInfo: {
          disP_id: '001',
          disP_name: '张三',
          disP_gender: '男',
          disP_age: '49',
          disP_section: '骨科',
          disP_hospTime: '2018-12-4',
          disP_hospNum: '333999888',
          disP_hosBedNum: '2407',
          disP_doctor: '张医生',
          disP_nurse: '王护士',
          disP_diagnose: '右手小臂骨折',
          disP_operation: '钢板固定',
          disP_recovery: '恢复良好',
          disP_remark: '',
          disP_leaveTime: '2018-12-31',
          disP_approvedDoc: '王医生'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .header_img {
        width: 150px;
        height: 51px;
        background: url("../../../assets/style/image/title_bg_1.png");
        margin-left: 50px;
        float: left;

        span {
            position: absolute;
            margin-top: 17px;
            margin-left: 36px;
            color: white;
        }
    }

    /*顶部区域分布*/
    .middle_header {
        margin-left: 40px;
        width: 95%;
        height: 90px;
        margin-top: 50px;
        /*border: 1px solid salmon;*/
        display: flex;
        border-bottom: 1px solid #999999;
        .middle_header1{
            margin-left: 20px;
            width: 80%;
            height: 90px;
            /*border: 1px solid darkgoldenrod;*/
            .one {
                width: 100%;
                height: 45px;
                /*border: 1px solid darkblue;*/
                display: flex;
                p{
                    flex: 1;
                }
            }
            .two {
                width: 100%;
                height: 45px;
                /*border: 1px solid darkblue;*/
                display: flex;
                p{
                    flex: 1;
                }
            }
        }
        .button_header1{
            width: 20%;
            /*border: 1px solid black;*/
            .batch_check {
                width: 150px;
                height: 30px;
                border-radius:15px;
                border-color: #16dcb8;
                background: #16dcb8;
                width: 50%;
                height: 30%;
                padding: 0 6px;
                margin-left: 20%;
                border-width: 1px;
                border-style: solid;
                border-radius: 50px;
                font-size: 14px;
                color: white;
                line-height: 26px;
                text-align: center;
                /* 鼠标形状 */
                cursor: pointer;
                margin-top: 8%;
            }

            .batch_check:hover{
                background: white;
                a{
                    color: #16DCB8;
                }
            }
            .acl{
                color: white;
            }

        }
    }
    /*中间部分*/
    .middle_div {
        /*border: 1px solid darkcyan;*/
        width: 85%;
        border-bottom: 1px solid #999999;
        padding: 0 4%;
        height: 530px;
        margin-left:50px ;
        .middle_div_d {
            width: 100%;
            margin-top: 20px;
        }
        /*左右排版格式*/
        .middle_div_p {
            font-size: 15px;
            width: 5%;
            float: left;
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
            height: 110px;
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
    }
    /*底部区域*/
    .bottom_div {
        width: 90%;
        height: 30px;
        margin-left: 100px;
        .mge {
            float: left;
            padding: 5px 0;
            width: 30%;
        }
    }
</style>
