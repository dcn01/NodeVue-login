const express = require('express')
const mysql = require('mysql')
const app = express()
const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')

var connsql = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '2232723904',
    database: 'db'

})
connsql.connect()


//设置跨域访问  
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
        next();
});


// app.engine('html', require('express-art-template'))
app.use('/public/', express.static('./public/'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res)=> {
    // res.sendFile( __dirname +"/views/"+ "index.html" );
    // res.render('index.html')
	res.send({code:200,msg:'Node服务启动成功'})
})

app.get('/register', (req, res)=> {
    // res.sendFile( __dirname +"/views/"+ "register.html" );
    // res.render('register.html')
})

app.use('/login', (req, res)=> {
    var login = {
        "user": req.body.user,
        "pwd": req.body.pwd
    }  
	console.log(login)
	var rule = {user:login.user,pwd:login.pwd}
    var loginsql = "select username,password from db_table where username='" + login.user + "'and password='" + login.pwd + "'"
    connsql.query(loginsql,  (err, result)=> {
        if (err) {
            console.log('err message:', err)
            return
        }
        if (result == '') {
            console.log('用户名或密码错误！')
            res.json({ code: -1, msg: '用户名或密码错误！' })

        } else {
			let token = jwt.sign(rule,'Bearer',{expiresIn:4000},{algorithm: 'RS256'})
            console.log('用户名密码匹配成功！')
            res.json({ code: 1, msg: '登录成功',token:token})

        }
    })
})

app.use('/regs', (req, res) => {
    var regs = {
        "user": req.body.user,
        "pwd": req.body.pwd
    }
    var regssql = "insert into db_table(username,password) values('" + regs.user + "','" + regs.pwd + "')";
    var selsql = "select username from db_table where username='" + regs.user + "'"
    function regfun() {
        connsql.query(regssql,  (err, result)=> {
            if (err) {
                console.log(err);
                return 
            }
            res.json({code:1,msg:"注册成功"})
            console.log('注册成功')
        })
    }
    connsql.query(selsql,  (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        if (result == '') {
            regfun()
        } else { 
            res.json({code:-1,msg:"注册失败，用户名已存在"})
            console.log('用户名已存在')
       }

    })
})

app.listen(3000)

// connsql.end()

