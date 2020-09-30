const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRouter = require('./src/routes/user-route');
const productRouter = require('./src/routes/product-route');

mongoose.connect('mongodb://localhost:27017/curso_react', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const UserModel = require('./src/models/user');
// const ProductModel = require('./src/models/product');

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

app.use('/user', userRouter);
app.use('/products', productRouter);

app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000');
});