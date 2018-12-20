<template>
    <div id="bassicMessage">
        <div class="message">
            <div class="title">基础信息</div>
            <div class="shade"></div>
            <div class="content">
                <div class="pic"><img src="../images/header.png" alt=""></div>
                <ul class="list_message">
                    <li>用户{{message.phone}}</li>
                    <li>电话：{{message.phone}}</li>
                    <li>邮箱：{{message.email}}</li>
                </ul>
            </div>
        </div>
        <div class="message">
            <div class="title">企业信息</div>
            <div class="shade"></div>
            <div class="content">
                <div class="pic"><img src="../images/company_header.png" alt=""></div>
                <ul class="list_message">
                    <li>{{message.name}}</li>
                    <li>联系人：{{message.manager}}</li>
                    <li>电话：{{message.phone}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../../components/http.js'     
export default {
    data () {
        return {
            message: {
                phone: 0,
                email: "",
                manager: '',
                name: '',
            }
        }
    },
    created() {
        this.show();
    },
    methods: {
        // 展示数据================
        show() {
            http.post('admin/user/info',{}).then(res=>{
                if (res.data.code == 200) {
                    this.message.phone = res.data.data.phone;
                    this.message.email = res.data.data.email;
                    this.message.manager = res.data.data.manager;
                    this.message.name = res.data.data.name;
                }
            })
        },
    },
}
</script>
<style lang="less" scoped>
#bassicMessage{
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-bottom: 0;
}
.message{
    width: 767px;
    height: 340px;
    background-color: #fff;
    float: left;
    margin-right: 32px;
    padding: 24px;
    .title{
        color:#5F666B;
        font-size:14px;
        text-align:left;
        margin-bottom: 10px;
    }
    .shade {
        border-top: 1px solid orange;
        width: 100%;
        height: 10px;
        background-image: -webkit-linear-gradient(top, #a39072, #ffffff);
        margin-bottom: 29px;
        opacity:0.3;
    }
    .content{
        height: 279px;
        .pic{
            float: left;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            margin-top: 10px;
            margin-right: 17px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .list_message{
            float: left;
            list-style: none;
            li{
                list-style: none;
                text-align:left;
                color:#66717A;
                font-size:14px;
                line-height: 24px;
            }
            li:nth-child(1){
                font-weight:bold;
                font-size:16px;
                color:#5F666B;
            }
        }
    }
}
</style>