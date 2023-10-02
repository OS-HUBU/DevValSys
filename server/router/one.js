let express=require("express");
let router=express.Router()
let oneData=require("../mock/one.json")
let mysql = require("mysql");

// let conn = mysql.createConnection({
//     user:'root',
//     password:'Hubu!88661126',
//     host:'122.204.223.14',
//     database:'tmy',
// });
let conn = mysql.createConnection({
    user:'root',
    password:'password',
    host:'111.47.28.118',
    database:'mydb',
    port:'30001'
});
// let sql = 'SELECT *\n' +
//     'FROM country_ranks'
// console.log(conn.query(sql,(err,data)=>{
//     console.log(err)
// }))
// let conn = mysql.createConnection({
//     user:'mydb',
//     password:'hubu88661126',
//     host:'47.98.247.52',
//     database:'mydb',
//     port:'3306'
// });
// router.get("/data",(req,res)=>{
//     res.send({msg:"我是one的路由地址",chartOne:oneData})
// });

router.get("/data",(req,res)=>{
    let sql = 'SELECT *\n' +
        'FROM country_ranks'
    conn.query(sql,(err,chartOne)=>{
        res.send({msg:"我是one的路由地址1",chartOne})
    })
});
module.exports=router;
