// Mostrar/ocultar resumo dos artigos
document.querySelectorAll('.toggle-resumo').forEach(botao => {
  botao.addEventListener('click', () => {
    const resumo = botao.nextElementSibling;
    resumo.classList.toggle('oculto');
    botao.textContent = resumo.classList.contains('oculto') ? 'Ver resumo' : 'Esconder resumo';
  });
});

// Filtro por categoria
document.getElementById('filtro').addEventListener('change', (e) => {
  const categoria = e.target.value;
  document.querySelectorAll('#lista-artigos .item').forEach(artigo => {
    const pertence = artigo.dataset.categoria === categoria || categoria === "todos";
    artigo.style.display = pertence ? "block" : "none";
  });
});

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // evita envio automático

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");

  erro.classList.add("oculto");
  sucesso.classList.add("oculto");

  // Validação básica
  if (!nome || !email || !assunto || !mensagem) {
    erro.textContent = "Por favor, preencha todos os campos.";
    erro.classList.remove("oculto");
    return;
  }

  // Validação de e-mail simples
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    erro.textContent = "Digite um e-mail válido.";
    erro.classList.remove("oculto");
    return;
  }

  // Sucesso
  sucesso.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
  sucesso.classList.remove("oculto");

  // Resetar formulário
  document.getElementById("form-contato").reset();
});
