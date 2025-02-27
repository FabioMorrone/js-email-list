
const lista_MailEl = document.querySelector('.lista_Mail')







for (let i = 0; i < 10; i++) {
    
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        console.log(data.response);    

        const li = document.createElement('li');
        lista_MailEl.appendChild(li)
        
        li.innerHTML = data.response

    })



}

