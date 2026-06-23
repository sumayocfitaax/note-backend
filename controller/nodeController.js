const nodeModel = require('../model/nodeScheme')

const createNote = async (req, res) =>{
  try {
    const addNote = nodeModel(req.body)
    const saveNote = addNote.save()
    if(saveNote){
      res.json({success:true, message: 'note added successfully'})
    }
    
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
  }
}

const getNote = async (req, res) =>{
  try {
    const result = await nodeModel.find()
    res.json(result)
    
  } catch (error) {
    console.log(error);
    res.json({
      success:false, 
      message: error.message
    })
  }
}

const deleteNote = async (req, res) => {
  try {
    const removeNote = await nodeModel.deleteOne({
      _id: req.params._id
    })
    if(removeNote){
      res.json({success:true, message: 'note deleted successfully'})
    }
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
    
  }
}

const updateNote = async (req, res) =>{
  try{
    const updateNote = await nodeModel.updateOne({_id: req.params._id}, {$set: req.body})
    res.json({success:true, message: 'note update successfully'})
    res.json(updateNote)
  }catch (error){
    console.log(error);
    res.json({success:false, message: error.message})
  }
}

const getSingleData = async(req,res) => {
  try {
    const result = await nodeModel.findOne({_id: req.params._id})
    if(result){
      res.json(result)
    }
  } catch (error) {
    console.log(error);
    res.json({success:true, message: error.message})
  }
}


module.exports = {createNote, getNote, deleteNote, updateNote, getSingleData}