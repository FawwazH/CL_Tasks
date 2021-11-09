//Packages
const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');


//File Imports
const viewRouter = require('./routes/viewRoutes');
const taskRouter = require('./routes/taskRoutes');
const searchRouter = require('./routes/searchRoutes');
const editRouter = require('./routes/editRoutes');
const notificationRouter = require('./routes/notificationRoutes')


//Start express app
const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

//Setting server-side template engine
app.set('view engine', 'pug');

//Routes
app.use('/', viewRouter);
app.use('/task', taskRouter);
app.use('/search', searchRouter);
app.use('/edit', editRouter);
app.use('/notification', notificationRouter);


module.exports = app;