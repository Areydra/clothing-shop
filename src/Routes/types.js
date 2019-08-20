module.exports = (app, db, formResponse) => {
    
    //=============== ROUTE CRUD TYPES ================
    app.get('/types', (req, res) => {
        db.query('SELECT * FROM types', (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.get('/type/:id', (req, res) => {
        db.query('SELECT * FROM types WHERE id=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.post('/type', (req, res) => {
        db.query('INSERT INTO types (name) VALUES (?)', [req.body.name], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.patch('/type/:id/update', (req, res) => {
        db.query('UPDATE types SET name=? WHERE id=?', [req.body.name, req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
    app.delete('/type/:id/delete', (req, res) => {
        db.query('DELETE FROM types WHERE id=?', [req.params.id], (error, response) => {
            (error) ? console.log(error): res.json(formResponse(200, response))
        })
    })
}