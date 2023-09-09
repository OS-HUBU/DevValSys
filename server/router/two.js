let express=require("express");
let router=express.Router();
let twoData=require("../mock/two.json");
let mysql = require("mysql");

// let conn = mysql.createConnection({
//     user:'mydb',
//     password:'hubu88661126',
//     host:'47.98.247.52',
//     database:'mydb',
//     port:'3306'
// });
// let conn = mysql.createConnection({
//     user:'hubu',
//     password:'hubu88661126',
//     host:'111.47.28.118',
//     database:'tmy',
//     port:'3336'
// });
let conn = mysql.createConnection({
    user:'root',
    password:'Hubu!88661126',
    host:'122.204.223.14',
    database:'tmy',
});
// router.get("/data",(req,res)=>{
//     res.send({msg:"我是two的路由地址",chartTwo:twoData})
// })
router.get("/data",(req,res)=>{
    let sql = 'SELECT *\n' +
        'FROM company_ranks\n' +
        'ORDER BY count DESC'
    conn.query(sql,(err,chartTwo)=>{
        res.send({msg:"我是two的路由地址1",chartTwo})
    })
});
module.exports=router;
