var daysList = document.getElementById('birthdayDay');

for (var i = 1; i <= 31; i++) {
    var select = document.createElement("select");
    select.value = [i];
    select.text = [i];
    daysList.add(select);
}

var monthsList = document.getElementById('birthdayMonth');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i < months.length; i++) {
  var select = document.createElement("select");
  select.value = months[i];
  select.text = months[i];
  monthsList.add(select);
}

var yearsList = document.getElementById('birthdaYear');

for (var i = 1990; i <= 2017; i++) {
    var select = document.createElement("select");
    select.value = [i];
    select.text = [i];
    yearsList.add(select);
}

var userName = document.querySelector('#name');
var selectEmail = document.querySelector('#mobile');
var selectEmail = document.querySelector('#mobileAgain');
var createAccount = document.querySelector('#submitForm');

function createAccount() {
  if (selectEmail.value === selectEmail.value) {
    createAccount.innerHTML = "Gracias, " + userName.value + ", la cuenta se ha creado correctamente";
    selectEmail.style.border = "2px solid rgb(156,167,173);";
  }
  else {
    createAccount.innerHTML = "No se ha podido crear la cuenta";
    selectEmail.style.border = "1px solid red"
  }
}

var submit = document.querySelector('.button-submit');
submit.addEventListener("click", createAccount);
