const router = require('express').Router()
const fs = require('fs')

const route = '/todolist'
router.get(route, (req, res, next) => {
    let data = JSON.parse(fs.readFileSync('./data/todos.json', 'utf8'))
    res.json({ data }).end()
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
