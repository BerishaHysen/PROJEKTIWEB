// Change Form
function changeForm(form) {
   let forms = document.querySelectorAll("form>div");
   if (form == 0) {
       forms[0].classList.remove("hidden");
       forms[0].classList.add("display");
       forms[1].classList.add("hidden");
       forms[1].classList.remove("display");
   } else {
       forms[1].classList.remove("hidden");
       forms[1].classList.add("display");
       forms[0].classList.add("hidden");
       forms[0].classList.remove("display");
   }
 }
 
 const form1 = document.getElementById('button1');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 
 
 const form2 = document.getElementById('button2');
 const firstname = document.getElementById('firstname');
 const lastname = document.getElementById('lastname');
 const emaill = document.getElementById('emaill');
 const passwordd = document.getElementById('passwordd');
 const password2 = document.getElementById('password2');

 const form3 = document.getElementById('button3');
 const contactName = document.getElementById('contact-name');
 const contactEmail = document.getElementById('contact-email');
 const contactPN = document.getElementById('contact-pn');
 const message = document.getElementById('message');


 // Show input error message
 function showError(input, message) {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
 }
 
 // Show success outline
 function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
 }

  
 // Check required fields
 function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() == '') {
      // showError(input, `${getFieldName(input)} is required`);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}


 
 // Check email is valid
 function checkEmail(input) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(input.value.trim())) {
     showSuccess(input);
   } else {
     showError(input, 'Email is not valid');
   }
 }

 
 // Check input length
 function checkLength(input, min, max) {
   if (input.value.length < min) {
     showError(
       input,
       `${getFieldName(input)} must be at least ${min} characters`
     );
   } else if (input.value.length > max) {
     showError(
       input,
       `${getFieldName(input)} must be less than ${max} characters`
     );
   } else {
     showSuccess(input);
   }
 }
 
 function checkLengthForPassword(input, min, max) {
   if (input.value.length < min) {
     showError(
       input,
       `Password must be at least ${min} characters`
     );
   } else if (input.value.length > max) {
     showError(
       input,
       `Password must be less than ${max} characters`
     );
   } else {
     showSuccess(input);
   }
 }

 
 // Check passwords match
 function checkPasswordsMatch(input1, input2) {
   if (input1.value !== input2.value) {
     showError(input2, 'Passwords do not match');
   }
 }
 
 // Get fieldname
 function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }


function myFunction(){
    event.preventDefault();
    checkRequired([email, password]);
    checkEmail(email);
    checkLength(password, 6, 25);
}

function myFunction2(){
    event.preventDefault();
    checkRequired([firstname, lastname, emaill, passwordd, passwordConfirm]);
    checkLength(firstname, 3, 15);
    checkLength(lastname, 3, 15);
    checkLengthForPassword(passwordd, 6, 25);
    checkEmail(emaill);
    checkPasswordsMatch(passwordd, passwordConfirm);
}

function myFunction3(){
  event.preventDefault();
  checkRequired[contactName, contactEmail, contactPN, message];
  checkLength(contactName, 3, 15);
  checkEmail(contactEmail);
  checkLength(contactPN, 10, 20);
  checkLength(message, 20, 40);
}
 
 
 // const asd
 function goBack(){
   window.history.back();
 }
 