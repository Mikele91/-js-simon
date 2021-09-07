// Un alert() espone 5 numeri generati casualmente.
function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min +1)+min);;
}


var numeriCasuali = [];

while(numeriCasuali.length< 5){
    var numeroGenerato = randomNumber(1, 100)
    if(!numeriCasuali.includes(numeroGenerato)){
        
        numeriCasuali.push(numeroGenerato);
    }
    
}
alert(numeriCasuali);
var secondi = 30; 


var numeriUtente =[];
var numeriCorretti =[];
var checkNum= 0;
clock = setInterval(function() {
    if(secondi == -1){
        clearInterval(clock);
        for(i= 0; i<5; i++){
            numeriUtente.push(parseInt(prompt("inserisci i numeri visualizzati")))
            console.log(numeriUtente);
        }
        for(i= 0; i<5; i++){
            console.log(numeriUtente[i]);
            if(numeriCasuali.includes(numeriUtente[i])&& !numeriCorretti.includes(numeriUtente[i])){
                checkNum++;
                numeriCorretti.push(numeriUtente[i]);
            
            }
        }
        if(checkNum == 5){
            alert ("hai vinto");
        }else{
            alert( "hai perso");
        }
        console.log("numeri casuali", numeriCasuali);
        console.log(" numeri corretti", numeriCorretti);
        console.log("check",checkNum);
    }
    console.log(secondi);
    secondi--;
    
}, 1000
);



// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

