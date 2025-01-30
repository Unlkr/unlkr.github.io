document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html") // Busca o arquivo header.html
        .then(response => response.text()) // Converte para texto
        .then(data => {
            document.getElementById("header").innerHTML = data; // Insere o conteúdo no elemento div#header
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
});
