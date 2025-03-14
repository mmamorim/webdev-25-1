# Aula 04 (12/03) 

## React 

Referência para os textos abaixo sobre React
[https://pt-br.react.dev/learn](https://pt-br.react.dev/learn)


## Criando o projeto React com Vite

O Vite É uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de vários frameworks como React, Vanilla, Vue, Svelte e outros. Além de ser um gerador muito rápido, o Vite.js nos poupa muito tempo configurando outras bibliotecas.

[ViteJs](https://vite.dev/)


## Componentes

As aplicações React são compostas por componentes. Um componente é uma parte da IU (interface do usuário) que possui sua própria lógica e aparência. Um componente pode ser tão pequeno quanto um botão, ou tão grande quanto uma página inteira.

### Tudo começa pelo componente da Aplicação que irá encapsular todos os outros componentes do app

~~~jsx
export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <Component01 />
      <Component02>
          <Component03 />
      </Component02>
    </div>
  );
}
~~~

#### Pontos importantes

* Cada componente será um arquivo ```.jsx```
* Os nomes dos componentes React sempre devem começar com letra maiúscula.
* O componente é uma função que retorna um bloco usando a linguagem de marcação JSX


### Escrevendo marcações (markup) com JSX 

A sintaxe de marcação que você viu acima é chamada de JSX. Ela é opcional, mas a maioria dos projetos React utiliza JSX pela sua conveniência. Todas as todas as ferramentas de desenvolvimento que recomendamos suportam JSX prontamente.

JSX é mais rigoroso do que HTML. Você precisa fechar as tags, como ```<br />```. Além disso, Seu componente não pode retornar várias tags JSX separadas. Você precisa envolvê-las em um elemento pai compartilhado, como um 

~~~html
<div>...</div> 
~~~
ou
~~~html
<>...</> 
~~~

### Adicionando estilos 
No React, você define uma classe CSS usando className, que funciona da mesma forma que o atributo HTML class:

~~~jsx
<img className="avatar" />
~~~

Depois, você escreve o CSS para esse elemento em um arquivo CSS separado:

~~~css
/* No seu arquivo CSS */
.avatar {
  border-radius: 50%;
}
~~~

### Exibindo dados 

JSX permite que você coloque marcação dentro do JavaScript. As chaves permitem que você insira expressões JavaScript. Isso é útil para incorporar variáveis do seu código e exibi-las para o usuário. Por exemplo, isso irá exibir ```user.name```:

~~~jsx
return (
  <h1>
    {user.name}
  </h1>
);
~~~

Você também pode incorporar expressões JavaScript a partir de atributos JSX, mas você deve usar chaves em vez de aspas. Por exemplo, ```className="avatar"``` passa a string ```"avatar"``` como a classe CSS, mas ```src={user.imageUrl}``` lê o valor da variável JavaScript ```user.imageUrl```, e então passa esse valor como o atributo ```src```:

~~~jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
~~~