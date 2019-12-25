<template>
    <div class="medical_lists">
    <d2-container>
<!--        头部图标部分-->
        <div class="header_img">
            <span>报告查询</span>
        </div>
        <div class="header_img" @click="add">
            <span>添加报告</span>
        </div>
<!--        搜索区域-->
        <div class="header_button">
            <el-input class="button_header" v-model="input" placeholder="请输入用户姓名"></el-input>
            <el-input class="button_header" v-model="input" placeholder="请输入就诊时间"></el-input>
            <el-input class="button_header" v-model="input" placeholder="请输入检查项目"></el-input>
            <div class="button_header_i">
                <i class="fa fa-search" @click=""></i>
            </div>
        </div>
<!--        循环列表部分-->
        <el-table ref="multipleTable" :data="tables" tooltip-effect="dark" style="width: 100%"
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="med_id" label="序号" width="140"></el-table-column>
            <el-table-column prop="med_name" label="姓名" width="140"></el-table-column>
            <el-table-column prop="med_gender" label="性别" width="140"></el-table-column>
            <el-table-column prop="med_age" label="年龄" width="140"></el-table-column>
            <el-table-column prop="med_depart" label="就诊科室" width="160"></el-table-column>
            <el-table-column prop="med_type" label="诊断类型" width="240"></el-table-column>
            <el-table-column prop="med_time" label="检查时间" width="240"></el-table-column>
            <el-table-column prop="med_checkItem" label="检查项目" width="240"></el-table-column>
            <el-table-column label="操作" width="140">
                <el-button size="mini" type="success" @click="report">查看详情</el-button>
            </el-table-column>
        </el-table>
<!--        底部区域-->
        <div style="margin-top: 20px">
            <el-col :span="8">
                <el-button type="danger" round @click="del([])"><i class="fa fa-trash"></i> 批量删除</el-button>
            </el-col>

            <el-col :span="13">
                <div class="block">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
            </el-col>
        </div>
    </d2-container>
    </div>
</template>

<script>
  export default {
    name: 'ReportQuery',
    data () {
      return {
        input: '',
        currentPage3:5,
        medical_lists: [
          {
            med_id: '1',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '2',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '3',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '4',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '5',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '6',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '7',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '8',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '9',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
          {
            med_id: '10',
            med_name: '刘德华',
            med_gender: '男',
            med_age: '50',
            med_depart: '外科',
            med_type: '检查/诊断',
            med_time: '2018-12-4 12:10:34',
            med_checkItem: '血糖, 甲状腺, 心肺, 肾脏'
          },
        ],
      }
    },
    computed: {

      tables() {
        const search = this.search
        if (search) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.medical_lists.filter(data => {
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.medical_lists
      }
    },
    methods:{
      del(row){
        this.medical_lists.splice(row,10)
      },
      report(){
        this.$router.replace(this.$route.query.redirect || '/Report')
      },
      add(){
        this.$router.replace(this.$route.query.redirect || '/AddReport')
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    }
  }
</script>

<style lang="less" scoped>
    /*顶部区域*/
    .header_img {
        width: 150px;
        height: 51px;
        background: url("../../../assets/style/image/title_bg_1.png");
        margin-left: 10px;
        margin-bottom: 12px;

        span {
            position: absolute;
            margin-top: 17px;
            margin-left: 36px;
            color: white;
        }

        float: left;
    }

    .header_button {
        margin-top: 10px;
    }

    /*搜索框*/
    .button_header {
        float: left;
        width: 130px;
        margin-left: 20px;
    }

    .button_header_i {
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-left: 16px;
        background: #16dcb8;
        color: white;
        line-height: 28px;
        text-align: center;
        margin-top: 5px;
    }
</style>
