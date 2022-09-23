const Service =require("egg").Service;

class UserService extends Service{

   /**
    * 插入用户信息
    * @param {*} username  用户名
    * @param {*} password  用户密码
    * @param {*} nickname  昵称
    * @returns  
    */
   async insetUser(username,password,nick_name){
        const result =await this.app.mysql.insert('user',{username,password,nick_name})
        return result;
   }
   
   /**
    * 查询用户信息
    * @param {*} userIdOrUserName  用户id或者用户名
    * @returns 
    */
   async findUserInfo(userIdOrUserName){
      let result;
      // 索引
      let index="username"; 
      if(typeof userIdOrUserName === 'number'){
         index='userId'
      }
      console.log({[index]:userIdOrUserName});
      result =await this.app.mysql.get('user',{[index]:userIdOrUserName})
      return result;
   }
}

module.exports=UserService;