const userServices = require('../../services/userServices');

module.exports = (req,res)=>{

    userServices.listUsers().then((response)=>{
        console.log('Hurray', response);
        if(response.success) return res.json(response.data);
        return res.json(response.errMsg);
    }).catch((err)=>{
       return res.send(err);
    });
    //return new Promise(async (resolve, reject) => {
    //    let listUsersResponse;
    //    try{
    //        listUsersResponse = await userServices.listUsers();
    //        console.log("LLLLL",listUsersResponse);
    //        if(listUsersResponse.success) return resolve(listUsersResponse);
    //        return resolve(listUsersResponse);
    //    }catch (e) {
    //        console.log("HAHAHA",e);
    //        return reject(new Error("Something bad happened while making request to userService.js : "+ e));
    //    }
    // });
};