const contactsListEl = document.querySelector('#contactsList')
const nameInput = document.querySelector('#name')
const surnameInput = document.querySelector('#surname')
const phoneInput = document.querySelector('#phone')
const addContactBtn = document.querySelector('#addContactBtn')

addContactBtn.addEventListener('click', onAddContactBtnClick)

function onAddContactBtnClick(){
    if(!validateForm()){
        return;
    }
    const newContact = getValues();
    addContact(newContact);
    reset();
}
function validateForm(){
    resetVal();
    if(nameInput.value === ''){
        nameInput.classList.add('invalid-input')
        return false;
    }
    if(surnameInput.value === ''){
        surnameInput.classList.add('invalid-input')
        return false;
    }
    if(phoneInput.value === ''){
        phoneInput.classList.add('invalid-input')
        return false;
    }
    return true;
}
function resetVal(){
    nameInput.classList.remove('invalid-input')
    surnameInput.classList.remove('invalid-input')
    phoneInput.classList.remove('invalid-input')
}

function getValues(){
    return{
        name:nameInput.value,
        surname:surnameInput.value,
        phone:phoneInput.value,
    };
}
function addContact(contact){
    const contactEl = generateContactElement(contact)
    contactsListEl.append(contactEl);
}
function generateContactElement({name, surname, phone}){
    const trEl = document.createElement('tr');
    trEl.append(generateCell(name));
    trEl.append(generateCell(surname));
    trEl.append(generateCell(phone));
    return trEl;
}
function generateCell(value){
    const tdEl = document.createElement('td');
    tdEl.textContent = value;
    return tdEl;
}
function reset(){
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
}
