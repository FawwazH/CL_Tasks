const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
      projectName: {
        type: String,
        required: [true, 'Please enter the project name']
      },
      itemTitle: {
        type: String,
        required: [true, 'Please enter the item title']
        
      },
      summary:{
        type: String,
        required: [true, 'Please enter the summary']

      },
      description:{
        type: String,
        required: [true, 'Please enter the description']

      },
      responsibleFor:{
        type: String,
        required: [true, 'Please enter who is responsible for item']

      },
      createdBy:{
        type: String,
        required: [true, 'Please enter who is created this item']

      },
      createdDate:{
        type: String,
        required: [true, 'Please enter the created date']
      },
      dueDate:{
        type: String,
        required: [true, 'Please enter the due date']

      },
      emailNotification:{
        type: String,
        required: [true, 'Please enter the associated emails']

      },
      status:{
        type: String,
        required: [true, 'Please select the item status']
      }
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;