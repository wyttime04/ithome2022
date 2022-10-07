const router = require('express').Router()
const fs = require('fs')
const data = require('./data/todos.json')

const route = '/todolist'
router.get(route, (req, res, next) => {
    res.json({ data })
})

router.put(route, (req, res, next) => {
    try {
        fs.writeFileSync('./data/todos.json', JSON.stringify(req.body.data), 'utf8')
        res.status(200).end()
    }
    catch (error) {
        res.json({ msg: error }).end
        throw new Error("error", error)
    }
})

module.exports = router
