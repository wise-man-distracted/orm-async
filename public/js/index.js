const validaCampo = (evento)=> {


    console.log(evento.target.name)
    if(evento.target.value == "") {
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
let inputEmail = document.querySelector('#registro > form input[type=email]')
let inputSenha = document.querySelector('#registro > form input[type=password]')
let inputFile = document.querySelector('#registro > form input[type=file]')

console.log(formCadastro)
inputEmail.addEventListener("blur", validaCampo)
inputSenha.addEventListener("blur", validaCampo)
inputFile.addEventListener("change", onFileChange)
inputSenha.onblur = validaCampo

formCadastro.addEventListener('submit', (e) => {
    console.log('Formulário enviado')
    e.preventDefault()
    let formData = new FormData(formCadastro)
    fetch('https://localhost:3000/api/v1/usuarios?q=4', {
        method: 'post',
        body: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    })
})















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