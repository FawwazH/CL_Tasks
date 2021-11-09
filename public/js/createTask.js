
export const newTask = async (projectName, itemTitle, summary, description, responsibleFor, createdBy, createdDate, dueDate,
  emailNotification, status) => {
    const data = { projectName, itemTitle, summary, description, responsibleFor, createdBy, createdDate, dueDate,
      emailNotification, status};
  try {
    const response = await fetch('/task/createTask', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data)
    });

  }catch(err){
    console.log(err);
  }}


