let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("fullName").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<img src="image/check.png" />';
  return true;
}

function validatePhone() {
  let phoneNo = document.getElementById("phoneNo").value;

  if (phoneNo.length == 0) {
    phoneError.innerHTML = "phone no is required";
    return false;
  }
  if (phoneNo.length !== 11) {
    phoneError.innerHTML = "Phone no should be 11 digits";
    return false;
  }
  if (!phoneNo.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = '<img src="image/check.png" />';
  return true;
}

function validateEmail() {
  let email = document.getElementById("emailId").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<img src="image/check.png" />';
  return true;
}

function validateMsg() {
  let msg = document.getElementById("yourMsg").value;
  let required = 30;
  let remaining = required - msg.length;

  if (remaining > 0) {
    messageError.innerHTML = remaining + " more characters required";
    return false;
  }

  messageError.innerHTML = '<img src="image/check.png" />';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail || !validateMsg()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 4000);
    return false;
  }
  submitError.innerHTML = "Submitted successfully";
  return true;
}
