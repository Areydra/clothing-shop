const db = require('../Configs/mysql-connect')
let query = 'SELECT products.id, products.name, products.description, branchs.name as branch, types.name as categorie, products.quantitity FROM products INNER JOIN branchs ON branchs.id=products.id_branch INNER JOIN types ON types.id=products.id_type'

module.exports = {
    getProducts : () => {
        return new Promise((resolve, reject) => {
            db.query(`${query}`, (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByName : (name) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE products.name=?`, [name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    postProduct : (req) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO products SET ?', [req], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    patchProduct : (req, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE products SET ? WHERE id=?', [req, id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    deleteProduct : (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM products WHERE id=?', [id], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByBranch : (name) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE branchs.name=?`, [name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByType : (name) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE types.name=?`, [name], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsByQty : (qty) => {
        return new Promise((resolve, reject) => {
            db.query(`${query} WHERE products.quantitity=?`, [qty], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    },

    getProductsPage : (page) => {
        return new Promise((resolve, reject) => {
            let limit = 5
            let pages = (page - 1) * limit
            db.query(`${query} LIMIT ?,?`, [pages, limit], (error, response) => {
                (!error) ? resolve(response) : reject(error)
            })
        })
    }
} 