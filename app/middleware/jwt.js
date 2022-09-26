'use strict';
module.exports = options => {
    return async function jwt(ctx, next) {
      // 拿到传会数据的header 中的token值
      const token = ctx.request.header.authorization;
      // 当前请求时get请求，执行接下来的中间件
     if (!token) {
          ctx.throw(401, '未登录， 请先登录');
          ctx.body = {
            code: 50008,
          };
        
      } else { // 当前token值存在
        let decode;
        // 解码token
        decode = await ctx.app.jwt.verify(token, options.secret, (err, decoded) => {
          if (err) {
            if (err.name === 'TokenExpiredError') { // token过期
              return 'TokenExpiredError';
            } else if (err.name === 'JsonWebTokenError') { // 无效的token
              return 'JsonWebTokenError';
            }
          } else {
            return decoded;
          }
        });
  
        if (decode === 'TokenExpiredError') {
          ctx.body = {
            code: 401,
            msg: '登录过期，请重新登录',
          };
          return;
        }
  
        if (decode === 'JsonWebTokenError') {
          ctx.body = {
            code: 50012,
            msg: 'token无效，请重新登录',
          };
          return;
        }
        await next();
      }
    };
  };
  