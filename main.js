
const listaMailEl = document.querySelector('Mail')







for (let i = 0; i < 10; i++) {
    
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        console.log(data.response);    
    })
    const li = document.createElement('li');
    li.append(listaMailEl)
    listaMailEl.appendChild(li)
       
}
