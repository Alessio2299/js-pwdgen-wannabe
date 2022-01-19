let name = prompt("Qual'è il tuo nome?");

let surname = prompt("Qual'è il tuo cognome?");

let color = prompt("Qual'è il tuo colore preferito?");;

const password = name + surname + color;

document.getElementById("password").innerHTML = "La tua password è: " + password + "21";
