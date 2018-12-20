<template>
  <div id="changePassword">
    <div class="banner">
      <div class="banner_count">
        <img src="../images/logo.png" alt class="logo">
        <div class="box">
          <p class="title">放心签客户后台系统</p>
          <p class="e_title">Relax Signature Customer Background System</p>
        </div>
      </div>
    </div>

    <div class="content">
      <h2 style="marginBottom:20px;color:#302F2D">更改密码</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="请输入您的手机号"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入您的密码"></Input>
        </FormItem>
        <FormItem prop="value" class="operating_password">
          <div class="code-box">
            <Input v-model="value" placeholder="请输入您的验证码"/>
            <!-- <Button class="get-code">发送验证码</Button> -->
            <input type="button" class="get-code" value="发送验证码" @click="time">
          </div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
      <router-link :to="{name:'login'}">
        <span style="color:#575553">暂不修改</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import http from "../../components/http.js";
import vc from "vue-cookie";
export default {
  data() {
    return {
      value: "", //输入验证码
      formInline: {
        user: "",
        password: "",
        code: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写用户密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created () {
    this.show();
  },
  methods: {
    show() {
      this.formInline.user = this.$route.query.phone;
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success("Success!");
          // this.$router.push({ name: "main" });
          http
            .post("admin/code/chk", {
              phone: this.formInline.user,
              code: this.formInline.code
            })
            .then(res => {
              console.log(res);
              if (res.data.code == 200) {
                http
                  .post("admin/user/pwd", {
                    phone: this.formInline.user,
                    code: this.formInline.code,
                    newPwd: this.formInline.password
                  })
                  .then(res => {
                    console.log(res);
                    if (res.data.code == 200) {
                      this.$router.push({ name: "myAccount" });
                    }
                  });
              }
            });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    time() {
      let btn = document.getElementsByClassName("get-code")[0];
      let t;
      let time_num = 60;
      t = setInterval(function() {
        if (time_num <= 0) {
          btn.removeAttribute("disabled");
          btn.value = "发送验证码";
          time_num = 60;
          btn.style.background = "orange";
          btn.style.color = "#ffffff";
          clearInterval(t);
        } else {
          btn.setAttribute("disabled", true);
          btn.value = time_num + "秒";
          time_num--;
          btn.style.background = "rgba(244,244,244,1)";
          btn.style.color = "#999999";
        }
      }, 1000);
      http.post("admin/code/get", { phone: this.formInline.user }).then(res => {
        if (res.data.code == 200) {
          this.formInline.code = res.data.data;
          this.$Message.success("发送成功!");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.banner {
  height: 412px;
  width: 100%;
  background-color: orange;
  background-image: url(../images/banner.png);
  background-size: cover;
  text-align: center;
  margin-bottom: 48px;
  .banner_count {
    width: 100%;
    height: 100%;
    background: rgba(43, 59, 75, 0.55);
    .logo {
      width: 196px;
      height: 68px;
      margin-top: 149px;
      margin-bottom: 30px;
    }
    .box {
      width: 364px;
      height: 120px;
      margin: 0 auto;
      text-align: center;
      border: 2px solid rgba(255, 255, 255, 1);
      border-radius: 4px;
      .title {
        font-size: 30px;
        color: #ab6f2e;
        line-height: 75px;
        background: linear-gradient(
          0deg,
          rgba(255, 155, 61, 1) 0%,
          #ffffff 100%
        ); /* 背景色渐变 */
        -webkit-background-clip: text; /* 规定背景的划分区域 */
        -webkit-text-fill-color: transparent;
      }
      .e_title {
        font-size: 14px;
        color: #ffffff;
        font-weight: bold;
      }
    }
  }
}
.content {
  width: 460px;
  height: 220px;
  margin: 0 auto;
  .operating_password {
    height: 48px;
    width: 100%;
    .remember {
      float: left;
      color: #575553;
      font-size: 14px;
    }
    .change_password {
      float: right;
      color: #ffae36;
      font-size: 14px;
    }
    .code-box {
      width: 100%;
      .get-code {
        float: right;
        height: 48px;
        width: 120px;
        background-color: orange;
        color: #ffffff;
        cursor: pointer;
        outline-style: none;
        border-radius: 4px;
      }
      .ivu-input-wrapper {
        width: 328px;
        float: left;
      }
    }
  }
  .ivu-btn {
    width: 100%;
    height: 48px;
    font-size: 16px;
  }
}
</style>
<style lang='less'>
#changePassword {
  .ivu-form-item {
    width: 460px;
    height: 48px;
    margin: 0 auto;
    margin-bottom: 20px;
    .ivu-input {
      width: 100%;
      height: 48px;
      padding: 17px 0 17px 20px;
      font-size: 14px;
    }
  }
  .operating_password .ivu-form-item-content .ivu-input {
    width: 328px;
  }
}
</style>
