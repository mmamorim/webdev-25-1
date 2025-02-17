![](./fiap.png)

# Web development 2025/1

# Lista Exercícios Funções

A função Math.random() retorna um número real pseudo-aleatório entre 0 até 0.99999...Assim para gerar números inteiros entre 0 até N basta usar `parseInt(Math.random()*N)`

A função javascript abaixo recebe como parâmetro um inteiro N e devolve um vetor contendo N números inteiros entre 0 a 99. 

~~~js
function buildArray(n) {
    let array = []
    for(let i=0; i<n; i++) {
        array.push(parseInt(Math.random()*100))
    }
    return array
}
~~~

Sua tarefa nesta atividade é criar um arquivo Javascript contendo a função acima para gerar vetores contendo números aleatórios para testar as seguintes funções conforme descritas abaixo.

1. Crie uma função que receba como parâmetro um vetor de inteiros, calcule a média dos valores contidos no vetor e devolva a quantidade dos números que estão acima desta média.

2. Crie uma função que receba como parâmetro um vetor de inteiros e um inteiro N. A função deve devolver um valor lógico representando se existe dois números X, Y pertencentes ao vetor que somados seja igual a N, ou seja que `X + Y = N`.


