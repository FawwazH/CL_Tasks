export const sendNotification = async () => {
    try {
      const response = await fetch('/notification/sendReminders', {method: 'GET'});
    }catch(err){
      console.log(err);
    }}
  