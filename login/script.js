const form = document.querySelector('.login-form'); //Seleciona o formulário de login
const usuarioInput = form.querySelector("input[type='text']"); //seleciona o campo de entrada do usuário
//Dessa forma indentificamos a tag pelo tipo de input dela, usamos o form ao ínves do documento para indicar onde o código deve proucurar esse input
const senhaInput = form.querySelector("input[type='password']"); // SEleciona o campo de entrada da senha

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const usuario = usuarioInput.value.trim()
    const senha = senhaInput.value.trim()

    if(usuario === '' || senha === '') {
        alert("Por favor, preencha os campos")
    } else if (usuario === 'usuario' && senha === 'senha') {
        alert("Bem Vindo!")
        location.replace("/tarefa/index.html", ("_self"))
    } else {
        alert("Usuário ou senha incorreto, tente novamente")
    }


})
