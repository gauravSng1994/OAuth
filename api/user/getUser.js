const userServices = require('../../services/userServices');

module.exports = (req,res)=>{
    let userId = req.params.userId;
    console.log("Inside getUser.js",userId);
    userServices.getUserById(userId).then((response)=>{
        console.log('Hurray', response);
        if(response.success) return res.json(response.data);
        return res.json(response.errMsg);
    }).catch((err)=>{
        return res.send(err);
    });
  //return new Promise(async (resolve, reject)=>{
  //     let userId = req.params.userId;
  //     let getUserResponse;
  //     try{
  //         getUserResponse = await userService.getUserById(userId);
  //         if(getUserResponse.success) return res.json(getUserResponse.data);
  //         //if(getUserResponse.success) return resolve(getUserResponse);
  //         //return reject(getUserResponse);
  //     }catch (e) {
  //         return res.json(e);
  //         //return reject(new Error("Something bad happened while requesting for userService.js : "+ e));
  //     }
  //});
};