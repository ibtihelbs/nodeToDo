const Tasks = require('../models/Task')

const allTasks = async (req, res)=>{
    try {
        const task = await Tasks.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg : error})
    }
    
}

const createTask = async (req, res)=>{
    try{
        const task = await Tasks.create(req.body);
        res.status(201).json({ task })
    }catch(err){
        res.status(500).json({ msg : err})
    }
    
}

const deleteTask = async (req, res)=>{
    try {
        const {id: taskId} = req.params;
        const task = await Tasks.findOneAndDelete({_id :taskId})
        if(!task){
            return res.status(404).json({msg : "task not found"})
        }
        //res.status(200).json({task})
        res.status(200).json({task: null, status:"deleted with success"})
    } catch (error) {
       res.status(500).json({ msg : error})
    }
   // res.send('delete task')
}

const editTask = async (req, res)=>{
    try {
        const {id: taskId} = req.params;
        const task = await Tasks.findOneAndUpdate({_id: taskId}, req.body,
            {
                new: true,
                runValidators: true
            })
        if(!task){
            return res.status(404).json({msg : "task not found"})
        }
        //res.status(200).json({task})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg : error})
    }
}

const singleTask = async (req, res)=>{
    try {
        const {id: taskId} = req.params;
        const task = await Tasks.findOne({_id :taskId})
        if(!task){
            return res.status(404).json({msg : `task ${taskId} not found`})
        }
        res.status(200).json({task})
    } catch (error) {
       res.status(500).json({ msg : error})
    }
}


module.exports = {
    allTasks,
    createTask,
    deleteTask,
    editTask,
    singleTask,
};