'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app; // 
  router.get('/', controller.home.index); // 无路由
  router.post('/login', controller.home.login); //登录
  router.post('/user/addUser', controller.user.addUser); // 新增用户
  router.get('/template/list',controller.templates.getTemplateList);
};
