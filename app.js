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
    console.log(req.body);
    res.send(res.data);
});

app.listen(port, ()=> {
    console.log(`${port}에서 대기중~~~`);
});