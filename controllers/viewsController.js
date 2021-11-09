const Task = require('../models/TaskModel');

exports.getLandingPage = (req, res, next) => {
    res.status(200).render('landingPage');
};

exports.getCreatePage = (req, res, next) => {
    res.status(200).render('createTask');

}

exports.getEditPage = async (req, res) => {

    const [task] =  await Task.find(req.params);


    res.status(200).render('edit', {
        task : task
    });
};




exports.getNotificationPage = async (req, res) => {

    res.status(200).render('notification');
};

