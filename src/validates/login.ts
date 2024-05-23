import { VALIDATE } from "@/validates/validate";
import { reactive } from "vue";
import { validateConfirmPassword } from '@/validates/common'

const formLoginRules = () => {
  const formData = reactive({
    email: "",
    password: "",
  });
  const loginRules = {
    email: [
      {
        required: true,
        message: "email is required",
        trigger: "blur",
      },
      {
        max: VALIDATE.MAX_LENGTH_EMAIL,
        message: "maxlength is 100",
        trigger: "blur",
      },
      {
        pattern: VALIDATE.REGEX_EMAIL,
        trigger: "blur",
        message: "email is not regex",
      },
      {
        whitespace: true,
        trigger: "blur",
        message: "email is required",
      },
    ],
    password: [
      {
        required: true,
        message: "password is required",
        trigger: "blur",
      },
      {
        whitespace: true,
        trigger: "blur",
        message: "password is required",
      },
    ],
  };

  const formDataRegister = reactive({
    email: "",
    name: "",
    password: "",
    c_password: "",
  });
  const registerRules = {
    name: [
      {
        required: true,
        message: "email is required",
        trigger: "blur",
      },
      {
        max: VALIDATE.MAX_LENGTH_EMAIL,
        message: "maxlength is 100",
        trigger: "blur",
      },
      {
        whitespace: true,
        trigger: "blur",
        message: "email is required",
      },
    ],
    email: [
      {
        required: true,
        message: "email is required",
        trigger: "blur",
      },
      {
        max: VALIDATE.MAX_LENGTH_EMAIL,
        message: "maxlength is 100",
        trigger: "blur",
      },
      {
        pattern: VALIDATE.REGEX_EMAIL,
        trigger: "blur",
        message: "email is not regex",
      },
      {
        whitespace: true,
        trigger: "blur",
        message: "email is required",
      },
    ],
    password: [
      {
        required: true,
        message: "password is required",
        trigger: "blur",
      },
      {
        whitespace: true,
        trigger: "blur",
        message: "password is required",
      },
    ],
    c_password: [
      {
        required: true,
        message: "password is required",
        trigger: "blur",
      },
      {
        trigger: "blur",
        validator: validateConfirmPassword(formDataRegister),
      }
    ]
  };
  return { loginRules, formData, formDataRegister, registerRules };
};

export default formLoginRules;
