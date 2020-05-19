// MyJavaScript
var nome = prompt("Qual é il tuo nome?");
var saluto =  "Ciao! " + nome;
var cognome = prompt("Qual e'il tuo cognome?");
var colore = prompt("Qual é il tuo colore preferito?")
var informazioniUtente = nome + cognome + colore + "19";
document.getElementById("user_info").innerHTML = informazioniUtente;
