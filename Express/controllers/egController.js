
exports.getRoute=async(req,res)=>{
    const todoList = await Todo.find();
    res.json(todoList)
}
exports.getByIdRoute=async(req,res)=>{
    const Task = await Todo.findById(req.params.id)
    res.json(Task)
}
exports.postRoute =async(req,res)=>{
    const {name,message}=req.body
    const exist =await Todo.findOne({name});
    if(exist) return res.status(404).json({
        message:"Task Already exist",
})
    const newTask = new Todo({name,message})
    await newTask.save();
    res.status(201).json({
        message:"Task Added sucessfully",
        task:newTask
    })
}
exports.putRoute =async(req,res)=>{
    const update= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update){
        return res.status(404).send('id not found')
    }
    res.status(201).send(update)
}


exports.deleteRoute =async(req,res)=>{
    const deleteById= await Todo.findByIdAndDelete(req.params.id)
    res.status(201).send('ID deleted')
}