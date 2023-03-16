---
layout: post
title:  "Tageando pedidos com desconto com Shopify Flow"
date:   2023-03-15 12:00:52 -0300
categories: tech
tags: ["shopify","shopify-flow","tags","video", "tutorial"]
---

> O [Shopify Flow](https://shopify.dev/docs/apps/flow){:target="_blank"} é uma ferramenta poderosa de orquestração e automação de tarefas, que é disponibilizada gratuitamente para todos os lojistas Shopify. Este tutorial faz parte de [uma série de vídeos que você pode conferir aqui](https://www.youtube.com/playlist?list=PLOpPadXRj3W3fhoayVXBL7qHiKmFLndC3).

A utilização de cupons de desconto é uma ferramenta de marketing poderosa em todo e-commerce e conseguir identificar quais pedidos foram fechados com eles é essencial para medir o sucesso dessa estratégia.

Nativamente, o Shopify não permite que pedidos sejam filtrados diretamente pelo cupom usado, dificultando a tarefa. Todavia, o recurso de tags de pedido pode ser utilizado para esse fim, permitindo filtrar pedidos que tenham determinadas tags.

Neste vídeo, vou te mostrar passo a passo como um Flow que marque todos os pedidos criados que tenham um cupom de desconto aplicado. **Clique na imagem abaixo para assistir!**

[![Thumbnail do video Tageando pedidos com desconto com Shopify Flow](https://img.youtube.com/vi/ivyjm73Spbw/0.jpg)](https://www.youtube.com/watch?v=ivyjm73Spbw){:target="_blank"}

E não esquece de deixar o like e seguir o canal pra ajudar! 😘🤓
{:.notice}

# BOOOOOONÔS

Pra facilitar a vida, clique no link abaixo para copiar o arquivo exportado do Flow. Depois de baixar, basta você importar ele usando o botão `Import`, selecione o arquivo pronto. ✨

Arquivo [tagear-pedidos-feitos-com-cupom.flow](/assets/posts/2023/2023-03-15-tagear-pedidos-com-cupom-no-shopify-flow/tagear-pedidos-feitos-com-cupom.flow)

Outra dica é que no vídeo eu simplesmente crio uma tag chamada `cupom`. Isso pode ser genérico demais para algumas campanhas. Então, você pode também criar uma tag com o nome do cupom.

Para isso, modifique o valor do campo `Tags` da ação `Add order tags` para usar o código do desconto utilizado no pedido, que pode ser obtido com a variável  {% raw %}`{{order.discountCode}}` {% endraw %}. Abaixo, como deve ficar no seu editor:

{% include image.html url="/assets/posts/2023/2023-03-15-tagear-pedidos-com-cupom-no-shopify-flow/add-order-tag-v2.png" width="70%" %}


__Namastê!__
