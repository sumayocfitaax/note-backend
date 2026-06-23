const express = require('express')
const {createNote, getNote, deleteNote, updateNote, getSingleData} = require('../controller/nodeController')
const router = express.Router()


router.post('/addNote', createNote)
router.get('/getResult', getNote)
router.delete('/removeNote/:_id', deleteNote)
router.put('/updateNote/:_id', updateNote)
router.get('/singleNote/:_id', getSingleData)
module.exports = router