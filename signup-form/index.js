let first = document.getElementById('firstname');
let last = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('form-submit');


submit.addEventListener('submit', (e)=>{
 let val1 = first.value;
 let val2 = last.value;
 let val3 = email.value;
 let val4 = password.value;
  if(val1 === ''){
    alert('fuck');
  }    
  e.preventDefault();
})