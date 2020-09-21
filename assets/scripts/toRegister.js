const formRegister = document.getElementById('formRegister');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const nameHelp = document.getElementById('nameHelp');
const emailHelp = document.getElementById('emailHelp');
const passHelp = document.getElementById('passHelp');

let users = [];


/*Events*/
formRegister.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(inputsOK()){
        storeInformation();
    }
});

inputName.addEventListener('input', ()=>{
    nameHelp.innerText = '';
});

inputEmail.addEventListener('input', ()=>{
    emailHelp.innerText = '';
});

inputPassword.addEventListener('input', ()=>{
    passHelp.innerText = '';
});


/*Verify Inputs*/
const inputsOK = ()=>{
    let rightInfo = true;

    if(inputName.value == ''){
        rightInfo = false;
        nameHelp.innerText = 'Ingrese su nombre completo';
    }
    
    if(inputEmail.value == ''){
        rightInfo = false;
        emailHelp.innerText = 'Ingrese un correo válido';
    }
    
    if(inputPassword.value == ''){
        rightInfo = false;
        passHelp.innerText = 'Ingrese un número de celular válido';
    }
    
    return rightInfo;
};


/* Store New User */
const storeInformation = ()=>{
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    const user = {
        name: name,
        email: email,
        password: password
    }
    cleanInputs();
    addUserToLocalStorage(user);
    redirect();
};

/* Redirect other Page */
const redirect = ()=>{
    location.href = './assets/pages/logIn.html';
}

/* Clean Inputs */
const cleanInputs = ()=>{
    inputName.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
};

/* Add User */
const addUserToLocalStorage = (user)=>{
    if(localStorage.getItem('users') != null){
        users = JSON.parse(localStorage.getItem('users'));
    }

    if(userExists(user)){
        alert('El correo electrónico ya se encuentra registrado! Por favor inicie sesión')
    }
    else{
        users.push(user);
        const usersToJSONString = JSON.stringify(users);
        localStorage.setItem('users', usersToJSONString);
    }
};

/* verify if the email user exists */
const userExists = (user)=>{
    for(let i = 0; i < users.length; i++){
        if(user.name == users[i].name)
            return true;
    }
    return false;
};