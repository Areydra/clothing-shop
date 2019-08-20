module.exports = (app, db, formResponse) => {

    //=============== ROUTE CRUD PRODUCTS ================
    app.get('/products', (req, res) => {
        db.query('SELECT * FROM products', (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.get('/product/:id', (req, res) => {
        db.query('SELECT * FROM products WHERE id=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.post('/product', (req, res) => {
        db.query('INSERT INTO products (id_branch, id_type, name, description) VALUES (?,?,?,?)', [req.body.id_branch, req.body.id_type, req.body.name, req.body.description], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.patch('/product/:id/update', (req, res) => {
        db.query('UPDATE products SET ? WHERE id=?', [req.body, req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.delete('/product/:id/delete', (req, res) => {
        db.query('DELETE FROM products WHERE id=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })

    //Tampilkan produk berdasarkan branch
    app.get('/products/branch/:id', (req, res) => {
        db.query('SELECT * FROM products WHERE id_branch=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })

    //Tampilkan produk berdasarkan type
    app.get('/products/type/:id', (req, res) => {
        db.query('SELECT * FROM products WHERE id_type=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })

    //Tampilkan product sesuai pagination
    app.get('/products/page/:page', (req, res) => {
        let limit = 5
        let page = (req.params.page - 1) * limit
        db.query('SELECT * FROM products LIMIT ?, ?', [page, limit], (error, response) => {
            (error) ? console.log(error): res.send(response)
        })
    })
}