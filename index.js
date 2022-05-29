// 随机变量函数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//连接到mysql数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});
conn.connection();
let sql = 'SELECT * FROM lytab';
conn.query(sql,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});