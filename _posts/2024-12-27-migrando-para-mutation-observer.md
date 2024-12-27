---
layout: post
title:  "#devtip: esperando mudanças no DOM com Mutation Observer"
date:   2024-12-27 08:38:52 -0300
categories: dev
tags: ["programming","javascript","frontend"]
---

Aloha, :)

Manipular e interagir com o DOM (_Document Object Model - a famosa arvorezinha de elementos HTML para ser bem simplista_) é algo que fazemos bastante no dia a dia das aplicações web modernas. Ao contrário de outrora, onde fazíamos request-responses que traziam todo o conteúdo já pronto, manipular o DOM hoje é o cerne de tecnologias como React, Angular, Vue.js e uma pá de frameworks que têm um objetivo claro de trazer não apenas uma melhor experiência para o usuário, mas economizar (e por consequência, deixar mais rápido) o tráfego de informação entre cliente e servidor.

Então, é certo dizer que **escutar e manipular eventos nos elementos no DOM é o cerne de quase tudo que necessita ser interativo ou reativo na web**. No âmbito do uso dessas tecnologias, isso já vem embutido. Mas e quando não estamos utilizando-as e estamos em uma página clássica web com HTML, CSS e JS rolando solto?

#### os event listeners

Para anexar eventos, o clássico máximo é a utilização do método `addEventListener`, que consiste em anexar a um elemento do DOM um "listener" (um gatilho) que disparará uma função sempre que uma determinada ação for executada.

Por exemplo, suponha que você tem uma lista de produtos com um valor e um botão `Comprar` que é enviada já populada pelo backend. Você quer que, quando esse botão for clicado, mostre para o usuário uma mensagem. Algo como _Produto adicionado_. Vamos considerar que esses botões da listagem têm uma classe chamada `button`.

No seu script, você deve localizar os elementos e adicionar um listener do evento de `click` a esses elementos.
Vamos convencionar aqui e utilizar o comando `querySelectorAll` para buscar todos os elementos que têm a classe `button` e então adicionar o evento de `click` neles.

```javascript
// Seleciona todos os botões com a classe 'button'
const buttons = document.querySelectorAll('.button');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', function() {
    window.alert('Produto adicionado!');
  });
});
```
[Ver o código rodando](https://codepen.io/leohackin/pen/NWBZBBN)

O código é simples, mas o importante aqui é entender que os elementos com a classe `button` que estamos selecionando com o comando `querySelectorAll` já precisam existir no DOM. Ou seja, eles têm que estar fisicamente na árvore DOM quando o `querySelectorAll` for executado para que o evento possa ser adicionado com sucesso.

A sequência é:
* a página web foi carregada
* a árvore DOM é construída dentro do browser com seus elementos (os `button` inclusos)
* seu script roda e faz o que tem que fazer
* 😎 sucesso!

#### Injetando código novo no DOM

Agora, imagine que além de trazer os produtos já populados, seu backend instrua você a utilizar uma biblioteca JS deles. Essa biblioteca vai passar a exibir novos produtos em tempo real após o carregamento da página.

Para ilustrar, criei uma versão modificada do HTML que rodamos acima, mas com a adição de uma biblioteca externa que vai inserir um produto em um tempo aleatório entre 1 e 15 segundos.

[Veja o resultado rodando](https://codepen.io/leohackin/pen/jENLLvx)

A sequência passou a ser:
* a página web foi carregada
* a árvore DOM é construída dentro do browser com seus elementos (os `button` inclusos)
* seu script roda e faz o que tem que fazer
* 😎 sucesso!
* (após alguns segundos) a árvore DOM é modificada com novos produtos pelo script injetado.

Note que os novos produtos não pegaram o evento `click`, porque, obviamente, seu código encarregado de fazer o `querySelectorAll` rodou apenas quando a página foi carregada.

🙀 **Atente-se aqui**: esse comportamento não é apenas com libs que adicionam novas coisas no DOM, mas também quando libs e scripts substituem código antigo por código novo. O código pode ser EXATAMENTE o mesmo, mas a referência ao elemento muda quando você remove um elemento com um `element.remove()` ou substitui ele.

#### método oldschool: setInterval e setTimeout

E como a gente então consegue rodar nosso código que adiciona o evento de `click` em novos elementos?

Muita gente se mune de eventos que ficam rodando em loop. Destes, talvez os mais famosos sejam o [setInterval](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/setInterval) e o [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout). Eles têm quase o mesmo propósito de rodar de tempo em tempo executando uma função ou bloco de código anônimo.

Como a gente resolveria nosso problema aqui? Poderíamos fazer um `setInterval` que rodasse a cada segundo verificando se novas linhas foram criadas. Podemos deixar nosso código inicial mais complexo e orientado a ler cada nova linha.

```javascript
// Armazena o número de linhas já processadas
let linhasProcessadas = 0;

// Função para adicionar o listener de clique aos botões "Comprar"
function adicionarListenerAosBotoes() {
    const linhas = document.querySelectorAll('table tbody tr');

    // Itera sobre as linhas que ainda não foram processadas
    for (let i = linhasProcessadas; i < linhas.length; i++) {
        const botao = linhas[i].querySelector('.button');
        if (botao) {
            botao.addEventListener('click', function() {
                window.alert('Produto adicionado!');
            });
        }
    }

    // Atualiza o número de linhas processadas
    linhasProcessadas = linhas.length;
}

// Função para iniciar a verificação de novas linhas
function iniciarVerificacaoDeNovasLinhas() {
    setInterval(adicionarListenerAosBotoes, 1000); // Verifica a cada 1 segundo
}

// Inicia o processo ao carregar o script
document.addEventListener('DOMContentLoaded', iniciarVerificacaoDeNovasLinhas);
```
[Veja o código rodando](https://codepen.io/leohackin/pen/zxOddgg)

A-ha! Funcionou! A sequência passou a ser:
* a página web foi carregada
* a árvore DOM é construída dentro do browser com seus elementos (os `button` inclusos)
* seu script roda e faz o que tem que fazer
* 😎 sucesso!
* (após alguns segundos) a árvore DOM é modificada com novos produtos pelo script injetado.
* (a cada segundo) nosso novo código `adicionarListenerAosBotoes` verifica as novas linhas e adiciona o evento de `click` nos novos botões

Agora, podemos ver algumas melhorias e temos algumas limitações nessa abordagem:
* para apenas um botão isso é OK, mas se tivéssemos mais elementos isso começaria a ficar difícil de manter
* temos que manter um controle externo de elementos que já "injetamos" o `click`, sob o risco de adicionar mais de uma vez o evento de `click` (acarretando em mostrar o alert de _Produto Adicionado_ mais de uma vez por click)
* em outros contextos, esperar 1s pode gerar um efeito de `glitch` na tela, com elementos sendo criados e com o botão sem evento de `click` por algum tempo.

Numa listagem de produtos esses efeitos podem não ser tão ruins, mas numa interface mais reativa, onde o novo componente já deve ter toda sua funcionalidade pronta, isso pode promover workarounds pesados por conta dessa limitação.

Daí a tendência é cada vez mais diminuir o tempo do intervalo, acarretando provavelmente em concorrências e problemas de [race condition](https://medium.com/design-bootcamp/understanding-multithreading-mutation-concurrency-race-condition-and-deadlock-in-javascript-432e8bc5ddac#:~:text=A%20race%20condition%20occurs%20when,simultaneously%2C%20leading%20to%20unexpected%20behavior.).

Precisamos de algo mais em tempo real e REATIVO ao que acontece no DOM para podermos executar código o mais brevemente possível.

#### Observando o DOM com Mutation Observer

Daí nasceu o [MutationObserver](https://developer.mozilla.org/pt-BR/docs/Web/API/MutationObserver), que fornece uma forma mais inteligente de observar e REAGIR a mudanças no DOM. Ele é uma API do JavaScript que permite observar mudanças no DOM, como adição ou remoção de elementos, alterações em atributos ou no texto de nós.

No nosso caso, ele é mais eficiente que o setInterval para detectar mudanças, pois reage **APENAS E SE** ocorrerem alterações específicas no DOM. :)

Ele funciona de uma forma muito simples e poderosa:
* criamos um callback que instancia um `MutationObserver`. Ele receberá todos os eventos de mudança para fazer o tratamento necessário.
* definimos o elemento raiz que queremos observar e o que queremos observar nele (atributos, elementos, etc), passando-os para o método `observe`, disponível na recém-criada instância do `MutationObserver`.

Para ficar mais ilustrativo, imagine que quiséssemos emitir um aviso no Console do navegador a cada novo elemento adicionado no `body` do nosso documento. Podemos fazer isso com o código abaixo:

```javascript
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('Child nodes changed.');
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });
```

Se você copiar esse código agora para seu navegador e navegar pelo `google.com`, por exemplo, verá ele emitindo vários `Child nodes changed.`.

{% include image.html url="/assets/posts/2024/2024-02-10-migrando-para-mutation-observer/mutationNoGoogle.png" description="Rodando Mutation Observer no console do Google.com" %}

Temos muitas outras vantagens usando um `MutationObserver`:
* Pode ficar observando coisas que não existem ainda no DOM.
* Ele é granular o suficiente para definir o que você quer observar.
* Você consegue acessar o valor anterior do elemento para fazer qualquer tratamento desejado. Com isso, você dispensa o uso de armazenamento externo do estado do seu elemento.
* O retorno da `mutationList` é um `MutationRecord`, que tem uma estrutura super robusta de informação sobre o elemento.

#### Refatorando

Enfim, agora que entendemos como funciona, podemos substituir nosso `setInterval` pela nossa nova abordagem de `MutationObserver`. Veja como fica nosso código da forma mais simples possível.

```javascript
// Função para adicionar o evento de clique aos botões
function addClickEventToButtons() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    if (!button.dataset.clickEventAdded) { // Verifica se o evento já foi adicionado
      button.addEventListener('click', function() {
        window.alert('Botão clicado!');
      });
      button.dataset.clickEventAdded = true; // Marca o botão como evento adicionado
    }
  });
}

// Configura o MutationObserver para observar mudanças no DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      addClickEventToButtons(); // Adiciona o evento aos novos botões
    }
  });
});

// Inicia a observação do documento
observer.observe(document.body, {
  childList: true, // Observa adições e remoções de nós filhos
  subtree: true    // Observa toda a árvore de nós
});

// Adiciona o evento de clique aos botões já existentes
addClickEventToButtons();
```
[Veja o código rodando](https://codepen.io/leohackin/pen/LEPjzxR)

Esse código, claro, tem bastante espaço para refatoração, DRY e afins, mas a ideia é entender como substituir um `setInterval` por algo mais eficiente.

Espero que isso ajude bastante no seu dia a dia e te dê uma nova forma de enxergar e trabalhar com mutações no DOM. <3


__Namastê!__
