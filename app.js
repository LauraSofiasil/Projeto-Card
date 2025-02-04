'use strict'

const cidades = [
    {nome: "Jandira", cor: 'yellow', icon: 'jandira.png'},
    {nome: "Barueri", cor: 'purple', icon: 'barueri.png'},
    {nome: "Osasco", cor: 'red', icon: 'osasco.png'},
    {nome: "Itapevi", cor: 'aqua', icon: 'itapevi.png'}
]

function criarMenu(cidade) {
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./img/${cidade.icon}`

    novoLink.href = "#"
    novoLink.textContent = cidade.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)


}

cidades.forEach(criarMenu)