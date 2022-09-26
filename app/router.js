'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware,config } = app; // 
  const jwt = middleware.jwt(config.jwt);
  router.get('/', controller.home.index); // 无路由
  router.post('/login', controller.home.login); //登录
  router.post('/user/add', controller.user.addUser); // 新增用户
  router.get('/user/list', controller.user.userList); // 用户列表
  router.post('/user/delete', controller.user.deleteUser); // 删除用户
  router.get('/template/list',jwt,controller.templates.getTemplateList);
};
