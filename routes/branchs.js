module.exports = (app, db, formResponse) => {
    
    //=============== ROUTE CRUD BRANCHS ================
    app.get('/branchs', (req, res) => {
        db.query('SELECT * FROM branchs', (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.get('/branch/:id', (req, res) => {
        db.query('SELECT * FROM branchs WHERE id=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.post('/branch', (req, res) => {
        db.query('INSERT INTO branchs (name) VALUES (?)', [req.body.name], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.patch('/branch/:id/update', (req, res) => {
        db.query('UPDATE branchs SET name=? WHERE id=?', [req.body.name, req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.delete('/branch/:id/delete', (req, res) => {
        db.query('DELETE FROM branchs WHERE id=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
}