let express=require("express");
let router=express.Router()
let centerData=require("../mock/center.json")
const mysql = require("mysql");

router.get("/data",(req,res)=>{
    res.send({msg:"我是价值评估模型的路由",chartCenter:centerData})
})
const app = express();
app.use(express.json());
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

router.get("/data2/:username",(req,res)=>{

    let sql = 'SELECT *\n' +
        'from final_lev\n' +
        'WHERE ownerinfo_login= ?'
    let username = req.params.username;
    conn.query(sql,[username],(err,chartcenter)=>{
        res.send({msg:"我是center的路由地址",chartcenter})
    })
});

module.exports=router;
