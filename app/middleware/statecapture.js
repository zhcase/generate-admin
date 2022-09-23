
// 返回类型定义

const SUCESS=200;  //成功
const FAILD= 500; // 失败

/**
 * 
 * @param {*} state 
 */
 module.exports = (options,app) => {
    return async function(state,data,msg){
        if(state==='sucess'){
            return {
               code:SUCESS,
               data,
               msg
            }
        }
        next();
    }

  };