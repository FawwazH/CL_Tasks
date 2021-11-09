const Task = require('../models/TaskModel');
const Email = require('../utlis/email');


const factory = require('./handlerFactory');
const pastDueDate = require('./pastDueDate');

exports.createTask = factory.createOne(Task);


exports.getSearchResults = async (req, res) => {
    
    //Find the tasks in DB based on filters if any
    let tasks;
    
    if(Object.keys(req.query).length >= 1){
        tasks = await Task.find(req.query);
    }
    
    
    res.status(200).render('search', {
        tasks : tasks
      });
};

exports.updateTask = async (req, res) => {

    const newObj = {
        itemTitle: req.body.itemTitle
    }

    //Query DB and get ID based on the itemTitle
    const [task] = await Task.find(newObj);

    //Pass updated document on the body req.body
    const doc = await Task.findByIdAndUpdate(task._id, req.body);

    res.status(200).json({
        status: 'success',
        data: {
          doc : doc
        }
    });

};

exports.sendReminders = async (req, res) => {
    let dueTasks = [];

    // //MongoDB aggregation pipeline - document status is open
    const openTasks = await Task.aggregate([
        {
            $match: { status : "Open" }
        }
    ]);

    if(openTasks.length > 0){
        //Select the tasks that are passed due date and populate new array
        openTasks.forEach(el => {
            if(pastDueDate.compareDate(el.dueDate)){
                dueTasks.push(el);
            }
        })
    };

    if(dueTasks.length > 0)
    dueTasks.forEach(async (task)  => {
        await new Email(task).sendReminder();
    })

    res.status(200).json({
        status: 'success'
    }); 

};


