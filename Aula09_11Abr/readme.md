# Aula 09 (11/04) 

# Todo List (A Revanche!)

## Antes de começar...

### Local Storage

O objeto localStorage permite acessar um valor do Storage local. 

* localStorage.setItem()
* localStorage.getItem()

Conversão de Objetos para texto
* JSON.parse()
* JSON.stringify()

### Como acessar atributos de Objetos em Javascript?

Suponha o objeto Javascript armazenado na variável ```obj```

~~~js
let obj = {
  id: "user125",
  nome: "Ana Alface",
  email: "ana@ana.com",
  endereco: {
    rua: "Av. das Alfaces",
    numero: 123
  }
}

obj.nome // "Ana Alface"
obj.endereco.rua // "Av. das Alfaces"
obj["nome"] // "Ana Alface"
obj["endereco"]["rua"] // "Av. das Alfaces"
~~~

### Como percorrer os atributos de um objeto?

Suponha o objeto Javascript armazenado na variável ```obj```

~~~js
let todos = {
    task01: {
        id: "task01",
        nome: "Alguma Tarefa",
    },
    task02: {
        id: "task02",
        nome: "Outra tarefa",
    },
    task03: {
        id: "task03",
        nome: "Mais uma tarefa",
    },
}

Object.keys(todos) // ["task01","task02","task03"]
Object.keys(todos).map((id) => {
    console.log(todos[id])
}) 
// { id: "task01", nome: "Alguma Tarefa" }
// { id: "task02", nome: "Outra tarefa" }
// { id: "task03", nome: "Mais uma tarefa" }
~~~

# UseEffect

**useEffect** é um hook que permite interceptar situações relacionadas ao ciclo de vida de um componente, como por exemplo: a montagem e desmontagem.

~~~js
useEffect(cbfunc, []); 
useEffect(() => {
    // fazAlgo
}, []); 
~~~

Quando passamos como segundo parâmetro um array vazio, então a função cbfunc é executada uma vez