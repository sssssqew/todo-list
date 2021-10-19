var express = require('express')
var app = express()
var cors = require('cors')
var logger = require('morgan')
var mongoose = require('mongoose')

app.set('case sensitive routing', true);

// var corsOptions = { // CORS 옵션 
//     origin: 'http://localhost:3000', 
//     credentials: true 
// }

app.use(cors())
app.use(express.json()) // 요청본문 파싱(request body 파싱)
app.use(logger('tiny'))

const CONNECT_URL = 'mongodb://localhost:27017/syleemomo'

mongoose.connect(CONNECT_URL, { // Mongo DB 서버 연결 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => console.log("mongodb connected ...")) 
.catch(e => console.log(`failed to connect mongodb: ${e}`))


app.get('/hello', (req, res) => {
    res.render("index")
})

app.use( (err, req, res, next) => { // 서버 내부 오류 처리 
    console.error(err.stack) 
    res.status(500).send("something is broken on server !") 
})


app.use( (req, res, next) => { 
    res.status(404).send("this is page you see when page don't exist") 
    // 404 페이지 전달 
})



app.listen(5000, () => {
    console.log("server is running on port 5000! - nodemon")
})

