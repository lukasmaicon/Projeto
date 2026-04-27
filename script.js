// Pegando o que vou usar do HTML
const themeBtn = document.getElementById("theme-btn");
const body = document.body;
const promoCupom = document.getElementById("promo-cupom");

// Aqui eu checo se o usuário já deixou o modo escuro ligado antes
const temaSalvo = localStorage.getItem("theme");

if (temaSalvo === "dark") {
  body.classList.add("dark-mode");
  themeBtn.textContent = "Modo Claro";
}

// Função para mudar o tema quando clicar no botão
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Atualiza o texto do botão e salva a escolha pra não perder ao dar F5
  if (body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Modo Claro";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "Modo Escuro";
    localStorage.setItem("theme", "light");
  }
});

// Faz o cupom ser copiado quando clicar no card de promoção
if (promoCupom) {
  promoCupom.addEventListener("click", () => {
    const meuCupom = "RAIZES20";

    navigator.clipboard
      .writeText(meuCupom)
      .then(() => {
        alert("Boa! Cupom " + meuCupom + " copiado. Aproveite o desconto!");
      })
      .catch((err) => {
        console.log("Deu erro ao copiar", err);
      });
  });
}

// Só um aviso básico quando der Enter na busca
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      alert("Buscando por: " + searchInput.value);
    }
  });
}
