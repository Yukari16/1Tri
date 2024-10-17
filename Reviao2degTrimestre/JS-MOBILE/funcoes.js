/**
 * Funções são blocos que podem ser reutilizados
 * funções podem ou não receber parametros
 * funções podem retornar valores ou não
 * funções podem ser anonimas
 */
// declaração de função
function diz0la() {
  alert('Olá');
}
function olaPessoa(nome) {
  alert('Olá ' + nome);
}

const nome = 'Alex '
const sobrenome = 'Silva '
const idade = 24

function dadosPessoais() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}

// invocação de função
diz0la();
olaPessoa('Lucia');
dadosPessoais()