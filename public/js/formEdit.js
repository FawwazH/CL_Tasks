//Set current date
const date =  new Date().toLocaleDateString();
const dateFields = date.split('/');
const currentDate = `${dateFields[1]}/${dateFields[0]}/${dateFields[2]}`;
document.getElementById('createdDate').value = currentDate;


//Set edit page item name to read only
//document

const resetBtn = document.getElementById('reset');

if(!resetBtn){
    document.getElementById('itemTitle').readOnly = true;
}


//Clear all fields
const inputs = Array.from(document.getElementsByTagName('input'));

if(inputs.length > 0)
resetBtn.addEventListener('click', () => {
    console.log(inputs);
    inputs.forEach(el => {
        el.value = '';
    });
});
