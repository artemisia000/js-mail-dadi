//exercise email

const list = ['emailOne', 'emailTwo' , 'emailThree'];

const email = parseInt(prompt(`Inserisci la tu email`));
console.log(`inserimento`);

list[1] = 'emailOne';
console.log(`list-1`);

document.getElementById(`result`).innerHTML = 'La tua mail è emailOne';


//exercise dadi


//genera numero random



function casuale() {
    num_pc = Math.floor(Math.random() * 6) + 1;
    document.getElementById("rand").innerHTML ="Your number is " + num_pc;
    console.log(`result`);
}

function casuale() {
    num_per = Math.floor(Math.random() * 6) + 1;
    document.getElementById("rand").innerHTML ="Your number is " + num_per;
    console.log(`result`);
}

const rand1 = 'num_pc';
const rand2 = 'num_per';

if (rand1 < rand2){
    console.log(`vince il giocatore`);
}

else if( rand2 < rand1){
    console.log(`vince il pc`);
}













