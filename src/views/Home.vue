<template>
  <div class="about">
    <div class="cont">
      <el-table :data="tableData" height="calc(100% - 40px)">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="cs1" label="测量结果1"></el-table-column>
        <el-table-column prop="cs2" label="测量结果2"></el-table-column>
        <el-table-column prop="date" label="产生时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="{ row }">
            <el-button type="primary" size="small" icon="el-icon-printer" @click="openDialog(row)">打 印</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="打印预览" :visible.sync="dialogVisible" width="700px" top="3vh" :modal="true" :close-on-click-modal="false" center @close="cancles">
        <div class="dialogsC">
          <div class="measureSty" id="printMeasure">
            <div class="personSty">
              <div>
                {{ printInfo.cap }}
                <div>xxx剂量检测报告</div>
              </div>
              <div class="personInfoSty">
                <div v-for="item in personInfo" :key="item.index">
                  <span>{{ item.name }}</span>
                  <span>{{ printInfo[item.val] }}</span>
                </div>
              </div>
            </div>
            <div class="tableSty">
              <span class="titNav">xx数据</span>
              <el-table border :data="printList">
                <el-table-column prop="treatmentNum" label="序 号" width="114">
                  <template slot-scope="{ row }"> {{ row.index }} </template>
                </el-table-column>
                <el-table-column prop="cs1" label="测量结果1"></el-table-column>
                <el-table-column prop="cs2" label="测量结果2"></el-table-column>
                <el-table-column prop="date" label="测量时间"></el-table-column>
              </el-table>
              <span class="tip">*只展示最近5次测量数据</span>
            </div>
            <div class="resSty">
              <span class="titNav">检测意见</span>
              <span>正常正常正常正常正常</span>
            </div>
            <div class="docSty">
              <span>xx人：</span>
              <span>xx人：</span>
              <span>报告时间：{{ printInfo.date }}</span>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancles">取 消</el-button>
          <el-button type="primary" @click="printClk">打 印</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import print from 'print-js'
import printCss from '@/util/printCss'
export default {
  directives: {
    print,
  },
  data() {
    return {
      name: '',
      tableData: [], //数据
      dialogVisible: false, //模态框显影
      printList: [],
      personInfo: [
        { name: '姓 名', val: 'name' },
        { name: '性 别', val: 'sex' },
        { name: '产生时间', val: 'date' },
        { name: '年 龄', val: 'age' },
      ],
      printInfo: {},
    }
  },
  methods: {
    // 查询
    searchs() {
      // xxxx().then((data) => {
      const rs = [
        { cap: 'xxx测试公司1', name: '张三', sex: '男', age: '22', cs1: '0.7', cs2: '1.1', date: '2024-09-21 12:33:23' },
        { cap: 'xxx测试公司2', name: '李四', sex: '女', age: '28', cs1: '1.5', cs2: '0.6', date: '2024-08-20 12:33:23' },
        { cap: 'xxx测试公司3', name: '王五', sex: '男', age: '34', cs1: '0.3', cs2: '1.9', date: '2024-09-24 12:33:23' },
        { cap: 'xxx测试公司4', name: '赵六', sex: '女', age: '18', cs1: '1.2', cs2: '1.3', date: '2023-09-20 12:33:23' },
        { cap: 'xxx测试公司5', name: '钱七', sex: '男', age: '47', cs1: '0.8', cs2: '0.9', date: '2024-03-20 12:33:23' },
        { cap: 'xxx测试公司6', name: '孙八', sex: '女', age: '19', cs1: '1.7', cs2: '0.4', date: '2024-09-12 12:33:23' },
        { cap: 'xxx测试公司7', name: '周九', sex: '男', age: '29', cs1: '0.9', cs2: '1.5', date: '2024-09-3 12:33:23' },
        { cap: 'xxx测试公司8', name: '吴十', sex: '女', age: '33', cs1: '1.1', cs2: '1.4', date: '2024-09-4 12:33:23' },
        { cap: 'xxx测试公司9', name: '郑十一', sex: '男', age: '41', cs1: '0.4', cs2: '1.7', date: '2024-09-23 12:33:23' },
        { cap: 'xxx测试公司10', name: '冯十二', sex: '女', age: '25', cs1: '0.5', cs2: '1.0', date: '2024-09-31 12:33:23' },
      ]
      this.tableData = rs
      // })
    },
    // 重置
    reserts() {},
    // 取消
    cancles() {
      this.dialogVisible = false
    },
    // 展开模态框
    openDialog(row) {
      this.cjQuery(row)
      this.dialogVisible = true
    },
    // 打印
    printClk() {
      // 解析所有css文件中含有.measureSty的样式的文件
      const styleSheets = document.styleSheets
      let cssStr = ''
      Array.from(styleSheets).forEach((sheet) => {
        const rules = sheet.cssRules || sheet.rules
        Array.from(rules).forEach((rule) => {
          if (rule.cssText && rule.cssText.startsWith('.measureSty')) {
            cssStr += rule.cssText
          }
        })
      })
      // 去除页眉页脚,打印区域样式
      cssStr += printCss()
      this.$nextTick(() => {
        print({
          printable: 'printMeasure',
          type: 'html',
          style: cssStr,
          scanStyles: false,
        })
      })
    },
    cjQuery(row) {
      this.printInfo = row
      // xxxxx(params).then((res) => {
      // if (res) {
      this.printList = this.tableData.slice(-5).map((k, i) => {
        return { ...k, index: i + 1 }
      })
      // }
      // })
    },
  },
  mounted() {
    this.searchs()
  },
}
</script>
<style src="../../public/css/print.less" lang="less" scoped></style>
<style lang="less" scoped>
.cont {
  width: 100%;
}
//表格居中
/deep/.el-table td,
/deep/.el-table th {
  text-align: center;
}
</style>
