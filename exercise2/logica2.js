function insertInput(type) {
  let body = document.getElementsByTagName("body");
  let input = document.createElement("input");
  input.id = type;
  input.setAttribute("type", "text");
  body[0].appendChild(input);
}

function insertQuestion(question, type) {
  let body = document.getElementsByTagName("body");
  let questionP = document.createElement("p");
  questionP.innerHTML += question;
  body[0].appendChild(questionP);
  insertInput(type);
}

function submitButton() {
  let body = document.getElementsByTagName("body");
  let button = document.createElement("button");
  button.innerHTML = "Enviar";
  body[0].appendChild(button);
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let language = document.querySelector("#language").value;
    messageAlert(name, age, language);
  });
}

function messageAlert(name, age, language) {
  alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);

  let value = prompt(
    `Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`
  );

  if (value == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  }
}

insertQuestion("Qual o seu nome?", "name");
insertQuestion("Quantos anos você tem?", "age");
insertQuestion(
  "Qual linguagem de programação você está estudando?",
  "language"
);
submitButton();
