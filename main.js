// Un alert() espone 5 numeri generati casualmente.
function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min +1)+min);;
}


var numeriCasuali = [];

while(numeriCasuali.length< 5){
    var numeroGenerato = randomNumber(1, 5)
    if(!numeriCasuali.includes(numeroGenerato)){
        
        numeriCasuali.push(numeroGenerato);
    }
    
}
alert(numeriCasuali);
var secondi = 2; 


var numeriUtente =[];

clock = setInterval(function() {
    if(secondi == -1){
        clearInterval(clock);
        for(i= 0; i<5; i++){
            numeriUtente.push(parseInt(prompt("inserisci inumeri visualizzati")))
            console.log(numeriUtente);
        }
        if(numeriCasuali === numeriUtente){
        alert("hai vinto")
        }else{
            alert("hai perso")
        }
    }
    console.log(secondi);
    secondi--;
}, 1000
);
console.log(numeriCasuali);

// var newString ="";
//     for (var i = string.length - 1; i >= 0; i--) { 
//         newString += string[i]; // or newString = newString + string[i]; 
        
//     }
//     if(string == newString){
//         return  true;
//     }else{
//         return false
//     }


// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
