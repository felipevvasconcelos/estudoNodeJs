'use strict'

var USERS = [
    {'id': 1, 'username': 'felipe', 'password': '123456'},
    {'id': 2, 'username': 'leticia', 'password': '123456'},
];

function getUsers(){
    return USERS;
}

exports.get = async(req, res, next) => {
    console.log('entrou no controller');
    res.send(getUsers());
};