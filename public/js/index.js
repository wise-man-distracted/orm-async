console.log('estoy siendo exiecutado')


let listaDeAmigos = document.getElementById('listaDeAmigos');
let amigos = [{
    id: 1,
    nome: "Wendel Cultrim",
    email: "wendel@digitalhouse.com"
}, {
    id: 2,
    nome: "Sérgio Moura",
    email: "ssiqueira@digitalhouse.com"
}, {
    id: 3,
    nome: "Silvia Fiacador",
    email: "silvia@digitalhouse.com"
}]
console.log(listaDeAmigos);

let string = ""
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article>
          <img src="img/face.jpg" alt="${amigo.nome}">
          <span>${amigo.nome}</span>
          <a href="${amigo.email}">${amigo.email}</a>
    </article>
    `
}

listaDeAmigos.innerHTML = string