<template>
  <div class="container-login">
    <div class="auth-content">
      <title>login</title>
      <el-form
        ref="formRef"
        class="form-login"
        :rules="loginRules"
        label-position="top"
        :model="formData"
      >
        <el-form-item :label="'email'" prop="email">
          <el-input v-model="formData.email" class="input"></el-input>
        </el-form-item>
        <el-form-item :label="'password'" prop="password">
          <el-input v-model="formData.password" class="input" type="password" />
        </el-form-item>
        <router-link to="/register">
          register
        </router-link>
        <el-button class="btn" @click="handleLogin">login</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import formLoginRules from "@/validates/login";
import authRequest from "@/request/AuthRequest";
import { ref } from "vue";
import { ElMessage } from "element-plus";

const formRef = ref();
const { formData, loginRules } = formLoginRules();

const handleLogin = async () => {
  try {
    await formRef.value.validate(async (valid: boolean) => {
      if (valid) {
        const response = await authRequest.login(formData)
        localStorage.setItem("token", response.data);
        ElMessage({
          message: "login success",
          type: "success",
          grouping: true,
        });
      }
    })
  } catch (_) {
    ElMessage({
      message: "email or password not exists",
      type: "error",
      grouping: true,
    });
  }
};
</script>

<style lang="scss" scoped>
.container-login {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .auth-content {
    background-color: #fff;
    padding: 40px 20px;
    width: 500px;
    max-width: 80%;
    border-radius: 10px;
    border: 1px solid #dddddd;
    align-items: center;
    display: flex;
    flex-direction: column;

    .form-login {
      width: 100%;
      margin-bottom: 20px;

      .btn {
        width: 100%;
        height: 40px;
        background: deepskyblue;
        font-size: 20px;
        font-weight: bold;
        color: white;
      }
    }
  }
}
</style>
