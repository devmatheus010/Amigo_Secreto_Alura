
document.addEventListener("DOMContentLoaded", function () {

    window.amigos = [];


    window.adicionarAmigo = function () {
        const input = document.getElementById("amigo");
        const nome = input.value.trim();

        if (nome === "") {
            alert("Por favor, digite um nome válido!");
            return;
        }

        window.amigos.push(nome);
        input.value = "";
        renderLista();
    };


    function renderLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        window.amigos.forEach((nome, index) => {
            const li = document.createElement("li");
            li.textContent = nome;

            const btnRemover = document.createElement("button");
            btnRemover.textContent = "❌";
            btnRemover.style.marginLeft = "8px";
            btnRemover.onclick = function () {
                window.amigos.splice(index, 1);
                renderLista();
            };

            li.appendChild(btnRemover);
            lista.appendChild(li);
        });
    }

    // Função global para sortear amigo
    window.sortearAmigo = function () {
        if (window.amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear!");
            return;
        }

        const sorteado = window.amigos[Math.floor(Math.random() * window.amigos.length)];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${sorteado}</strong></li>`;
    };
});
