'use strict'

const cidades = [
    {nome: "Marvel", cor: 'red', icon: 'marvel.png'},
    {nome: "Barbie", cor: 'pink', icon: 'barbie.png'},
    {nome: "DC", cor: 'yellow', icon: 'dc.png'},
    {nome: "Disney", cor: 'aqua', icon: 'disney.png'}
]

const blocos = [
    {nome: "Escola de Princesas", icon: 'escola de princesas.jpg', descricao: 'Blair, uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas.', preco: 'R$24,90', estrelas: '5'},
    {nome: "Princesa das Pérolas", icon: 'perolas.jpg', descricao: 'Lumina, uma sereia. Ela tem um poder mágico capaz de fazer as pérolas brilharem e dançarem.', preco: 'R$29,90', estrelas: '4'},
    {nome: "A princesa e a popstar", icon: 'popstar.jpg', descricao: 'Tori, a bondosa princesa de Meribella e sua pop star preferida Keira descobrem um segredo mágico.', preco: 'R$29,90', estrelas: '4'},
    {nome: "O natal perfeito", icon: 'natal.jpg', descricao: 'Barbie e suas irmãs estavam prontas para ir à Nova York para o Natal, mas uma grande nevasca aparece!', preco: 'R$24,90', estrelas: '3'},
]

//Criação do menu no header
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


//Criação dos cards
function criarCards(blocos){
    const novoBloco = document.createElement('div') 
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h1')
    const novoTexto = document.createElement('p')
    const novoPreco = document.createElement('h3')
    const avaliacao = document.createElement('div')
    const novoBotao = document.createElement('button')
    
    novoBloco.classList.add('novoBloco')
  
    novaImagem.src = `./img/${blocos.icon}`

    novoTitulo.textContent = blocos.nome

    novoTexto.textContent = blocos.descricao
    
    novoPreco.textContent = blocos.preco

    //Define que o máximo de estrelas que aparecerão será cinco, serão preenchidas as estrelas que correspondem a quantidade que está definida no 'blocos'
    avaliacao.innerHTML = (`${'★'.repeat(blocos.estrelas)}${'☆'.repeat(5 - blocos.estrelas)}`)
    
    novoBotao.textContent = 'Compre aqui'

    novoBloco.appendChild(novaImagem)
    novoBloco.appendChild(novoTitulo)
    novoBloco.appendChild(novoTexto)
    novoBloco.appendChild(novoPreco)
    novoBloco.appendChild(avaliacao)
    novoBloco.appendChild(novoBotao)

    quadrados.appendChild(novoBloco)

}

blocos.forEach(criarCards)


cidades.forEach(criarMenu)