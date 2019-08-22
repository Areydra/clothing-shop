module.exports = {
    success : (res, status, response) => {
        const success = {
            status : status,
            data : response
        }
        res.json(success)
    }
}