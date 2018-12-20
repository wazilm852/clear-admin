<template>
  <div id="callRecord">
    <div class="content">
      <div class="title">
        <p class="text">调用记录</p>
        <Select v-model="model_port" style="width:200px" class="ipt" @on-change="model_select">
          <Option v-for="item in portList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="shade"></div>
      <div class="table">
        <!-- 表格===================================== -->
        <Table border :columns="columns_callRecord" :data="data_callRecord"></Table>
        <!-- 分页===================================== -->
        <div class="page_callRecord">
          <span class="first" @click="page_first">首页</span>
          <Page
            :total="dataCount"
            :page-size="pageSize"
            @on-change="page_callRecord"
            show-elevator
            :current="currpage"
            id="page_callRecord"
          />
          <span class="jump">
            <span class="last" @click="page_last">末页</span>
            <span>当前：{{currpage}}/{{totalPages}}页</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../../components/http.js";
import moment from 'moment'
export default {
  data() {
    return {
      portList: [
        {
          value: 1,
          label: "合同签署"
        },
        {
          value: 2,
          label: "CA证书"
        },
        {
          value: 3,
          label: "银行卡四要素验证"
        },
        {
          value: 4,
          label: "人脸识别"
        },
        {
          value: 5,
          label: "企业工商信息核验"
        },
        {
          value: 6,
          label: "身份证OCR"
        },
        {
          value: 7,
          label: "全网手机三要素验证"
        },
        {
          value: 8,
          label: "公安部实名验证"
        },
        {
          value: 9,
          label: "驾驶证OCR"
        },
        {
          value: 10,
          label: "行驶证OCR"
        },
        {
          value: 11,
          label: "营业执照OCR识别"
        }
      ], //select选项
      model_port: "",
      dataCount: 0, //总条数
      pageSize: 16, //每页条数
      currpage: 1, //当前页
      totalPages: 0, //总页数
      columns_callRecord: [
        {
          title: "接口名称",
          key: "name"
        },
        {
          title: "调用状态",
          key: "status"
        },
        {
          title: "是否收费",
          key: "falgToll"
        },
        {
          title: "调用时间",
          key: "data"
        },
        {
          title: "调用地址",
          key: "location"
        }
      ],
      data_callRecord: [],
      nameList: [
        "合同签署",
        "CA证书",
        "银行卡四要素验证",
        "人脸识别",
        "企业工商信息核验",
        "身份证OCR",
        "全网手机三要素验证",
        "公安部实名验证",
        "驾驶证OCR",
        "行驶证OCR",
        "营业执照OCR识别"
      ]
    };
  },
  created() {
    this.show();
  },
  methods: {
    // 页面初始化展示======================
    show() {
      http
        .post("admin/record/query", {
          searchType: 0,
          currentPage: this.currpage,
          pageSize: this.pageSize
        })
        .then(res => {
          this.totalPages = Math.ceil(res.data.data.total / this.pageSize);
          this.dataCount = res.data.data.total;
          var daList = res.data.data.list;
          for (let i = 0; i < daList.length; i++) {
            this.data_callRecord.push({
              name: this.nameList[daList[i].serviceType - 1],
              location: daList[i].ip,
              data: moment(daList[i].createAt).format('YYYY年MM月DD日'),
              status: daList[i].reqStatus == 0 ? "成功" : "失败",
              falgToll: daList[i].reqStatus == 0 ? "是" : "否"
            });
          }
        });
    },
    // 分页===================================
    page_callRecord(val) {
      this.data_callRecord = [];
      http
        .post("admin/record/query", {
          searchType: 0,
          currentPage: val,
          pageSize: this.pageSize
        })
        .then(res => {
          this.totalPages = Math.ceil(res.data.data.total / this.pageSize);
          this.dataCount = res.data.data.total;
          this.currpage = val;  
          var daList = res.data.data.list;
          for (let i = 0; i < daList.length; i++) {
            this.data_callRecord.push({
              name: this.nameList[daList[i].serviceType - 1],
              location: daList[i].ip,
              data: moment(daList[i].createAt).format('YYYY年MM月DD日'),
              status: daList[i].reqStatus == 0 ? "成功" : "失败",
              falgToll: daList[i].reqStatus == 0 ? "是" : "否"
            });
          }
        });
    },
    // 选择接口========================
    model_select(value) {
      this.data_callRecord = [];
      http
        .post("admin/record/query", {
          searchType: value,
          currentPage: this.currpage,
          pageSize: this.pageSize
        })
        .then(res => {
          this.totalPages = Math.ceil(res.data.data.total / this.pageSize);
          this.dataCount = res.data.data.total;
          var daList = res.data.data.list;
          for (let i = 0; i < daList.length; i++) {
            this.data_callRecord.push({
              name: this.nameList[daList[i].serviceType - 1],
              location: daList[i].ip,
              data: moment(daList[i].createAt).format('YYYY年MM月DD日'),
              status: daList[i].reqStatus == 0 ? "成功" : "失败",
              falgToll: daList[i].reqStatus == 0 ? "是" : "否"
            });
          }
        });
    },
    // 分页跳首页===================================
    page_first() {
      this.data_callRecord = [];
      this.currpage = 1;
      http
        .post("admin/record/query", {
          searchType: 0,
          currentPage: this.currpage,
          pageSize: this.pageSize
        })
        .then(res => {
          this.totalPages = Math.ceil(res.data.data.total / this.pageSize);
          this.dataCount = res.data.data.total;
          this.currpage = 1;
          var daList = res.data.data.list;
          for (let i = 0; i < daList.length; i++) {
            this.data_callRecord.push({
              name: this.nameList[daList[i].serviceType - 1],
              location: daList[i].ip,
              data: moment(daList[i].createAt).format('YYYY年MM月DD日'),
              status: daList[i].reqStatus == 0 ? "成功" : "失败",
              falgToll: daList[i].reqStatus == 0 ? "是" : "否"
            });
          }
        });
    },
    // 分页跳末页===================================
    page_last() {
      this.data_callRecord = [];
      http
        .post("admin/record/query", {
          searchType: 0,
          currentPage: this.totalPages,
          pageSize: this.pageSize
        })
        .then(res => {
          this.totalPages = Math.ceil(res.data.data.total / this.pageSize);
          this.dataCount = res.data.data.total;
          this.currpage = this.totalPages;
          var daList = res.data.data.list;
          for (let i = 0; i < daList.length; i++) {
            this.data_callRecord.push({
              name: this.nameList[daList[i].serviceType - 1],
              location: daList[i].ip,
              data: moment(daList[i].createAt).format('YYYY年MM月DD日'),
              status: daList[i].reqStatus == 0 ? "成功" : "失败",
              falgToll: daList[i].reqStatus == 0 ? "是" : "否"
            });
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
#callRecord {
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-bottom: 0;
}
.content {
  background-color: #fff;
  height: 100%;
  padding: 24px;
  padding-bottom: 0;
  .title {
    height: 53px;
    line-height: 50px;
    .text {
      float: left;
      color: #5f666b;
      font-size: 14px;
    }
    .ipt {
      width: 236px;
      height: 73px;
      float: right;
    }
  }
  .shade {
    border-top: 1px solid orange;
    width: 100%;
    height: 10px;
    background: linear-gradient(#a39072, #ffffff);
    opacity: 0.3;
  }
  .table {
    height: 93%;
    position: relative;
    margin-top: 8px;
  }
}
</style>
<style lang="less">
#callRecord {
  .ivu-table {
    width: 100%;
  }
  .table {
    .page_callRecord {
      width: 100%;
      height: 32px;
      position: absolute;
      // top: 870px;
      bottom: 50px;
      left: 0;
      text-align: center;
      .first {
        font-size: 14px;
        color: rgba(153, 153, 153, 1);
        cursor: pointer;
        vertical-align: middle;
      }
      #page_callRecord {
        text-align: left;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        .ivu-page-prev {
          border: 0;
        }
        .ivu-page-item {
          border: 0;
        }
        .ivu-page-next {
          border: 0;
        }
        .ivu-page-item-active {
          background-color: #fff;
        }
        .ivu-page-item a {
          font-size: 14px;
          color: rgba(153, 153, 153, 1);
        }
        .ivu-page-item-active a,
        .ivu-page-item-active:hover a {
          color: #fd9827;
        }
        .ivu-page-options-elevator {
          margin-top: 0px;
        }
        .ivu-page-options {
          font-size: 14px;
          color: rgba(153, 153, 153, 1);
        }
      }
      .jump {
        font-size: 14px;
        font-weight: normal;
        color: rgba(153, 153, 153, 1);
        vertical-align: middle;
        .last {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
