document.addEventListener("DOMContentLoaded", function () {
  alert("🔐 A senha padrão é: 123456");

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const padraoEmail = /^[\w]+\.[\w]+@gmail\.com$/;
    const senhaCorreta = "123456";

    const mensagem = document.getElementById("mensagem");

    if (padraoEmail.test(email) && senha === senhaCorreta) {
      mensagem.style.color = "green";
      mensagem.textContent = "✅ Acesso liberado!";

      setTimeout(() => {
        window.location.href = "cassino.html";
      }, 1000);
    } else {
      mensagem.style.color = "red";
      mensagem.textContent = "❌ E-mail ou senha inválidos.";
    }
  });
});
