# Aula 06 (26/03) 

# Template Projeto - React + Vite

[link](https://github.com/mmamorim/bootstrapreact)

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
