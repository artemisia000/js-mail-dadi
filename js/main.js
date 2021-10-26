

const list = ['emailOne', 'emailTwo' , 'emailThree'];

const email = parseInt(prompt(`Inserisci la tu email`));
console.log(`inserimento`);

list[1] = 'emailOne';
console.log(`list-1`);

document.getElementById(`result`).innerHTML = 'La tu mail è emailOne';