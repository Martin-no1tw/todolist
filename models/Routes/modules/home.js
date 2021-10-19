const express = require('express')
const router = express.router()

const Todo = require('../../models/todo')
router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ id: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

module.exports = router