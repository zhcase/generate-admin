"use strict";

const Controller = require("egg").Controller;
const stateCapture = require("../utils/stateConst");
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 1.建立数据库的链接
    // 2.查询用户表
    // 3.新建用户表
    // 4.

    ctx.body = "欢迎来到元道前端模板管理系统";
  }
  // 登录
  async login() {
    const { ctx, app } = this;

    let { username, password } = ctx.request.body;
    // 判断账号密码是否输入
    if (!username || !password) {
      ctx.body = stateCapture("faild", "", "用户名与密码请填写完整!");
      return;
    }
    let userInfo = await ctx.service.user.findUserInfo(username);

    //查询账号是否存在
    if (!userInfo) {
      ctx.body = stateCapture("faild", "", "用户名不存在!");
      return;
    }
    // 账号密码正确
    if (username === userInfo.username && password === userInfo.password) {
      const token = app.jwt.sign(
        {
          username,
          userId:userInfo.userId, //需要存储的 token 数据
        },
        app.config.jwt.secret
      );
      app.redis.set(token, Date.now(),'EX',60)
      ctx.body = stateCapture("success", "", "登录成功!");
      return;
    } else {
      ctx.body = stateCapture("faild", "", "用户密码错误!");
      return;
    }
  }
}

module.exports = HomeController;
