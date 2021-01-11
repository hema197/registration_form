"use strict";

const cancel=document.getElementById("cancel");
const submit=document.getElementById("submit");
const fName=document.getElementById("first");
const lName=document.getElementById("last");
const mail=document.getElementById("mail");
const contact=document.getElementById("contact");
const address=document.getElementById("address");
const gender=document.myform.gender;

cancel.addEventListener("click",function(){
     location.reload();
 });

function formValidation(){
    if(fName.value==""){
        window.alert("First name is required!");
        fName.focus();
        return false;
    }  
    if(lName.value==""){
        window.alert("Last name is required!");
        lName.focus();
        return false;
    }
    if(mail.value==""){
        window.alert("mail is required!");
        mail.focus();
        return false;
    }
    if(gender.value==""){
        window.alert("gender is required!");
        return false;
    }
    if(address.value==""){
        window.alert("address is required!");
        address.focus();
        return false;
    }
    if(contact.value==""){
        window.alert("contact no is required!");
        contact.focus();
        return  false;
    }
    return true;
}

function checkValidation(){
    if(fName.validity.typeMismatch || fName.validity.patternMismatch){
        fName.setCustomValidity("Please enter a valid first name");
        fName.focus();      
    }
    else{
        fName.setCustomValidity("");     
    }

   if(lName.validity.typeMismatch || lName.validity.patternMismatch){
       lName.setCustomValidity("Please enter a valid last name");
       lName.focus();     
    }
   else{
       lName.setCustomValidity("");     
    }
   if(mail.validity.typeMismatch){
       mail.setCustomValidity("Please enter a valid email address");
       mail.focus();
    }
    else{
        mail.setCustomValidity("");
        
    }

    if(contact.validity.typeMismatch || contact.validity.patternMismatch){
        contact.setCustomValidity("Please provide a valid contact number containing 10 digits, not starting with 0.");
        contact.focus();
           
    }
    else{
        contact.setCustomValidity("");
        
    }
}

    



    

