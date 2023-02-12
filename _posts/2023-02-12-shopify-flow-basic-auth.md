---
layout: post
title:  "Autenticando Http Requests com HTTP Basic Autentication no Shopify Flows"
date:   2023-02-12 16:23:52 -0300
categories: tech
tags: ["shopify","shopify-flow","protip"]
---

Uma das coisas mais poderosas do [Shopify Flow](https://shopify.dev/docs/apps/flow) é a utilização a ação [Send Http request](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request), que permite fazer requisições e chamadas para qualquer serviço externo.

O que a documentação não diz nem dá exemplos, é como você pode se autenticar com serviços que usam [HTTP Basic Authorization](https://en.wikipedia.org/wiki/Basic_access_authentication), uma forma de autorização que funciona passando um usuário e senha para o serviço HTTP afim de obter autenticação. **Todavia, ela suporta isso nativamente. :)**

Para tanto, basta encodar a string `USUARIO:SENHA` (onde `USUARIO` é seu login e `SENHA` é ... bom, a senha) em `base64` e adicionar enviar isso via Header com o parâmetro `Authorization` e com o valor `Base SEUTOKENEMBASE64`.
{: .notice} 

Um exemplo é a utilização da API de envio de whatsapp do [Twillio](https://www.twilio.com/docs/whatsapp/api), que funciona basicamente enviando seu `TWILIO_ACCOUNT_SID` (o ID da sua conta) e seu respectivo token de acesso (`TWILIO_AUTH_TOKEN`). Nos exemplos do código, ele entrega o seguinda sample para uso via CURL:

{% highlight bash %}
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json" \
-u $TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN
{% endhighlight %}

Para utilizar esse endpoint no conector HTTP Request, faça o encoding como citado acima (existem diversas ferramentas online que o fazem como o [base64encode.org](https://www.base64encode.org/)). Por exemplo, se seu SID da Twillio é AC87de077fae9f722201561f0ad04ea88az e seu token é b17df3b17bfb83ce38762f48ec640826, faça o encoding da string

`AC87de077fae9f722201561f0ad04ea88az:b17df3b17bfb83ce38762f48ec640826`

O resultado será 

`QUM4N2RlMDc3ZmFlOWY3MjIyMDE1NjFmMGFkMDRlYTg4YXo6YjE3ZGYzYjE3YmZiODNjZTM4NzYyZjQ4ZWM2NDA4MjY=`

Depois, basta colocar no header da requisição como no print abaixo:

{% include image.html url="/assets/posts/2023-02-12-http-basic-shopify-flow/shopify-flow-basic-auth.png" %}

E pronto: você agora pode usar seu endpoint autenticado. :)

__Namastê!__
