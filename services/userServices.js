const userModel = require('../models/User');
const ObjectId = require('mongoose').Types.ObjectId;
const listUsers = ()=>{
  return new Promise(async (resolve, reject)=>{
      let allUsers;
      try{
          allUsers = await userModel.find();
          if(allUsers.length) return resolve({success : true, data:allUsers, errMsg: null});
          console.log("%%%%",allUsers);
          return resolve({success : false, data: null, errMsg: "No user could be found"});
      }catch (e) {
          return reject({success: false, data: null, errMsg: new Error("Something bad happened with database query : " + e)});
      }
  })
};

const getUserById = (userId)=>{
    return new Promise(async (resolve, reject)=>{
        let user;
        try{
            user = await userModel.findOne({_id:ObjectId(JSON.parse(userId))});
            if(user) return resolve({success: true, data: user, errMsg: null});
            return resolve({success: false, data: null, errMsg: "No user with the given id could be found."});
        }catch (e) {
            console.log(e);
            return reject({success: false, data: null, errMsg: new Error('Something bad happened with database query : '+ e)})
        }
    })
};

module.exports = {
    listUsers,
    getUserById
};