export const validateConfirmPassword = (
  formData: { [key: string]: string },
  mess = "password confirm not same password"
) => {
  return (rule: [{ [key: string]: string }], value: string, callback) => {
    if (value !== formData.password) {
      callback(new Error(mess));
    }
    callback();
  };
};
