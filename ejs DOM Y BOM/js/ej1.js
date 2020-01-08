var numero = () => {
    let inputVal = document.getElementById("number").value;
    console.log(inputVal);
    let nroRandom = Math.floor(Math.random() * 11);
    console.log(nroRandom);
    if (inputVal === nroRandom) {
        alert('numero adivinado, ha ganado!')
    }
    else if (inputVal > nroRandom) {
        console.log('el numero era menor al suyo');
    }
    else {
        console.log('el numero era mayor al suyo');
    }
}

