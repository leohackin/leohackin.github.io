// Função para gerar um tempo aleatório entre 1 e 5 segundos
function getRandomTime() {
  return Math.floor(Math.random() * 15000) + 1000;
}

// Função para adicionar uma nova linha de produto à tabela
function adicionarProduto() {
  const tabela = document.querySelector('table tbody');
  const novaLinha = document.createElement('tr');

  // Cria células para o novo produto
  const produtoCell = document.createElement('td');
  produtoCell.textContent = `Produto ${tabela.rows.length + 1}`;

  const precoCell = document.createElement('td');
  precoCell.textContent = `R$ ${(Math.random() * 100).toFixed(2)}`;

  const acaoCell = document.createElement('td');
  const botao = document.createElement('button');
  botao.className = 'button';
  botao.textContent = 'Comprar';

  acaoCell.appendChild(botao);

  // Adiciona as células à nova linha
  novaLinha.appendChild(produtoCell);
  novaLinha.appendChild(precoCell);
  novaLinha.appendChild(acaoCell);

  // Adiciona a nova linha à tabela
  tabela.appendChild(novaLinha);
}

// Função para iniciar a adição de produtos em intervalos aleatórios
function iniciarAdicaoDeProdutos() {
  setInterval(adicionarProduto, getRandomTime());
}

// Inicia o processo ao carregar o script
document.addEventListener('DOMContentLoaded', iniciarAdicaoDeProdutos);
