const pw = document.querySelector("#password"); // 密码输入框
const pwC = document.querySelector("#Cpassword"); // 确认密码输入框
const firstname = document.querySelector("#firstname"); // 名字输入框
const lastname = document.querySelector("#lastname"); // 姓氏输入框
const email = document.querySelector("#email"); // 电子邮件输入框
const tel = document.querySelector("#phonenumber"); // 电话号码输入框

// 选择相应的错误信息显示区域
const pwError = document.querySelector("#password-error"); // 密码错误信息容器
const pwCError = document.querySelector("#Cpassword-error"); // 确认密码错误信息容器
const firstnameError = document.querySelector("#first-name-error"); // 名字错误信息容器
const lastnameError = document.querySelector("#last-name-error"); // 姓氏错误信息容器
const emailError = document.querySelector("#email-error"); // 电子邮件错误信息容器
const telError = document.querySelector("#phone-number-error");

firstname.addEventListener("input", function (event) {
  if (firstname.value === "") {
    firstnameError.textContent = "Please type in your first name."; // 如果名字为空，显示错误信息
  } else {
    firstnameError.textContent = ""; // 清除错误信息
  }
});

// 验证姓氏是否为空
lastname.addEventListener("input", function (event) {
  if (lastname.value === "") {
    lastnameError.textContent = "Please type in your last name"; // 如果姓氏为空，显示错误信息
  } else {
    lastnameError.textContent = ""; // 清除错误信息
  }
});

// 验证电子邮件格式
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      "Please enter in a valid Email. ex(johnSmith@email.com)"; // 如果电子邮件格式不正确，显示错误信息
  } else {
    emailError.textContent = ""; // 清除错误信息
  }
});

// 验证电话号码是否为10位数字
tel.addEventListener("input", function (event) {
  if (tel.validity.patternMismatch) {
    telError.textContent = "Please enter in a 10 digit phone number"; // 如果电话号码不匹配10位数字，显示错误信息
  } else {
    telError.textContent = ""; // 清除错误信息
  }
});

// 验证密码是否符合规则
pw.addEventListener("input", function (event) {
  if (pw.validity.patternMismatch) {
    const currentValue = pw.value;
    const regExpCap = /[A-Z]/g; // 正则表达式，用于检查是否包含大写字母
    const regExpDig = /[0-9]/g; // 正则表达式，用于检查是否包含数字
    let result = "";

    if (!regExpCap.test(currentValue)) {
      result += `Missing at least 1 capital letter. `; // 如果缺少大写字母，添加提示信息
    }

    if (!regExpDig.test(currentValue)) {
      result += "Missing at least 1 number. "; // 如果缺少数字，添加提示信息
    }

    if (currentValue.length < 9) {
      result += "Password must be at least 8 characters. "; // 如果密码长度不足，添加提示信息
    }

    pwError.textContent = result; // 显示密码错误信息
  } else {
    pwError.textContent = ""; // 清除错误信息
  }
});

// 验证确认密码是否与密码匹配
pwC.addEventListener("input", function (event) {
  if (pwC.value !== pw.value) {
    pwCError.textContent = "Passwords do not match"; // 如果确认密码与密码不匹配，显示错误信息
  } else {
    pwCError.textContent = ""; // 清除错误信息
  }
});
