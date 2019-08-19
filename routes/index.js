const db        = require('../mysql-connect') //import file mysql-connect.js
const types     = require('./types') //import file types.js
const branchs   = require('./branchs') //import file branchs.js
const products  = require('./products') //import file products.js

//function hanya untuk mengembalikan data berupa objek yg isinya status dan data response
function formResponse(status, response){
    return {
        status : status,
        data : response
    }
}

module.exports = (app) => {
    types(app, db, formResponse) //menambahkan routes types
    branchs(app, db, formResponse) //menambahkan routes branchs
    products(app, db, formResponse) //menambahkan routes products
} 