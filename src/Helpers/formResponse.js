module.exports = {
    formResponse : (res, status, response) => {
        const formResponse = {
            status : status,
            data : response
        }
        res.json(formResponse)
    }
}