// Localizar Elemento do Html
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');

// Criar Variáveis
const novoNome = "Tomás"
const novoSobrenome = "Ferreira"
const novoEmail = "Tomás.Ferreira@hotmail.com"
const novoTelefone = "+351 938-269-875"
const novoIdade = "28"
const novoSexo = "Masculino"

// Atribuir Valores ao Html com os Valores
// Das Nossas Variáveis
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novoIdade
sexo.innerText = novoSexo 