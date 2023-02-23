---
layout: post
title:  "Shopify Winter '23: Quanto do frio chegou no Brasil? parte 1/3"
date:   2023-02-20 19:00:52 -0300
categories: tech
tags: ["shopify","shopify-editions","winter-23","brasil"]
---

Desde o ano passado, a Shopify tem agrupado diversas novidades em lançamentos programados chamados "Editions". Ano passado tivemos o [Summer '22](https://www.shopify.com/editions/summer2022){:target="_blank"} chamado `Connect to Consumer` e essa ano fomos agraciados com o [Winter '23](https://www.shopify.com/br/editions/winter2023){:target="_blank"} chamado de `Built to last`. 

> Update: eles já traduziram para algo mais global e chamaram "1º semestre de 2023"

Foram +100 novidades do produto (são 6 meses de trabalho e melhorias) em todas as áreas e, desde que comecei com Shopify, acredito que esse seja o release mais ousado e cheio de coisas estruturais que já vi.

##### Mas, para nós do Brasil, quanto desse friozin chegou? ❄️

Sabemos que várias coisas super maneiras não se propagam de imediato no Brasil e são pedidos de longa data como o Shopify Payments (_vem payments_). Mas várias novidades estão disponíveis, **SIM**, para gente imediato. Esse post deve gerar muitos outros sobre cada novidade, mas vai um resumão do que a gente consegue aproveitar aqui, já.

**Sou separar essa análise em mais posts pois é bastante novidade. 🙏🏽**

Para facilitar, vou usar um 👍🏽 para o que chega para gente, 👎🏽 para os que não vão chegar, ❓ para os que ainda não se sabe quando nem se vão chegar para gente... ahhh, e links para as features já em pt-BR ;). **Enjoy!**
{:.notice}

#### 01. [Aumente a conversão](https://www.shopify.com/br/editions/winter2023?itcat=dotcom-br&itterm=editions#boost-conversion){:target="_blank"}

###### 👍🏽 **[Carregamento de páginas ultrarrápido em qualquer lugar](https://www.shopify.com/br/editions/winter2023?itcat=dotcom-br&itterm=editions#lightning-fast-page-loads-everywhere){:target="_blank"}

Muitos não sabem, mas a infraestrutura do Shopify até uns meses atrás não ficava perto da gente, o que gerava mais "demora" (vou usar esse termo para não ser muito técnico) para carregar as coisas. A plataforma vem investindo cada vez mais na resolução do problema, não apenas melhorando as CDNs (servidores de distribuição de conteúdo que guardam imagens, arquivos e afins para entregarem esse conteúdo mais rápido) de entrega de conteúdo mas agora também entregando a entrega da página inteira de servidores mais próximos, o que reduz o TTFB (Time to First Byte) na prática.

Além da velocidade para experiência de compara do usuário final, esse ganho no TTFB favorece bastante o SEO por conta da melhoria nas métricas no Pagespeed, que é uma métrica importante que o Google usa para indexar e aumentar a relevância do site nas buscas.

Olhando o mapa, se ele for verdadeira, já está bem legal no BR:

{% include image.html url="/assets/posts/2023/2023-02-23-shopify-winter-brasil-part1/rede_cdn.png" width="40%" %}

Se quiser saber mais sobre essa métrica e outras, vale MUITO ler [esse guia do web.dev](https://web.dev/ttfb/){:target="_blank"}.

###### ❓ [Checkout em uma única página](https://www.shopify.com/br/editions/winter2023#one-page-checkout){:target="_blank"}

O famoso e muito esperado One-Page Checkout está entre nós e disponível em breve, mas não imediatamente para todos. O checkout provavelmente será lançado aos poucos para os merchants e deve contar com um beta. :)

Se quiser sentir um gostinho de como vai ficar, ao vivo, acesse: [https://shopify.supply/](https://shopify.supply/){:target="_blank"}. O site está em inglês mas quando entrar em checkout a experiência vai falar por si só. 🚀 ficou muito maneiro.

**Agora, fique feliz: o One-Page Checkout será para todos os merchants e países! 💖**

Se não tiver paciência para navegar no link [veja o vídeo exibido na página do evento](https://www.shopify.com/br/editions/winter2023#one-page-checkout){:target="_blank"}: é bem bacana e dá idéia de quanto isso ajudará na conversão. Eles utilizaram a experiência mais fluída que foi testada bastante com o Shop Pay e o checkouts expressos nativos para chegar numa experiência que converte muito mais. (_sempre disse que one page checkout no Brasil bombava, e vou morrer afirmando isso_ 😅)

Para quem quiser entrar no early access, acesse a página [https://www.shopify.com/checkout](https://www.shopify.com/checkout){:target="_blank"} e preencha o seu email no final da página. :) 

{% include image.html url="/assets/posts/2023/2023-02-23-shopify-winter-brasil-part1/one-page-early-access.png" width="70%" %}

🔎 **Importante**: Não tem nenhuma informação na página do evento, mas é certo que o one page checkout não funcionará em conjunto com a customização do arquivo `checkout.liquid`, que era a forma antiga de customizar os checkouts.

Resumindo: quem tem hoje personalização de checkout (via `checkout.liquid` ou com aplicativo de checkout transparente), não vai conseguir usar o One-Page checkout.
{:.notice}

Isso trouxe novamente aquele aviso importante para todos que utilizam esse artifício: a descontinuação das customizações do checkout.liquid daqui a 18 meses. Ou seja, toda customização deixará de funcionar a partir de Agosto de 2024. **Mas isso vai ser um bom assunto para um próximo post. Prometo. :)**

###### 👍🏽 [Editor de checkout fácil de usar](https://www.shopify.com/br/editions/winter2023?itcat=dotcom-br&itterm=editions#drag-and-drop-checkout-editor){:target="_blank"}

O Editor de checkout trouxe novidades relevantes. Agora, o checkout pode ser versionado como os temas (para alegria do povo de UX/UI e devs que poderão testar o checkout com mais calma sem ter que impactar ninguém em produção) e com a nova estrutura de [customização e extensão de checkout](https://www.shopify.com/partners/blog/checkout-ui-extensions?itcat=partner_blog&itterm=checkout_extensibility){:target="_blank"} muito daquele trabalho de adicionar novos campos e mecânicas vai agora suportado "sem gambis".

> A grande idéia é que o merchant não precisará mais mexer no código e poder utilizar apps e o próprio editor para fazer as coisas que antes demandava um desenvolvedor para fazer. A era do low-code/no-code chega forte e reafirmada aqui.

Com isso, a boa notícia aqui é que as extensões para checkout poderão ser encontradas na App Store, o que vai potencialmente abrir muitas novas opções para o checkout. Vale ficar de olho nessa sessão da App store. Já tem algumas opções [nessa página](https://apps.shopify.com/stories/guide-checkout-extensibility?locale=pt-BR&_gl=1*5drwsj*_ga*ODc2NTA1MDk5LjE2NzAzNDUwMjg.*_ga_B7X5MKCR35*MTY3NjkzMjc1Ni4xNy4xLjE2NzY5Mzc4OTcuNjAuMC4w*_fplc*SlA3NFVpeTMlMkJWd1VWNHJ2QXE4ckVtRGVMWkQxQ09OaGw4dzFFdVBBOFgzU3ZvSlNUNGJUTnp0V3ZKa21pcW0lMkJ6T0RNZXZja0owdTZubzVMbFhodVEzWVZ0VklMMVFyUUROQ21WeHlJS0ZxU3piUmF5d0tQJTJGRXp1TTlJVCUyQnclM0QlM0Q.){:target="_blank"}. O app [Checkout Blocks & Upsells](https://apps.shopify.com/checkout-blocks?locale=pt-BR&shallow_install_type=story&surface_detail=guide-checkout-extensibility&surface_intra_position=1&surface_type=story){:target="_blank"} por exemplo parece BEM promissor.

Para os Devs, as Shopify Functions trouxeram novidades. Delas, as duas mais importantes são sem dúvida as [Order Routing Location Rule API](https://shopify.dev/docs/api/functions/reference/order-routing-location-rule){:target="_blank"} e [Cart Transform API](https://shopify.dev/docs/api/functions/reference/cart-transform){:target="_blank"}.

A Order Routing aumenta, e muito, o poder de priorização para cálculo do shipping e escolha de como e onde os produtos serão entregues (vou entrar mais a fundo num post à parte pois merece). Na prática, ele substitui a antiga e simples priorização de CDs para entrega (em caso de falta de estoque) por algo muito mais robusto e flexível. Isso, para nossa realidade BR de frete cada vez mais caro, é crucial para decidir entre um split shipping (como a Amazon faz, dividindo um pedido em várias entregas) e outras formas de entrega, dependendo da situação

Já o Cart Transform acompanha uma feature que irei comentar abaixo, que é esperado Bundle nativo. Nesse caso, a API permite criar descontos e gifts dentro dos bundles.

Essa é uma feature apenas para lojistas plus.

###### 👎🏽 Crie confiança com o Shop Promise e Comparas com login no Shop

Assim como todas as incríveis vantagens de usar o Shopify Payments, o Shop ainda não está disponível no Brasil. Então nos resta, por enquanto, babar com as possibilidades.

###### 👍🏽 [Renderização de imagens e pontos focais otimizados](https://cdn.shopify.com/?_gl=1*5tus2a*_ga*ODc2NTA1MDk5LjE2NzAzNDUwMjg.*_ga_B7X5MKCR35*MTY3Njk0MjE0NS4xOC4xLjE2NzY5NDMyMTIuNjAuMC4w*_fplc*SlA3NFVpeTMlMkJWd1VWNHJ2QXE4ckVtRGVMWkQxQ09OaGw4dzFFdVBBOFgzU3ZvSlNUNGJUTnp0V3ZKa21pcW0lMkJ6T0RNZXZja0owdTZubzVMbFhodVEzWVZ0VklMMVFyUUROQ21WeHlJS0ZxU3piUmF5d0tQJTJGRXp1TTlJVCUyQnclM0QlM0Q.){:target="_blank"}

Não ficou claro se o motor de otimização de imagens foi melhorado, mas uma novidade é o ponto focal, que permite editar em qual ponto o foco deve iniciar ([disponível apenas em alguns temas por padrão](https://help.shopify.com/pt-BR/manual/online-store/images/theme-images#definir-um-ponto-focal-na-imagem-do-tema){:target="_blank"} mas que pode ser implementado).

{% include image.html url="/assets/posts/2023/2023-02-23-shopify-winter-brasil-part1/ponto_focal.png" width="70%" %}

###### 👍🏽 [Personalização de cabeçalho e rodapé](https://www.shopify.com/blog/online-store-improvements#5){:target="_blank"}

Outra melhoria simples, mas bacana. Antes, o cabeçalho e rodapé eram customizáveis mexendo direto no código do tema. Agora, graças à feature (muito bem vinda para devs) dos [Sections Groups](https://shopify.dev/docs/themes/architecture/section-groups), eles podem receber componentes, sections e qualquer componente como os templates padrão recebiam.

###### 👍🏽 [Código CSS e Liquid customizados direto no editor](https://help.shopify.com/pt-BR/manual/online-store/themes/theme-structure/extend?_gl=1*1vuv3wp*_ga*ODc2NTA1MDk5LjE2NzAzNDUwMjg.*_ga_B7X5MKCR35*MTY3Njk0MjE0NS4xOC4xLjE2NzY5NDQxMTIuNjAuMC4w*_fplc*SlA3NFVpeTMlMkJWd1VWNHJ2QXE4ckVtRGVMWkQxQ09OaGw4dzFFdVBBOFgzU3ZvSlNUNGJUTnp0V3ZKa21pcW0lMkJ6T0RNZXZja0owdTZubzVMbFhodVEzWVZ0VklMMVFyUUROQ21WeHlJS0ZxU3piUmF5d0tQJTJGRXp1TTlJVCUyQnclM0QlM0Q.){:target="_blank"}

Outra ajuda grande para merchants não muito técnicos, é que o editor de temas agora permite que código CSS customizado possa ser adicionado ao tema de forma simples. Isso ajuda bastante para customizar um tema em alguns aspectos sem precisar mexer no código fonte do tema. Além do CSS, uma grande ajuda é a possibilidade de inserir blocos de código em Liquid. O Liquid é a "linguagem de programação" que o Shopify usa para construir as paginas, buscar informações de produtos, collections e afins. Com um pouco de pesquisa sobre como funciona, da para fazer várias coisas legais com isso.

{% include image.html url="/assets/posts/2023/2023-02-23-shopify-winter-brasil-part1/custom_css.png" width="50%" %}

###### ❓ [Conteúdo de vitrine gerado por IA](https://www.shopify.com/blog/ai-product-descriptions){:target="_blank"}

E a ChatGPTerização (_se você está vivo e não ouviu falar o ChatGPT ainda, certifique-se que de fato você está vivo hahaha_) planetária chegou ao Shopify. Com o Shopify Magic e algumas palavras chaves, você pode usar todo poder de uma AI para escrever a descrição do seu produto ou ao menos dar aquela ajudazinha. :)

Porém, não da para saber quando todos terão acesso e se será compatível com Português do Brasil.

A função está aparecendo aos poucos para alguns merchants mas [tem uma lista de espera aqui](https://www.shopify.com/ai-product-descriptions-early-access?itcat=autowrite-early-access-cta&itterm=editions){:target="_blank"}.

###### 👍🏽 [Pesquisas e recomendações integradas e aprimoradas](https://www.shopify.com/blog/storefront-search-and-recommendations){:target="_blank"}

O Shopify tinha feito uma melhoria enorme lançando como early access seu app [Search & Discovery](https://apps.shopify.com/search-and-discovery?_gl=1*1rosj20*_ga*ODc2NTA1MDk5LjE2NzAzNDUwMjg.*_ga_B7X5MKCR35*MTY3Njk0MjE0NS4xOC4xLjE2NzY5NDQ4MjMuNjAuMC4w*_fplc*SlA3NFVpeTMlMkJWd1VWNHJ2QXE4ckVtRGVMWkQxQ09OaGw4dzFFdVBBOFgzU3ZvSlNUNGJUTnp0V3ZKa21pcW0lMkJ6T0RNZXZja0owdTZubzVMbFhodVEzWVZ0VklMMVFyUUROQ21WeHlJS0ZxU3piUmF5d0tQJTJGRXp1TTlJVCUyQnclM0QlM0Q.){:target="_blank"} na última edição. Agora, ele dá um passo à frente com a melhoria do algoritmo de busca e recomendação, utilizando modelos novos de AI para oferecer o melhos produto tanto na busca quanto nas recomendações.

Isso se traduz num auto complete de busca que não apenas é mais inteligente, como tem chance de conversão maior, já que mostra para o cliente uma ordem de produto otimizada de acordo com o comportamento de navegação do usuário, seja ele cliente já ou um anônimo. **E de grátis! 🤑**

Um ponto importante aqui é que seu tema deve estar preparado para utilizar esse App. ;) Pessoal, acho que vale MUITO a pena caso você não tenha um auto complete bacana.


###### 👍🏽 [Personalize a sua loja com metaobjetos](https://help.shopify.com/en/manual/custom-data/metaobjects){:target="_blank"}

Muita gente não sabe, mas o Shopify tem formas de estender produtos, orders e muito mais com Metafields, que são campos dentro que permitem adicionar informação customizada.

Agora, a Shopify lança o Metaobjetos, que são estruturadas que comportam mais informações do que os metafields. Isso é incrível, já que agora você pode, por exemplo, criar um objeto de Específicações dentro dos seus produtos, de uma forma estruturada. O poder disso é imenso e vou falar num futuro post tb. 🤩 

{% include image.html url="/assets/posts/2023/2023-02-23-shopify-winter-brasil-part1/metaobjects2.png" width="70%" %}


###### ❓ [Pacotes de produtos](https://www.shopify.com/shopify-bundles-early-access){:target="_blank"}

E finalmente os bundles dão as caras no Shopify. Funcionalidade muito comum em vários outros ecommerces, poder criar kits e bundles é uma estratégia crucial para vários modelos de growth e marketing. Ele ainda não está disponível e tem fila para early access (ou seja, acessar assim que possível) [nesse link](https://www.shopify.com/shopify-bundles-early-access){:target="_blank"}.

###### 👍🏽 Novos apps de desconto criados no Shopify Functions

Com as novas funcionalidades de descontos das Shopify Functions, novos apps estão conseguindo entregar ainda mais experiência, como é o caso da `Discount Hub Unique Discounts` ([https://apps.shopify.com/discounts](https://apps.shopify.com/discounts){:target="_blank"}). 

###### 👍🏽 Atualizações das nossas APIs Subscrition

Várias melhorias na API de assinatura, voltadas mais para desenvolvedores. Hoje, a API está funcional para quem utiliza hoje o Stripe ou o Paypal como formas de pagamento principais no site.


###### 👎🏽 O Shopify Payments está disponível na França

_Malheureusement nous ne sommes pas la France._ :D

### É isso então? 

Faltaram algumas coisas que, para mim, seriam matadoras além da questão do Shopify Payments, como a possibilidade de inserir e remover produtos do carrinho com as Shopify Functions e fazer os cupons BOGO adicionarem produtos automaticamente no carrinho quando eles fossem free. Mas isso, perante o mar de novidades e melhorias para operação em geral, são apenas um desejo mesmo.

#### No geral, o saldo foi bem positivo. Golasso da Shopify. :)

Nos próximos, vamos entrar um pouco em mais algumas sessões. Essa aqui ficou ENORME pq é a maior mesmo. HAHahehee

__Namastê!__
