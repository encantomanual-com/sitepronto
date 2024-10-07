

// API PARA VERIFICA CEP 

function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o endereço:', error);
            });
    } else {
        alert('Digite um CEP válido.');
    }
}

// confirmação de email e senha iguais 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

      
        const email = document.getElementById('email').value;
        const confirmarEmail = document.getElementById('confirmar-email').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;

        // Verifica se os e-mails correspondem
        if (email !== confirmarEmail) {
            alert('Os e-mails não correspondem.');
            return;
        }

        // Verifica se as senhas correspondem
        if (senha !== confirmarSenha) {
            alert('As senhas não correspondem.');
            return;
        }

      
        alert('Cadastro realizado com sucesso!');
        form.submit(); // Envia o formulário
    });
});


document.getElementById('cpf').addEventListener('input', function (e) {
    let cpf = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
    // Limita o CPF a no máximo 11 dígitos
    if (cpf.length > 11) { 
        cpf = cpf.substring(0, 11);
    }
    
    // Formata o CPF
    if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    }
    if (cpf.length > 6) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    }
    if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
    }

    e.target.value = cpf; // Atualiza o valor do campo
});


 // botão de limpa  formulario
    function limparFormulario() {
        document.getElementById("formCadastro").reset();
    }



 // telefone fixo
 function formatarTelefone(telefone) {
    // Remove tudo que não é número
    let telefoneAtual = telefone.value.replace(/\D/g, '');

    // Limita o número de caracteres a 10 dígitos (DDD + número fixo)
    if (telefoneAtual.length > 10) {
        telefoneAtual = telefoneAtual.slice(0, 10); // Corta os números que excedem 10 dígitos
    }

    // Formata o número de telefone fixo no padrão (XX) XXXX-XXXX
    telefone.value = telefoneAtual
        .replace(/^(\d{2})(\d)/g, '($1) $2')  // Adiciona os parênteses e o espaço após o DDD
        .replace(/(\d{4})(\d{1,4})$/, '$1-$2');  // Adiciona o hífen entre o número
}


// Função para formatar o telefone celular 
function formatarCelular(celular) {
    let celularAtual = celular.value.replace(/\D/g, '');

    if (celularAtual.length > 11) {
        celularAtual = celularAtual.slice(0, 11);
    }

    celular.value = celularAtual
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('formCadastro').reset();
}

    