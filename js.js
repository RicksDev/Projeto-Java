// Salvar no LocalStorage
document.getElementById('form').addEventListener('submit', function (event) {

    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var senha = document.querySelector('.password').value;
    var confirmacaoSenha = document.querySelector('.confirmartion-password').value;

    if (senha !== confirmacaoSenha || senha.length < 6) {
        alert('As senhas não coincidem ou a senha é menor que 6 caracteres');
        event.preventDefault();
        return;
    }
    var userData = {
        nome: nome,
        email: email,
        senha: senha
    };
    localStorage.setItem('userData', JSON.stringify(userData));

});


// Event Submit
document.getElementById('form').addEventListener('submit', function (event) {
    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var senha = document.querySelector('.password').value;
    var confirmacaoSenha = document.querySelector('.confirmartion-password').value;

    if (senha !== confirmacaoSenha || senha.length < 6) {
        alert('As senhas não coincidem ou a senha é menor que 6 caracteres');
        event.preventDefault();
        return;
    }
    var userData = {
        nome: nome,
        email: email,
        senha: senha
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    //Login
    document.getElementById('form').addEventListener('submit', function (event) {

        var userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.email === email && userData.senha === senha) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }

        event.preventDefault();

    });
});

window.onload = function () {
    // Obtém os dados do userData a partir do localStorage e os converte de volta para um objeto
    var userDataStored = JSON.parse(localStorage.getItem('userData'));
    console.log(userDataStored);

    // Verifica se userDataStored não é nulo
    if (userDataStored) {
        // Encontra os elementos pelo nome da classe
        var nomeElemento = document.querySelector('.name-profile');
        var emailElemento = document.querySelector('.email-profile');

        // Define o conteúdo dos elementos com os dados obtidos
        nomeElemento.innerHTML = userDataStored.nome;
        emailElemento.innerHTML = userDataStored.email;
    }
};