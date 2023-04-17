let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");
errorclasses = classes("error");
function validateform() {
    let username = id('username');
    let dateofbirth = id('dateofbirth');
    let mobilenumber = id('mobilenumber');
    let email = id('email');
    let password = id('password');
    let confirmpassword = id('confirmpassword');
    
    //name validation
    let indexofspace = username.value.indexOf(" ");
    let firstname = username.value.substring(0,indexofspace);
    let lastname = username.value.substring(indexofspace+1, username.length);
    if(firstname.length<2) {
        displayError(username, 0, 'invalid first name');
    }
    else if(lastname.length<2) {
        displayError(username, 0, 'invalid last name');
    }else {
        removeError(username, 0, '');
    }

    //date of bir validation
    let currentDate = new Date();
    let db = new Date(dateofbirth.value);
    console.log(currentDate);
    console.log(db);
    if((dateofbirth.value==null) || (dateofbirth.value == '') || (currentDate < db)) {
        displayError(dateofbirth, 1, 'invalid date of birth');
    }else {
        removeError(dateofbirth, 1, '');
    }

    //mobile validation
    let mobilenumbervalue = mobilenumber.value;
    if(mobilenumbervalue.length < 9 || mobilenumbervalue.length > 10) {
        displayError(mobilenumber, 2, 'invalid mobile number');
    }else {
        removeError(mobilenumber, 2, '');
    }

    //email validation
    let emailvalue = email.value;
    //let indexofatrate = emailvalue.indexOf("@");
    if(emailvalue.includes('@')==false || emailvalue.includes('.')==false) {
        displayError(email, 3, 'invalid email address');
    }else {
        removeError(email, 3, '');
    }

    //password validation
    let passwordvalue = password.value;
    let confirmpasswordvalue = confirmpassword.value;
    if(passwordvalue == ""){
        displayError(email, 4, 'you must enter a passord');
    }else {
        removeError(email, 4, '');
    }
    if(passwordvalue != confirmpasswordvalue) {
        displayError(email, 5, 'confirm password should match the passwrod above');
    }else if(confirmpasswordvalue == ""){
        displayError(email, 5, 'you must enter a confirm password');
    }
    else {
        removeError(email, 5, '');
    }

    return false;
}

function displayError(id, sequence, errormessage) {
    errorclasses[sequence].innerHTML = errormessage;
    id.style.border = "2px solid red";
    failureIcon[sequence].style.opacity ="1";
    successIcon[sequence].style.opacity = "0";
}

function removeError(id, sequence, errormessage) {
    errorclasses[sequence].innerHTML = errormessage;
    id.style.border = "";
    failureIcon[sequence].style.opacity ="0";
    successIcon[sequence].style.opacity = "1";
}

function navigatetogooglesignup() {
    window.open("https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp");
}

function navigatetofacebooksignup() {
    window.open("https://www.facebook.com/reg/");
}
