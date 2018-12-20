<template>
  <div id="login">
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
      <Form ref="formInline" :model="formInline" :rules="ruleInline" id="ipt_logo">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="请输入您的手机号"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入您的密码"  @keyup.enter.native="handleSubmit('formInline')"></Input>
        </FormItem>
        <div class="operating_password">
          <Checkbox v-model="formInline.checked" class="remember">记住密码</Checkbox>
          <router-link :to="{name:'changePassword', query:{phone: this.formInline.user}}">
            <span class="change_password">更改密码</span>
          </router-link>
        </div>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template> 
<script>
import http from "../../components/http.js";
import vc from "vue-cookie";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      story: this.$store.state.userlogin.num,
      single: true, //是否记住密码
      formInline: {
        user: "",
        password: "",
        checked :true
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
  // computed:{
  //   ...mapState(['count'])
  // },
  created() {
    let user = JSON.parse(vc.get("userName"))
      ? JSON.parse(vc.get("userName"))
      : {};
    this.formInline.user = user.user;
    if (user.checked === false) {
      this.formInline.password = '';
    } else {
      this.formInline.password = user.password;
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.login({
            phone: this.formInline.user,
            password: this.formInline.password
          }).then(res => {
            if (res.data.code === 200) {
              this.$Message.success("登录成功!");
              vc.set("userName", JSON.stringify(this.formInline), 1);
              this.$router.push({ name: "myAccount" });
            } else if (res.data.code === 500) {
              this.$Message.error("账号或密码输入错误!");
            }
          });
        } else {
          this.$Message.error("输入账号密码!");
        }
      });
    },
    ...mapActions(["login"])
  }
};
</script>
<style lang='less' scoped>
#login {
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
      height: 36px;
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
    }
  }
}
</style>
<style lang='less'>
#login {
  #ipt_logo {
    .ivu-form-item {
      width: 460px;
      height: 48px;
      margin: 0 auto;
      margin-bottom: 20px;
      .ivu-form-item-content {
        width: 100%;
        height: 100%;
        .ivu-input-wrapper {
          width: 100%;
          height: 100%;
          .ivu-input {
            width: 100%;
            height: 100%;
          }
        }
      }
      .ivu-btn {
        width: 100%;
        height: 100%;
        font-size: 16px;
      }
    }
  }
}
</style>
