function updatePhoneNumber(isIncrise){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrise){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1220;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice; 
}



document.getElementById('btn-phone-pluse').addEventListener('click', function(){
    newPhoneNumber= updatePhoneNumber (true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
   
})

document.getElementById('btn-phone-minuse').addEventListener('click', function(){
    newPhoneNumber= updatePhoneNumber (false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})