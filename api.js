const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_react', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var HELLO = [
    {'msg': 'Hello Express'}
];

//---------------------------
function getHello(){
    return HELLO;
}

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(getHello());
});

//----------------------------

const userRouter = require('./src/routes/user-route');
const productRouter = require('./src/routes/product-route');

app.use('/user', userRouter);
app.use('/products', productRouter);

app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000');
});