const db = require('../Configs/mysql-connect')

module.exports = {
    getBranchs : () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM branchs', (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    },

    getBranchsById : (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM branchs WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    postBranch: (req) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO branchs (name) VALUES (?)', [req.name], (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    },

    patchBranch: (req, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE branchs SET name=? WHERE id=?', [req.name, id], (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    },

    deleteBranch: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM branchs WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response): reject(error)
            })
        })
    }
}