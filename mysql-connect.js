require('dotenv/config')
const mysql = require('mysql')

//membuat koneksi mysql
const dbConfig = mysql.createConnection({
    host : process.env.DB_HOST || 'localhost',
    user : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || '',
    database : process.env.DB_NAME     || ''
})

//menyambungkan config diatas dengan database dengan method .connect()
dbConfig.connect(error => {
    if(error) throw error //jika error, berhentikan script lalu tampilkan error
})

module.exports = dbConfig //export dbConfig untuk digunakan dari luar file(artinya akan menjalankan yg berkaitan dengan variabel dbConfig saja)