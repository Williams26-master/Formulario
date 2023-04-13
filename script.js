let btn = document.getElementById('btn')
let div = document.getElementById('content')
let nome = document.getElementById('nome')
let idade = document.getElementById('idade')

function cadastro() {
    console.log(nome.value)
    console.log(idade.value)
    div.innerHTML = `O nome digitado foi ${nome.value} e a idade é ${idade.value}`
}

btn.addEventListener('click', cadastro)