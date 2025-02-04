'use strict'

const cidades = [
    {nome: "Jandira", cor: 'yellow', icon: 'jandira.png'},
    {nome: "Barueri", cor: 'purple', icon: 'barueri.png'},
    {nome: "Osasco", cor: 'red', icon: 'osasco.png'},
    {nome: "Itapevi", cor: 'aqua', icon: 'itapevi.png'}
]

const blocos = [
    {nome: "Jandira", cor: 'gray', icon: 'mcdonalds.png', descricao: 'Com dois andares, o primeiro McDonalds de Jandira representa um dos modernos projetos tecnológicos da rede e uma diversificação maior de serviços, o que atende de forma mais completa as necessidades dos clientes.'},
    {nome: "Itapevi", cor: 'gray', icon: 'parque.jpg', descricao: 'O primeiro parque municipal da história de Itapevi está localizado ao lado do Estádio Municipal, numa área com 110 mil m². O local oferece pista para caminhada e ciclovia, bicicletário, academia ao ar livre, playground e praças de skate e patins.'},
    {nome: "Barueri", cor: 'gray', icon: 'tambore.webp', descricao: 'Em um espaço com mais de 52 mil m² de área construída, seus visitantes encontram um completo mix de lojas, marcas renomadas, serviços de qualidade e diferentes opções gastronômicas e de lazer para todas as idades.'},
    {nome: "Osasco", cor: 'gray', icon: 'calcadao.jpg', descricao: 'Se você precisa ir às compras sem gastar muito, o melhor lugar é o Calçadão. O local lembra a rua 25 de Março, famoso centro de comércio popular paulistano, mas em menor proporção. '}
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

function criarMain(blocos){
    const novoBloco = document.createElement('div') 
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h1')
    const novoTexto = document.createElement('p')
    const quadrados = document.getElementById('quadrados')

    novaImagem.src = `./img/${blocos.icon}`

    novoTitulo.textContent = blocos.nome

    novoTexto.textContent = blocos.descricao

    novoBloco.appendChild(novaImagem)
    novoBloco.appendChild(novoTitulo)
    novoBloco.appendChild(novoTexto)

    quadrados.appendChild(novoBloco)

}

blocos.forEach(criarMain)


cidades.forEach(criarMenu)