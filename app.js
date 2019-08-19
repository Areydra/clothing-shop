require('dotenv/config') //memanggil package dotenv(agar bisa menggunakan file .env) yg langsung ke bagian config
const express       = require('express') //memanggil package express js untuk server nya
const logger        = require('morgan') //morgan = package untuk menampilkan log di dalam terminal(pakai saat mode developer saja)
const bodyParser    = require('body-parser') //untuk mengambil data dari form / postman
const router        = require('./routes/index') //router/index.js adalah perkumpulan dari beberapa file route

const app       = express()
const port      = process.env.PORT || 8080 //Gunakan port dari file .env jika tidak ada gunakan 8080
const nodeEnv   = process.env.NODE_ENV || 'production'

app.listen(port, () => {
    console.log(`Server running in mode ${nodeEnv} on port ${port}`)
})

//app.use berfungsi untuk menggunakan package/fungsi tertentu kedalam express
app.use(logger('dev')) //menampilkan logger diterminal setiap kali menjalankan function
app.use(bodyParser.json()) //menggunakan tipe json dalam bodyParser
app.use(bodyParser.urlencoded({extended : false})) //false hanya bisa memberi tipe string/array jika true digunakan untuk menggunakan nested object

router(app) //menjalankan router dengan paramete app(express)