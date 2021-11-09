export const updateTask = async (data) => {
    try {
      const response = await fetch('/edit/:itemTitle', {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    }catch(err){
      console.log(err);
}};