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
    * 查询用户列表
    */
   async findUserList(){
    let result =await this.app.mysql.select('user',{ // 搜索 post 表
      columns: ['user_id', 'username','nick_name','create_time'], // 要查询的表字段
    })
    return result;
   }

   /**
    * 更新用户列表
    */
    async findUserList(){
      let result =await this.app.mysql.select('user',{ // 搜索 post 表
        columns: ['user_id', 'username','nick_name','create_time'], // 要查询的表字段
      })
      return result;
     }
   
   // 修改用户信息
   async updateUserInfo(){
   }

   /**
    * 删除用户
    * @param {*} userId  用户id
    */
   async deleteUser(userId){
      let result=await this.app.mysql.delete('user',{user_id:userId})
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
         index='user_id'
      }
      console.log({[index]:userIdOrUserName});
      result =await this.app.mysql.get('user',{[index]:userIdOrUserName})
      return result;
   }
}

module.exports=UserService;