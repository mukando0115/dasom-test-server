const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors()); //모든 접근 허용
app.use(cors({ origin: 'http://localhost:3000'}));  //특정 접근 허용
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello, express!!!");
    console.log('get connect', req.data);
});

app.post('/login', (req, res) => {
    console.log('로그인 정보', req.body);
    res.send(res.data);
});

app.post('/signUp', (req, res) => {
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const user_birthdate = new Date(req.body.user_birthDate)+koreaTimeDiff;
     
    console.log('회원가입 정보', req.body);
    console.log('보간된 시간', user_birthdate);
    res.send(res.data);
});

app.get(`/signUp/:userId`, (req, res) => {
    let userId = req.params;
    console.log(userId);
    //쿼리 부분
    res.send(false);
})

app.listen(port, ()=> {
    console.log(`${port}에서 대기중~~~`);
});