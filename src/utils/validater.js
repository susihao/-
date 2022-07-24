//用户名校验
export function userNameRule(rule, value, callback) {
  let reg = /(^[a-zA-Z0-9]{4,10})$/;
  if (value == "") {
    callback(new Error("请输入用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入4-10位的用户名"));
  } else {
    callback();
  }
}
export function userPassRule(rule, value, callback) {
  let reg =
    /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  if (value == "") {
    callback(new Error("请输入密码"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入6-12位的密码,且要包含带小写和特殊字符"));
  } else {
    callback();
  }
}