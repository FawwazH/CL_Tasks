exports.compareDate = (dueDate) => {

    //Get current date in format yyyy-mm-dd
    const date =  new Date().toLocaleDateString();
    const dateFields = date.split('/');
    const currentDate = `${dateFields[2]}-${dateFields[1]}-${dateFields[0]}`;

    if(Date.parse(dueDate) < Date.parse(currentDate)){
        //The task has passed its due date
        return true;
    }else{
        return false;
    }    
}