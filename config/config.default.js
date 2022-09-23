/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1663848211164_8845';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    origin: '*',//匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.jwt = {  //jwt配置项
    secret: "123456"
  }
  config.security={
    csrf:{
      enable:false
    }
  }
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '192.168.0.215',   // Redis host
      password: '',
      db: 0,
    },
  }
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '120.236.0.138',
      // port
      port: '16033',
      // username
      user: 'generate',
      // password
      password: 'YDgenerate@123',
      // database
      database: 'generate',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  }
   
  return {
    ...config,
    ...userConfig,
  };
};




