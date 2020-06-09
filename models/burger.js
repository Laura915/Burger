//burger model 
const orm =require('../config/orm.js');

let burger={
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
            console.log(res);
        })
    }


}
module.exports=burger;