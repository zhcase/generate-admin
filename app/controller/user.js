"use strict";
const Controller = require("egg").Controller;
const stateCapture = require("../utils/stateConst");
class UserController extends Controller {
  //  新增用户
  async addUser() {
    try {
      // 返回结果
      let result = {};
      const { ctx } = this;
      let { username, password, nickname } = ctx.request.body;
      // 数据插入
      let userResult = await ctx.service.user.insetUser(
        username,
        password,
        nickname
      );
      // 是否成功
      if (userResult.affectedRows === 1) {
        result = stateCapture("success");
      } else {
        result = stateCapture("faild");
      }
    } catch (e) {
      result = stateCapture("faild", "", e);
    }
    ctx.body = result;
  }
}

module.exports = UserController;
