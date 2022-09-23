"use strict";
const utility = require('utility')
const Controller = require("egg").Controller;
const stateCapture = require("../utils/stateConst");

class TemplateController extends Controller {
  
    /**
     * 获取模板列表
     */
    async getTemplateList() {
        const {ctx,app}=this;
        //查询所有表
        let result=await app.mysql.query("show tables");
        result=JSON.stringify(result);
        result= JSON.parse(result.replace(/Tables_in_generate/g,"name"));
        ctx.body = stateCapture("success",result,"查询成功!");
      }
}

module.exports=TemplateController