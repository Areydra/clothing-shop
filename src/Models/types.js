const db = require('../Configs/mysql-connect')

module.exports = {
    getTypes : () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM types', (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getTypeById : (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM types WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    postType : (req) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO types (name) VALUES (?)', [req.name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    patchType : (req, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE types SET name=? WHERE id=?', [req.name, id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    deleteType : (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM types WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    }
}