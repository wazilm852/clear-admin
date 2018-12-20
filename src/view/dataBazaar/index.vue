<template>
    <div id="dataBazaar">
        <ul class="content">
            <li>
                <div class="pic"><img src="../images/pic1.png" alt=""></div>
                <h5>合同签署</h5>
                <p>为您提供从合同上传、签署、证书等数据</p>
                <router-link :to="{name:'contractSigning'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic2.png" alt=""></div>
                <h5>银行卡四要素验证</h5>
                <p>对签合同的个人主体进行实名认证</p>
                <router-link :to="{name:'bankCardElements'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic3.png" alt=""></div>
                <h5>CA证书</h5>
                <p>国家权威数字证书</p>
                <router-link :to="{name:'caCertificate'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic4.png" alt=""></div>
                <h5>营业执照OCR识别</h5>
                <p>对企业主体进行验证</p>
                <router-link :to="{name:'ocrDiscern'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic5.png" alt=""></div>
                <h5>企业工商信息核验</h5>
                <p>对企业主体进行验证</p>
                <router-link :to="{name:'industryVerification'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic6.png" alt=""></div>
                <h5>公安部实名验证</h5>
                <p>对签合同的个人主体进行实名认证</p>
                <router-link :to="{name:'policeVerification'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic7.png" alt=""></div>
                <h5>全网手机三要素验证</h5>
                <p>对个人进行验证</p>
                <router-link :to="{name:'phoneVerification'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic8.png" alt=""></div>
                <h5>人脸识别</h5>
                <p>对个人进行验证</p>
                <router-link :to="{name:'personalVerification'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic9.png" alt=""></div>
                <h5>身份证OCR</h5>
                <p>根据身份证正面照识别身份信息</p>
                <router-link :to="{name:'idOcr'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic10.png" alt=""></div>
                <h5>驾驶证OCR</h5>
                <p>根据身份证正面照识别身份信息</p>
                <router-link :to="{name:'drivingLicenceOCR'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li>
                <div class="pic"><img src="../images/pic11.png" alt=""></div>
                <h5>行驶证OCR</h5>
                <p>根据身份证正面照识别身份信息</p>
                <router-link :to="{name:'driveOCR'}">
                    <button class="btn">查看数据</button>
                </router-link>
            </li>
            <li class="excess"></li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
}
</script>
<style lang="less" scoped>
#dataBazaar{
    width: 100%;
    height: 100%;
    padding: 24px;
    padding-bottom: 0;
}
.content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
        width: 506px;
        height: 250px;
        background-color: #fff;
        width: 30%;
        margin-bottom: 32px;
        list-style: none;
        text-align: center;
        .pic{
            width: 88px;
            height: 88px;
            background:rgba(245,250,255,1);
            border:1px solid rgba(102,113,122,1);
            border-radius:50%;
            padding-top: 22px;
            text-align: center;
            margin: 16px auto;
        }
        h5{
            color:#5F666B;
            font-size:16px;
        }
        p{
            color:#66717A;
            font-size:14px;
            margin-top: 12px;
            margin-bottom: 16px;
        }
        button{
            width:100px;
            height:40px;
            background:#66717A;
            border-radius:4px 10px 0px 10px;
            line-height: 40px;
            font-size:16px;
            color:#ffffff;
            border:0;
            outline-style: none;
            cursor: pointer;
        }
        .btn:active{
            background-color:rgba(255,174,54,0.8);
        }
        button:hover{
            background:rgba(255,174,54,1);
        }
        .btn{
            opacity:1;
        }
    }
    .excess{
        opacity:0;
    }
}
</style>
