/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 */

const emailSpaceEl = document.querySelector('.email_space');
const emailListEl = document.querySelector('email_list');
const emailEl = document.querySelector('.email');



fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let i = 0; i < 10; i++) {
            emailListEl.insertAdjacentHTML('beforeend', emailEl)
        }
    })