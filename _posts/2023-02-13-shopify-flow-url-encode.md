---
layout: post
title:  "Enviando conteúdo form urlencoded via Send HTTP Request no Shopify Flows"
date:   2023-02-14 12:00:52 -0300
categories: tech
tags: ["shopify","shopify-flow","send-http-request-connnector","protip"]
---

> Uma das coisas mais poderosas do [Shopify Flow](https://shopify.dev/docs/apps/flow) é a utilização a ação [Send Http request](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request), que permite fazer requisições e chamadas para qualquer serviço externo.

Embora a maioria dos endpoints REST modernos aceite nativamente um payload utilizando JSON quando utilizamos métodos de criação ou atualização como `POST` ou `PUT`, alguns ainda trabalham aceitando `content types` mais clássicos.

Bem comum, o `application/x-www-form-urlencoded` nada mais é que o envio do body do payload num formato estruturado que lembra muito a forma como enviamos query string. Por exemplo, se você precisa enviar um payload que contenha `nome` e `email` nesse content type, o payload seria assim.

`nome=Leo+Hackin&email=leohackin@gmail.com`

 Note que entre `Leo` e `Hackin` na variável `nome` existe um sinal de `+`: esse é o simbolo que o encoding de url entende como `espaço`. Em algumas APIs e CLIs, essa conversão será feita automaticamente, mas se quiser garantir, você pode fazer isso do seu lado. Praticamente toda linguagem moderna já tem esses parsers. ;) 

Vamos usar de exemplo novamente a API de envio de whatsapp do [Twillio](https://www.twilio.com/docs/whatsapp/api). Nas docs você irá ver o envio dos parâmetros da seguinte forma.

{% highlight bash %}
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json" \
--data-urlencode "Body=This is the ship that made the Kessel Run in fourteen parsecs?" \
--data-urlencode "From=+15017122661" \
--data-urlencode "To=+15558675310" \
-u $TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN
{% endhighlight %}

As entradas `--data-urlencode` instruem o cURL a enviar esses dados no encoding `application/x-www-form-urlencoded` para o destino. O Twillio só aceitará a requisição assim e caso seja enviado de outra forma, um erro de Bad Request (status 400) será retornado, pois a entrada esperada está incorreta ou faltando. Algo como o erro abaixo:

{% highlight json %}
{
   "code":21211,
   "message":"The 'To' number whatsapp: 15558675310 is not a valid phone number.",
   "more_info":"https://www.twilio.com/docs/errors/21211",
   "status":400
}
{% endhighlight %}

Na verdade o que aconteceu aqui é que o Twillio não entendeu a entrada, já que ele espera o conteúdo do `POST` naquele formato que falei lá em cima.

Para resolver isso, envie o `body` do conector com o formato `variavel1=valor&variavel2=valor` sempre utilizando o caracter `&` (e comercial) como separador de variáveis. E informe nos `headers` o parâmetro `Content-Type` com o valor `application/x-www-form-urlencoded`.
{:.notice}

Nosso envio pelo conector fica assim então:

{% include image.html url="/assets/posts/2023/2023-02-13-shopify-flow-url-encode/shopify-flow-url-encoded.png" %}

E pronto: você agora pode enviar conteúdo em form encoded para seus endpoints. :)

__Namastê!__
