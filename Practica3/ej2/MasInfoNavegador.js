document.getElementsByTagName("p")[0].innerHTML = "<p>Versión: ";
document.getElementsByTagName("p")[0].innerHTML += navegador.version;
document.getElementsByTagName("p")[0].innerHTML += "</p>";

document.getElementsByTagName("p")[0].innerHTML += "<p>Plataforma: ";
document.getElementsByTagName("p")[0].innerHTML += navegador.plataforma;
document.getElementsByTagName("p")[0].innerHTML += "</p>";

document.getElementsByTagName("p")[0].innerHTML += "<p>Vendedor: ";
document.getElementsByTagName("p")[0].innerHTML += navegador.vendedor;
document.getElementsByTagName("p")[0].innerHTML += "</p>";

document.getElementsByTagName("p")[0].innerHTML += "<p>Agente: ";
document.getElementsByTagName("p")[0].innerHTML += navegador.agente;
document.write("</p>");

document.getElementsByTagName("p")[0].innerHTML += "<p>Java: ";
document.getElementsByTagName("p")[0].innerHTML += navegador.java;
document.getElementsByTagName("p")[0].innerHTML += "</p>";
