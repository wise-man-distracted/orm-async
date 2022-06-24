const validaCampo = (evento) => {


    console.log(evento.target.name)
    if (evento.target.value == "") {
        evento.target.style.outline = "2px solid white"
        evento.target.setAttribute('placeholder', `Preencha o campo ${evento.target.name}`)
    } else {
        evento.target.style.outline = "2px solid black"
        evento.target.setAttribute('placeholder', '')

    }
}
const onFileChange = evento => {
    let img = document.getElementById('output')
    img.src = URL.createObjectURL(evento.target.files[0])
}
let formCadastro = document.querySelector('#formCadastro')
let inputNome = document.getElementById('nome')
let inputEmail = document.querySelector('#registro > form input[type=email]')
let inputSenha = document.querySelector('#registro > form input[type=password]')
let inputConfirm = document.querySelector('#registro > form input[name=confirmacao]')
let inputFile = document.querySelector('#registro > form input[type=file]')
let formLogin = document.getElementById('formLogin')


console.log(formCadastro)
inputNome.addEventListener("blur", validaCampo)
inputEmail.addEventListener("blur", validaCampo)
inputSenha.addEventListener("blur", validaCampo)
inputFile.addEventListener("change", onFileChange)

formLogin.addEventListener('submit', onFormLoginSubmit)

function onFormLoginSubmit(e){
    e.preventDefault()
    login()
}

async function login(){
    let email = document.getElementById('login-email').value
    let senha = document.getElementById('login-senha').value

    let response = await fetch(
        'http://localhost:3000/api/v1/usuarios/login',
        {
            method:'POST',
            body: JSON.stringify({email, senha}),
            headers: {
                'Content-Type':'application/json'
            }
        }
    )
}


formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log('Formulário enviado')

    let reqBody = {
        nome: inputNome.value,
        email: inputEmail.value,
        senha: inputSenha.value,
    }

    let formData = new FormData(formCadastro)

    let response = await fetch('http://localhost:3000/api/v1/usuarios', {
        method: 'POST',
        body: formData,
        headers: {
            'cfontent-type': 'multipart/form-data'
        }
    })
    if (response.status == 409) {
        alert("Usuário já cadstrado")
    }
    if (response.status == 500) {
        alert("Erro. Tente novamente mais tarde.")
    }
    if (response.status == 201) {
        // alert("Registrado com sucesso... mudar tela interna")
        let usuario = await response.json()
        mostrarApp(usuario)
    }
    let usuario = await response.json();
    console.log(usuario);
})

const mostrarApp = (usuario) => {

    document.getElementById("registro").style.display = 'none'
    document.getElementById("app").style.display = 'block'
    document.getElementById("app-nome").innerText = usuario.nome

    let aEmail = document.getElementById('app-email')
    aEmail.innerText = usuario.email
    aEmail.setAttribute('href', `mailto:${usuario.email}`)

    let imgAvatar = document.getElementById('app-avatar')
    imgAvatar.setAttribute('alt', `Foto de ${usuario.nome}`)
    imgAvatar.setAttribute('src', `img/avatares/${usuario.foto}`)
    console.log(usuario)
}














let listaDeAmigos = document.getElementById('listaDeAmigos');
let amigos = [{
    id: 1,
    nome: "Wendel Cutrim",
    email: "wendel@digitalhouse.com",
    foto: `http://lorempixel.com.br/500/500/?1`
}, {
    id: 2,
    nome: "Sérgio Moura",
    email: "ssiqueira@digitalhouse.com",
    foto: `http://lorempixel.com.br/500/500/?2`
}, {
    id: 3,
    nome: "Silvia Fiacador",
    email: "silvia@digitalhouse.com",
    foto: `http://lorempixel.com.br/500/500/?3`
}]
console.log(listaDeAmigos);
console.log(document.querySelectorAll('#listaDeAmigos > article'))

let string = ""
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article>
          <img src="${amigo.foto}" alt="${amigo.nome}">
          <span>${amigo.nome}</span>
          <a href="${amigo.email}">${amigo.email}</a>
    </article>
    `
}

listaDeAmigos.innerHTML = string