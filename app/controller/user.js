"use strict";
const utility = require('utility')
const Controller = require("egg").Controller;
const stateCapture = require("../utils/stateConst");
class UserController extends Controller {
  //  新增用户
  async addUser() {
    const { ctx } = this;
    let result = {};
    try {
      // 返回结果
      let { username, password, nickname } = ctx.request.body;
      let userInfo = await ctx.service.user.findUserInfo(username);
      if(userInfo){
        ctx.body= stateCapture("faild",'','用户名已存在！');
        return;
      }
      // 数据插入
      let userResult = await ctx.service.user.insetUser(
        username,
        utility.md5(password),
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
  //查询用户
  async userList(){
    const { ctx } = this;
    let userList = await ctx.service.user.findUserList();
    console.log(userList);
    ctx.body= stateCapture("success",userList,'查询成功!');;
  }

  /**
   * 删除用户
   */
  async deleteUser(){
    const { ctx } = this;
    let { id } = ctx.request.body;
    let result = await ctx.service.user.deleteUser(id);
    if(result){
      ctx.body= stateCapture("success","",'删除成功!');;

    }else{
      ctx.body= stateCapture("faild","",'删除失败!');;
    }
  }
}

module.exports = UserController;
