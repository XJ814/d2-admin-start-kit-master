<template>
    <d2-container>
        <div class="header_img">
            <span>我的病人</span>
        </div>
        <div class="docCon_main">
            <!-- 一, 搜索 -->
            <div class="docCon_main_search">
                <div class="search_wrap">
                    <input type="text" placeholder="请输入患者姓名" v-model="patientName" @keyup="searchPatient">
                    <i class="fa fa-search" @click="searchPatient"></i>
                </div>
            </div>
            <!-- 二, 内容列表 -->
            <div class="docCon_main_list">
                <ul class="docCon_main_list_ul">
                    <li class="docCon_main_list_item" v-for="(patient, index) in patient_infos" :key="patient.id">
                        <img src="../../../assets/style/image/patient_pic.png" alt="" :onerror="defaultImg">
                        <p><span class="patient_pro">姓名：</span><span class="patient_mes">{{patient.p_name}}</span></p>
                        <p><span class="patient_pro">性别：</span><span class="patient_mes">{{patient.p_gender}}</span></p>
                        <p><span class="patient_pro">年龄：</span><span class="patient_mes">{{patient.p_age}}</span></p>
                        <p><span class="patient_pro">序号：</span><span class="patient_mes">{{patient.p_num}}</span></p>
                        <p class="patient_query">
                            <router-link class="patient_query_check" to="###" @click.native="lookDetailAction()"><i
                                    class="check fa fa-eye"></i>
                            </router-link>
                            <router-link class="patient_query_check" to="/doctor" @click.native="editAction(index)"><i
                                    class="check fa fa-pencil"></i>
                            </router-link>
                            <router-link class="patient_query_check" to="/doctor" @click.native="deleteAction(index)"><i
                                    class="delete fa fa-trash"></i>
                            </router-link>
                        </p>
                    </li>
                </ul>
            </div> <!-- 三, 底部控制区 -->
            <div class="docCon_main_control">
                <!-- 批量操作 -->
                <div class="docCon_control_batch fl">
                    <!-- 批量选择 -->
                    <div class="batch_check" @click="checkMore"><i class="fa fa-check"></i> 批量选择</div>
                    <!-- 批量删除 -->
                    <div class="batch_delete" @click="deleteMore"><i class="fa fa-trash"></i> 批量删除</div>
                    <!-- 页码组件 -->
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="100"
                            class="docCon_control_page fl">
                    </el-pagination>
                </div>

            </div>
        </div>
    </d2-container>
</template>

<script>
  export default {
    name: 'MyPatient',
    data () {
      return {
        patient_index: Number, // 病人的index
        isShowMask: false, // 是否显示提示框
        patientName: '', // 存储输入框中要搜索的病人姓名
        isCheckMore: false, // 是否批量选择
        defaultImg: 'this.src=\'../../../assets/style/image/patient_pic.png\'',
        patient_infos: [
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某11',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某22',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某333',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某23',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某2345',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          },
          {
            p_id: '007',
            p_name: '张某某',
            p_gender: '男',
            p_age: '34',
            p_num: '037',
            p_img: '../../../assets/style/image/patient_pic.png',
            p_isDelete: false
          }
        ]
      }
    },
    methods: {
      // 报错时加载默认图片
      imgError (item) {
        item.img = require('../../../assets/style/image/img.jpg')
      },
      // 搜索病人
      searchPatient () {
        let filterArr = []
        let that = this
        that.patientName = that.patientName.trim()
        this.patient_infos.filter(item => {
          if (item.p_name.indexOf(that.patientName) > -1) {
            filterArr.push(item)
          }
        })
        console.log(filterArr)
        return filterArr
      },
      // 查看
      lookDetailAction () {
        this.$router.push('/Case')
      },
      // 修改
      editAction (index) {
        this.$router.push('/Case')
      },
      // 删除
      deleteAction (index) {
          this.patient_info.splice(index, 1)
      },
      // 关闭弹窗
      closeMask () {
        this.isShowMask = false
      },
      // 批量选择
      checkMore () {
        this.isCheckMore = !this.isCheckMore
        // 重置数据源中的选中状态为 false
        for (var i = 0; i < this.patient_infos.length; i++) {
          this.patient_infos[i].p_isDelete = false
        }
      },
      // 批量删除
      deleteMore () {
        // 1, 定义数组, 保存需要删除的元素
        var deleteArr = []
        // 2, 遍历数据源, 如果 isDelete 为true 则全部删除
        for (var i = 0; i < this.patient_infos.length; i++) {
          if (this.patient_infos[i].p_isDelete) {
            // 将要删除的病人对象添加到数组进行记录
            deleteArr.push(this.patient_infos[i])
            // 将该病人对象从当前页面数据源中删除
            this.patient_infos.splice(i, 1)
            // 控制循环变量增量
            i--
          }
        }
        // 3, 页面恢复到删除之前状态
        this.isCheckMore = !this.isCheckMore
        // 4, 处理删除的病人对象, 即 deleteArr
        // alert("处理删除的病人对象");

      },
      // 点击当前li准备删除
      checkThisToDelete (index) {
        if (this.isCheckMore) {
          this.patient_infos[index].p_isDelete = true
        }
      },
      // 点击确定按钮
      alertSureBtn () {
        this.isShowMask = false
        // 多选状态下，删除多条数据；否则删除单个数据
        if (this.isCheckMore) {
          this.deleteMore()
        } else {
          console.log('删除病人信息' + this.patient_index)
          // 界面修改(数据源中删除数据)
          this.patient_infos.splice(this.patient_index, 1)
        }
      },
      // 点击关闭按钮
      cancleBtn () {
        this.isShowMask = false
      }
    }
  }
</script>
<style lang="less" scoped>
    @import "../../../assets/style/css/AlertBox.css";

    .docCon_main {
        /*border: 1px solid red;*/
        height: 100%;
        margin-left: 20px;
    }

    /*顶部区域*/
    .header_img {
        width: 150px;
        height: 51px;
        background: url("../../../assets/style/image/title_bg_1.png");
        margin-left: 10px;
        float: left;

        span {
            position: absolute;
            margin-top: 17px;
            margin-left: 36px;
            color: white;
        }
    }

    /*搜索框*/
    .docCon_main_search {
        height: 8%;
        overflow: hidden;
        margin-left: 15px;
    }

    .search_wrap {
        width: 360px;
        height: 32px;
        border: 1px solid #cccccd;
        border-radius: 16px;
        margin-top: 10px;
        /* 弹性布局 */
        -webkit-display: flex;
        display: flex;
        align-items: center;
        /* 溢出隐藏 */
        overflow: hidden;
    }

    .search_wrap input {
        border-width: 0;
        width: 300px;
        height: 30px;
        padding-left: 13px;
        /* 去除边框 */
        outline: none;
    }

    .search_wrap i {
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-left: 16px;
        background: rgb(22, 220, 184);
        color: white;
        line-height: 28px;
        text-align: center;
    }

    /* 二, 病人列表 */
    .docCon_main_list {
        height: 77%;
        /*overflow: hidden;*/
    }

    .docCon_main_list_ul {
        height: 97%;
        padding: 0.8%;
        /*overflow: hidden;*/
    }

    .docCon_main_list_item {
        overflow: hidden;
        float: left;
        width: 15%;
        height: 25%;
        padding: 0.61% 0.76%;
        margin-right: 3%;
        margin-bottom: 12px;
        border: 1px solid #f7f7f8;

        border-radius: 4px;
        /* 字体 */
        font-size: 14px;
        line-height: 8px;
        /* 盒阴影 */
        -webkit-box-shadow: -2px 2px 5px lightgrey;
        -moz-box-shadow: -2px 2px 5px lightgrey;
        -ms-box-shadow: -2px 2px 5px lightgrey;
        -o-box-shadow: -2px 2px 5px lightgrey;
        box-shadow: -2px 2px 5px lightgrey;
    }

    .patient_query_check {
        margin-right: 5%;
    }

    /* 批量选择时样式 */
    .checkToDelete {
        border: 2px solid lightgray;
    }

    /* 批量选择后再次选中的样式 */
    .willDelete {
        border: 2px solid red;
    }

    .docCon_main_list_item img {
        float: left;
        width: 41.13%;
        height: 100%;
        margin-right: 5.66%;
    }

    .docCon_main_list_item .patient_pro {
        color: #999999;
    }

    .docCon_main_list_item .patient_query {
        font-size: 0;
        word-spacing: 10px;
    }

    .docCon_main_list_item .patient_query i {
        font-size: 12px;
    }

    .docCon_main_list_item .patient_mes {
        color: #333333;
    }

    .patient_query .check {
        color: #16dcb8;
    }

    .patient_query .edit {
        color: #16dcb8;
    }

    .patient_query .delete {
        color: #f40000;
    }

    /* 三, 底部控制区 */


    /* 批量操作 */
    .docCon_control_batch {
        width: 30%;
        height: 80%;
        padding: 0.7% 0;
        /* 弹性布局 */
        display: flex;
    }

    .docCon_control_batch div {
        width: 10%;
        height: 60%;
        padding: 0 6px;
        margin-left: 2%;
        /* border: 1px solid #16DCB8; */
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

    .docCon_control_batch {
        width: 100%;
    }

    .docCon_control_batch div i {
        font-size: 14px;
    }

    /* 批量选择 */
    .batch_check {
        border-color: #16dcb8;
        background: #16dcb8;
    }

    .batch_check:hover {
        color: #16DCB8;
        background: white;
    }

    /* 批量删除 */
    .batch_delete {
        border-color: #f96464;
        background: #f96464;
    }

    .batch_delete:hover {
        color: #f96464;
        background: white;
    }

    /* 页码 */
    .docCon_control_page {
        width: 50%;
        height: 80%;
        padding: 0.7% 0;

    }
</style>
