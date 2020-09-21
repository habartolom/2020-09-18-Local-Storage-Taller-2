const keys = document.getElementsByClassName('key');
const input = document.getElementById('input');
const userName = document.getElementById('userName');

const user = JSON.parse(localStorage.getItem('userSession'));
const name = user.name.split(' ')[0];
userName.innerText = name;

for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    key.addEventListener('click', ()=>{
        let task = input.innerHTML;
        if(key.id == 'backspace')
            task = task.substring(0, task.length-1);
        else if(key.id == 'space')
            task += ' ';
        else
            task += key.innerText;   
        input.innerHTML = task;         
    });
}
