/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 */

const emailListEl = document.querySelector('.email_list');



for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
        
        emailListEl.innerHTML += `<li>${data.response}</li>`

        })
}