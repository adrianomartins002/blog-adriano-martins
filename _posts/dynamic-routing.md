---
title: ' React Native e componente de conexão'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Adriano Martins
  picture: '/assets/blog/authors/profile.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---
[![Adriano Martins de Oliveira Sousa](https://miro.medium.com/fit/c/56/56/2*Pxudqn8kBqrsfZltAhPAjA.jpeg)](https://medium.com/@adrianomartins002?source=post_page-----d430d8bab0c--------------------------------)
[Adriano Martins de Oliveira Sousa](https://medium.com/@adrianomartins002?source=post_page-----d430d8bab0c--------------------------------)[Feb 2, 2020·4 min read](https://medium.com/@adrianomartins002/criando-componente-para-verificar-conexão-de-rede-com-react-native-d430d8bab0c?source=post_page-----d430d8bab0c--------------------------------)

Como fazer uso dos hooks para criar um componente que mostrará perda de conexão com a rede do Smartphone.

![](https://miro.medium.com/max/3662/1*0nAQa5lB2-bGNj_j19DJag.png)

Desde a implementação dos hooks no React no ano de 2019, muitos desenvolvedores tem optado por utilizar componentes funcionais (stateless) no lugar dos componentes padrão criados como classe. Mas por qual motivo? Além de o código ficar muito mais limpo (pois os programadores meio que são forçados a codificar melhor para que tudo funcione), os hooks previnem diversos problemas dos quais os métodos de ciclo de vida permitiam (ou tornavam possível).
Bom, esse artigo não é para falar se um é melhor que o outro, e sim sobre a utilização dos hooks useEffect, useState e useNetInfo, para criação de um componente do qual fará uma notificação de que o Smartphone está desconectado da internet, ou sem rede.

_Bom, sem mais delongas…_
-------------------------

**Mão na massa o/**
===================

Após iniciar uma aplicação com React Native, vamos criar um componente funcional simples (vou dar o nome de NetworkInformation), onde ele vai somente renderizar uma View contendo um **svg** (utilizei um que renderiza um simbolo de conexão, como será visto posteriormente), e também terá uma área de texto no qual será mostrado se está conectado ou não.

Melhorando um pouco visual do componente colocando os estilos e organizando o código, temos ele da seguinte forma:


Legal né?! Já temos uma boa primeira visualização.

Bom, com isso temos o estilo inicial do componente, e agora podemos partir para os **hooks**, o primeiro, e mais importante para nossa funcionalidade, é um **hook** no qual foi incluso no pacote da dependência do netinfo (react-native-info) chamado **useNetInfo** (nome bem sugestivo né? kk). Ele tem como funcionalidade a atualização do mesmo sempre que o estado da conexão muda (como por exemplo se você ficou sem wifi ou sem 4g).
Atribuímos então o valor a uma constante _const netInfo = useNetInfo();_ e sempre que houver perda de conexão teremos nessa constante um booleano _isConnected_, com o qual utilizaremos para a validação.
O segundo **hook** que utilizaremos é o **useState** (esse é bem mais conhecido), nele faremos com que, sempre que a conexão mudar atribuiremos o resultado para ser mostrado na renderização do texto.
Por fim, para que tudo funcione da forma correta sempre que houver mudança na rede e possa atualizar o componente, utilizaremos o **useEffect** (ou **hook** de efeito). Ele funciona similar aos métodos de ciclo de vida **componentDidMount** e **componentDidUpdate**.     
No nosso caso o **useEffect** se aplica muito bem, pois possui dois parâmetros, o primeiro deles é uma função a ser executada, e o segundo é um array de variáveis a serem monitoradas, ou seja, toda vez que o valor delas muda, o **useEffect** é executado. Assim, usaremos 
ele para que, quando o valor da **netInfo** alterar por conta da mudança de conexão, o **useEffect** será chamado, executando assim a função passada como parâmetro para ele, a mesma
na qual realizará a mudança de state do **useState**, informando na mensagem que o smarthphone está ou não com rede.
O código então fica da seguinte forma:

Repare que a descrição **Connected** e **Disconnected** fica alternando sempre que a conexão de rede muda. Assim conseguimos concluir a proposta do artigo.

Indo um pouco além…
-------------------

Para deixar a proposta um pouco mais legal, vamos incluir mais algumas funcionalidades.

A primeira é uma mudança de estilo, vamos criar também uma variável na qual ficará salvo o **backgroundColor** do componente, para que, quando o estado da conexão mudar, fique alternando entre azul e vermelho.

A segunda é a utilizacao de uma dependência do react chamada react-native-animatable, ela faz uso de algumas transições e animações aplicada nos componentes.
Após instalar o react-native-animatable\* , vemos apartir da documentação, que, para a utilização dela, fazemos uso também de mais um **hook** o **useRef**.

Esse **hook** tem por finalidade a utilização da referencia criada para um componente, ou seja, após a declaração da variável e atribuição da mesma sendo referencia do nosso componente, podemos usar funções proporcionadas pelo **animatable**; entre elas utilizaremos a animação de **slideInDown** no momento que a conexão é perdida, e **fadeOut** no momento de retorno. o código fica da seguinte forma:

Finalizamos assim essa publicação, entendendo um pouco sobre como utilizar o poder dos **hooks** para criar uma funcionalidade simples, porém muito utilizada e necessária nos aplicativos atualmente.

**Referência**

### Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma…

(https://pt-br.reactjs.org/docs/hooks-intro.html)

-------------------------------

### Declarative transitions and animations for React Native $ npm install react-native-animatable --save To animate things…

github.com

](https://github.com/oblador/react-native-animatable)