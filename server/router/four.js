let express=require("express");
let router=express.Router()
let mysql = require("mysql");
let fourData=require("../mock/four.json")

router.get("/data",(req,res)=>{
    res.send({msg:"我是four的路由地址",chartFour:fourData})
})
let conn = mysql.createConnection({
    user:'mydb',
    password:'hubu88661126',
    host:'47.98.247.52',
    database:'mydb',
    port:'3306'
});
// let conn = mysql.createConnection({
//     user:'hubu',
//     password:'hubu88661126',
//     host:'111.47.28.118',
//     database:'tmy',
//     port:'3336'
// });

// let conn = mysql.createConnection({
//     user:'root',
//     password:'Hubu!88661126',
//     host:'122.204.223.14',
//     database:'tmy',
// });

router.get("/data2",(req,res)=>{
    let sql = 'SELECT *\n' +
        'from final_critic_score4_202307102044\n' +
        'WHERE ownerinfo_login=\'DanySK\''
    conn.query(sql,(err,chartFour1)=>{
        res.send({msg:"我是four的路由地址1",chartFour1})
    })
});
module.exports=router;
