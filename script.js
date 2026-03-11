// ===============================
// SCRIPT DA LANDING PAGE
// Clínica Sorriso Prime
// ===============================

// Espera o HTML carregar antes de rodar o JS
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // 1️⃣ Scroll suave para o formulário
    // ===============================

    const botoesAgendamento = document.querySelectorAll(".btn-hero");
    const formulario = document.querySelector("form");

    botoesAgendamento.forEach(botao => {
        botao.addEventListener("click", function (event) {
            event.preventDefault();

            formulario.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // ===============================
    // 2️⃣ Validação do formulário
    // ===============================

    const form = document.querySelector("form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const servico = document.getElementById("serviços");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede envio automático

        // Verifica se algum campo está vazio
        if (
            nome.value === "" ||
            email.value === "" ||
            telefone.value === "" ||
            servico.value === "" ||
            mensagem.value === ""
        ) {
            mostrarMensagem("Por favor, preencha todos os campos.", "erro");
            return;
        }

        // Se passar na validação
        mostrarMensagem("Solicitação enviada com sucesso! Entraremos em contato.", "sucesso");

        // Limpa o formulário
        form.reset();
    });

    // ===============================
    // 3️⃣ Mensagem visual de feedback
    // ===============================

    function mostrarMensagem(texto, tipo) {
        let mensagemDiv = document.querySelector(".mensagem-feedback");

        // Cria a div se ainda não existir
        if (!mensagemDiv) {
            mensagemDiv = document.createElement("div");
            mensagemDiv.classList.add("mensagem-feedback");
            form.appendChild(mensagemDiv);
        }

        mensagemDiv.textContent = texto;

        if (tipo === "erro") {
            mensagemDiv.style.color = "white";
            mensagemDiv.style.backgroundColor = "red";
        } else {
            mensagemDiv.style.color = "white";
            mensagemDiv.style.backgroundColor = "green";
        }

        mensagemDiv.style.padding = "10px";
        mensagemDiv.style.marginTop = "15px";
        mensagemDiv.style.borderRadius = "8px";
        mensagemDiv.style.textAlign = "center";
    }

    // ===============================
    // 4️⃣ Botão WhatsApp com mensagem automática
    // ===============================

    const botoesWhats = document.querySelectorAll('a[href*="wa.me"]');

    botoesWhats.forEach(botao => {
        botao.addEventListener("click", function () {
            const mensagemWhats = encodeURIComponent(
                "Olá! Gostaria de agendar uma avaliação na Clínica Sorriso Prime."
            );

            this.href = `https://wa.me/5511961104153?text=${mensagemWhats}`;
        });
    });
});
