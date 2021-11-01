//exercise email

const list = ['misia@libero.it', 
              'alessio@libero.it', 
               'nina@libero.it'];

const email = prompt(`Inserisci la tu email`).trim().toLowerCase();
console.log('inserimento');


let isFound = false;

for (let i = 0; i <= list.length; i++){

    if(list[i] === email){
        isFound = true;
    }
}

if (isFound){
console.log(`puoi entrare`);
}else{
    console.log(`NON puoi entrare`);
}



//exercise dadi


//genera numero random

//random giocatore
const rand1 = Math.floor(Math.random() * 6) + 1;
console.log('rand1');

//random computer
const rand2 = Math.floor(Math.random() * 6) + 1;
console.log('rand2');

if(rand1 < rand2) {
    console.log('vince il computer');
}else if(rand1 > rand2) {
    console.log('vince il giocatore');
}else(rand1 === rand2){
    console.log('pareggio');
}

















