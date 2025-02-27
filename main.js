/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 */

const emailListEl = document.querySelector('.email_list');
const mybtn = document.querySelector('.mybtn');

const myFunction = (() => {
    emailListEl.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => response.json())
            .then(data => {
                emailListEl.innerHTML += `<li>${data.response}</li>`

            })
    }

})

mybtn.addEventListener('click', myFunction)