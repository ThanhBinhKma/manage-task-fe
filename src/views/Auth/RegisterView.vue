<template>
  <div class="container-login">
    <div class="auth-content">
      <title>login</title>
      <el-form
        ref="formRef"
        class="form-login"
        :rules="registerRules"
        label-position="top"
        :model="formDataRegister"
      >
        <el-form-item :label="'name'" prop="name">
          <el-input v-model="formDataRegister.name" class="input"></el-input>
        </el-form-item>
        <el-form-item :label="'email'" prop="email">
          <el-input v-model="formDataRegister.email" class="input"></el-input>
        </el-form-item>
        <el-form-item :label="'password'" prop="password">
          <el-input v-model="formDataRegister.password" class="input" type="password" />
        </el-form-item>
        <el-form-item :label="'password confirm'" prop="c_password">
          <el-input v-model="formDataRegister.c_password" class="input" type="password" />
        </el-form-item>
        <el-button class="btn" @click="handleLogin">register</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import formLoginRules from "@/validates/login";
import authRequest from "@/request/AuthRequest";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from 'vue-router'

const formRef = ref();
const router = useRouter();
const { formDataRegister, registerRules } = formLoginRules();

const handleLogin = async () => {
  console.log(import.meta.env.VITE_APP_API_BASE_URL)
  try {
    await formRef.value.validate(async (valid: boolean) => {
      if (valid) {
        await authRequest.register(formDataRegister)
        await router.push({ name: "login"})
      }
    })
  } catch (error: any) {
    ElMessage({
      message: "email or password not exists",
      type: "error",
      grouping: true,
    });
  }
};
</script>

<style lang="scss" scoped>

.container-login{
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .auth-content {
    background-color: #fff;
    padding: 40px 20px;
    width: 600px;
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
