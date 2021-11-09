import { newTask } from "./createTask.js";
import { updateTask } from "./updateTask.js";
import { sendNotification } from "./sendNotification.js";

const createBtn = document.getElementById('createBtn');
const searchBtn = document.getElementById('searchBtn');
const updateBtn = document.getElementById('updateBtn');
const notificationBtn = document.getElementById('notification-btn');



if(createBtn)
createBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const values = Array.from(document.querySelectorAll('.form-control')).map(el => el.value);
    const status = document.getElementById('status').value;
    newTask(...values, status);    
});

if(searchBtn)
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //Values
    let presentIndex = [];
    let values = Array.from(document.querySelectorAll('.form-control')).map(el => el.value);
    values.forEach(el => {
        if(el !== ''){
            presentIndex.push(values.indexOf(el));
        }
    });
    //Removing values that are empty
    values = values.filter(e => String(e).trim());

    //Keys
    const labelsArr = Array.from(document.getElementsByTagName('label'));
    const labels = labelsArr.map(el => el.htmlFor);
    let updatedLabels = [];

    //Removing keys that have corresponding empty values using the presentIndex array
    presentIndex.forEach(element => {
        labels.forEach((el, i) => {
            if(labels.indexOf(el) === element){
                updatedLabels.push(el);
            }
        })
    });
    
    //Creating object from 2 arrays
    let newObj = {};
    updatedLabels.forEach((label, i) => newObj[label] = values[i]);
    
    let queryString = Object.keys(newObj).map(key => key + '=' + newObj[key]).join('&');

    //Building Query String
    const url = `${window.location.href.split('?')[0]}?${queryString}`

    document.location.href = url;

    //Optional put back field values in accordingly when page is rendered
});



if(updateBtn)
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //Values
    let values = Array.from(document.querySelectorAll('.form-control')).map(el => el.value);
    const taskStatus = document.getElementById('status').value;
    values.push(taskStatus);

    //Keys
    const labelsArr = Array.from(document.getElementsByTagName('label'));
    const labels = labelsArr.map(el => el.htmlFor);

    let newObj = {};
    labels.forEach((label, i) => newObj[label] = values[i]);

    
    updateTask(newObj);
    
});

if(notificationBtn)
notificationBtn.addEventListener('click', (e) => {
    //sendNotification();
})

