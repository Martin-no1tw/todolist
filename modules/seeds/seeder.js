const mongoose = require('mongoose')
const Todo = require('../todo')

mongoose.connect('mongodb://localhost/todolist')

const db = mongoose.connection

db.on('error', () => {
  console.lot('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')


  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done.')
})