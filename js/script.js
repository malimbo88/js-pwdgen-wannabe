// MyJavaScript
var nome = prompt("Qual e'il tuo nome?");
var cognome = prompt("E il tuo cognome?");
var colore = prompt("Qual e'il tuo colore preferito?");
var eta = prompt("Quanti anni hai?")
var annoDiNascita = 2020 - eta;
var informazioniUtente = "Ciao! " + nome + " " + cognome + " " + "Classe" + " " + annoDiNascita + " " + colore + " " + "19";
console.log(informazioniUtente);
document.getElementById("user_info").innerHTML = informazioniUtente;
