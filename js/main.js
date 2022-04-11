/**
 * EMAIL
 */

const mail = ['misia@libero.it','ale@libero.it','nutria@libero.it','glon@libero.it','birillo@libero.it'];
console.log(mail);
const email = document.querySelector('.email');

const userMail = prompt('Inserisci la tua mail').trim().toLowerCase();



    for(let i = 0; i < mail.length; i++){

        if(mail[i] === userMail) { 
            check = true;
            email.innerHTML += `La tua mail è ${userMail}`;
            break;
        }
        else{
            email.innerHTML += `La mail inserita: ${userMail}  NON è corretta`;
            check = false;
            break;

        }
    }
    console.log(check);


/**
 * DADI
 */

 const dadiPc = Math.floor(Math.random()* 6)+ 1;
 console.log('Dadi PC:',dadiPc);
 const dadiPlayer = Math.floor(Math.random()* 6)+ 1;
 console.log('Dadi PLAYER:',dadiPlayer);

 const result = document.querySelector('.dadi');

 if(dadiPlayer > dadiPc) {
     result.innerHTML += `Il vincitore sei tu con punteggio ${dadiPlayer}`;  
 }
 else if(dadiPlayer < dadiPc) {
     result.innerHTML += `Il vincitore è il PC con punteggio ${dadiPc}`;  

 }
 else{
     result.innerHTML += `Pareggio PC: ${dadiPc}, TU: ${dadiPlayer}`;  
 }
















