/*Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.*/


// variabili
const prezzobigliettokm = 0.21
let scontominorenni = 0.80
let scontoover65 = 0.60
let prezzobiglietto;

let nome = document.getElementById('name')
let kilometri = document.getElementById('chilometri')
let anni = document.getElementById('eta')
const bottone = document.getElementById("genera")


function name(){
    document.getElementById("name").value
}

function chilometri(){
    document.getElementById("chilometri").value
}

function eta(){
    document.getElementById("eta").value
}

bottone.addEventListener("click", function() {

    dnone.classList.remove("d-none")

    let nomePasseggero = nome.value
    nomeCompilato.innerHTML = nomePasseggero 

    let carrozza = (Math.floor(Math.random()*10 ) +1)
    vagone.innerHTML = carrozza

    let codice = (Math.floor(Math.random()*100000 ))
    CP.innerHTML = codice

    
    let km = kilometri.value
    let eta = anni.value

    if ( eta < 18 ) {
        prezzobiglietto = ( prezzobigliettokm * km ) * scontominorenni
        prezzoFinale.innerHTML = `${prezzobiglietto.toFixed(2)} €`
    } else if ( eta > 65 ) {
        prezzobiglietto = ( prezzobigliettokm * km ) * scontoover65
        prezzoFinale.innerHTML = `${prezzobiglietto.toFixed(2)} €`
    } else {
        prezzobiglietto = ( prezzobigliettokm * km )
        prezzoFinale.innerHTML = `${prezzobiglietto.toFixed(2)} €`
    }
})    






/* calcoli

if ( età < 18 ) {
    prezzobiglietto = ( prezzobigliettokm * km ) * scontominorenni
    console.log ( `il prezzo del tuo biglietto è: ${prezzobiglietto}`)
} else if ( età > 65 ) {
    prezzobiglietto = ( prezzobigliettokm * km ) * scontoover65
} else {
    prezzobiglietto = ( prezzobigliettokm * km )
}*/




