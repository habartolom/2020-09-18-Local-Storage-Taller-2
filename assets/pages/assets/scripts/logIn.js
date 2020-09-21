const formLogIn = document.getElementById('formLogIn');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const emailHelp = document.getElementById('emailHelp');
const passHelp = document.getElementById('passHelp');

/* Events */
formLogIn.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(inputsOK()){
        validateInfo();
    }
});

inputEmail.addEventListener('input', ()=>{
    emailHelp.innerText = '';
});

inputPassword.addEventListener('input', ()=>{
    passHelp.innerText = '';
});


/* Verify Inputs Info*/
const inputsOK = ()=>{
    let rightInfo = true;

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

/* verify info entered */
const validateInfo = ()=>{
    const email = inputEmail.value;
    const password = inputPassword.value;

    const logUser = {
        email: email,
        password: password
    }

    if(infoOK(logUser)){
        redirect();
    }
    else{
        alert('Los datos ingresados no son correctos. Pruebe nuevamente');
    }
}

const infoOK = (logUser)=>{
    const users = JSON.parse(localStorage.getItem('users'));
    
    for(let i = 0; i < users.length; i++){
        if((users[i].email == logUser.email) && (users[i].password == logUser.password)){
            const userSessionToJSONString = JSON.stringify(users[i]);
            localStorage.setItem('userSession', userSessionToJSONString);
            return true;
        }               
    }
    return false;
};


/* Redirect other Page */
const redirect = ()=>{
    location.href = './toDo.html';
}