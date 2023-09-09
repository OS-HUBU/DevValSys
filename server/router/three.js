let express=require("express");
let router=express.Router()
let threeData=require("../mock/three.json")
let mysql = require("mysql");

router.get("/data",(req,res)=>{
    res.send({msg:"我是three的路由地址",chartThree:threeData})
})
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
    database:'tmy'
});

router.get("/data2",(req,res)=>{
    let sql = 'SELECT final_critic_score4_202307102044.ownerinfo_login,user_year.years,final_critic_score4_202307102044.value_score,final_critic_score4_202307102044.ranks\n' +
        'from final_critic_score4_202307102044 join user_year\n' +
        'on final_critic_score4_202307102044.ownerinfo_login = user_year.ownerinfo_login\n' +
        'WHERE ranks <= 100\n' +
        'ORDER BY ranks asc\n' +
        'LIMIT 100'
    conn.query(sql,(err,userData)=>{
        res.send({msg:"我是three的路由地址1",userData})
    })
});
module.exports=router;
