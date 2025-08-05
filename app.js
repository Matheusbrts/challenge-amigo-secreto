let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase())) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  const regex = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!regex.test(nome)) {
    alert("O nome deve conter apenas letras e espaços, sem números ou caracteres especiais!");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Opa! Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let numeroAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[numeroAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.textContent = "O seu amigo secreto escolhido é: " + amigoSorteado;
}
