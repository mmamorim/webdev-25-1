# Aula 06 (21/03) 

# Tailwind CSS

O Tailwind CSS é um framework CSS de código aberto que se destaca por sua abordagem única de design utilitário. Em vez de fornecer estilos pré-estilizados para elementos específicos, ele fornece uma série de classes utilitárias que podem ser diretamente aplicadas aos elementos HTML para estilizá-los. Essas classes representam propriedades CSS individuais, como margens, preenchimentos, cores, tamanhos de fonte, alinhamentos e muito mais.

[https://tailwindcss.com/](https://tailwindcss.com/)

## Instalando o WindCSS

Link para instalação no React com vite
[https://windicss.org/integrations/vite.html](https://windicss.org/integrations/vite.html)

## Configurar o WindCss para usar os estilos padrão do navegador

Adicionar o arquivo ```windi.config.js```

~~~js
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
})
~~~

# Iconify para React

O **Iconify** oferece componentes de ícones nativos para várias estruturas de IU populares.

Quais são as vantagens sobre outros componentes de ícone?

* Uma sintaxe para mais de 200.000 ícones de mais de 150 conjuntos de ícones. 
* Renderiza SVG. 
* Carrega ícones sob demanda. Não há necessidade de agrupar ícones, o componente carregará automaticamente os dados de ícones para ícones que você usa da API do Iconify.

**Passo a passo para instalação:** [https://iconify.design/docs/icon-components/react/](https://iconify.design/docs/icon-components/react/)

**lista de icones** [https://icones.js.org/collection/all](https://icones.js.org/collection/all)

# useState

Em React, ```useState``` é um hook que permite adicionar estado a componentes funcionais, retornando um valor e uma função para atualizá-lo. Para usar, importe-o, declare o estado com ```const [valor, setValor] = useState(valorInicial)```, e use ```setValor()``` para atualizar. 

### Importação e Declaração:

Importe o hook: 
~~~js
import { useState } from 'react'; 
~~~

Declare o estado:

~~~js
const [count, setCount] = useState(0); // Inicializa o estado com 0 
const [nome, setNome] = useState('João'); // Inicializa com uma string 
const [lista, setLista] = useState([]); // Inicializa com um array vazio 
~~~

Atualizando o Estado:
Chame a função de atualização: ```setCount(novoValor) ```

~~~js
setCount(count + 1); // Incrementa o contador 
setNome('Maria'); // Atualiza o nome 
setLista([...lista, 'novo item']); // Adiciona um item à lista 
~~~

# JSX

### JSX - Eventos

[https://www.w3schools.com/react/react_events.asp](https://www.w3schools.com/react/react_events.asp)

### JSX - Condicionais

[https://www.w3schools.com/react/react_conditional_rendering.asp](https://www.w3schools.com/react/react_conditional_rendering.asp)

### JSX - Renderização de listas

[https://www.w3schools.com/react/react_lists.asp](https://www.w3schools.com/react/react_lists.asp)
