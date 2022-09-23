// 返回类型定义

const SUCCESS = 200; // 成功
const Faild = 500; // 失败

function stateCapture(state, data, msg) {
  let result = {};
  if (state === "success") {
    msg = "请求成功";
    result = {
      code: SUCCESS,
      data,
      msg,
    };
  } else {
    result = {
      code: Faild,
      data,
      msg,
    };
  }
  return result;
}
module.exports = stateCapture;
