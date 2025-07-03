# Desafio de Projeto: Mario Kart.JS (Básico) 🏎️💨

![Status](https://img.shields.io/badge/status-concluído-green)
![Linguagem](https://img.shields.io/badge/linguagem-JavaScript-yellow?logo=javascript)
![Ambiente](https://img.shields.io/badge/ambiente-Node.js-green?logo=node.js)

Este é um repositório para o desafio de projeto do curso, com foco na criação de uma lógica básica para simular corridas de Mario Kart utilizando **Node.js** e **JavaScript** puros.

***

## 🏁 Sobre o Desafio

O objetivo deste projeto é desenvolver uma lógica de programação simples para simular corridas de Mario Kart no console. Serão considerados alguns personagens com atributos básicos e uma mecânica simplificada de corrida com diferentes tipos de pistas e confrontos. Este projeto visa aplicar os fundamentos de JavaScript e lógica de programação.

***

## ✨ Funcionalidades (Implementação Básica)

-   **Seleção de Personagens:** Escolha automática de dois personagens para a corrida.
-   **Pista Aleatória:** Definição de uma pista com um número fixo de rodadas (5).
-   **Blocos de Pista:** Sorteio aleatório de tipos de blocos de pista a cada rodada (Reta, Curva, Confronto).
-   **Mecânica de Corrida Simplificada:**
    -   **Reta:** Simulação de disputa baseada na soma de um dado aleatório e o atributo de Velocidade.
    -   **Curva:** Simulação de disputa baseada na soma de um dado aleatório e o atributo de Manobrabilidade.
    -   **Confronto:** Simulação de disputa baseada na soma de um dado aleatório e o atributo de Poder, com perda de ponto para o perdedor.
-   **Pontuação:** Acompanhamento da pontuação de cada personagem ao longo da corrida.
-   **Condição de Vitória:** Determinação do vencedor ao final das rodadas com base na maior pontuação.
-   **Restrição de Pontuação:** Garantia de que nenhum jogador tenha pontuação negativa.

***

## 🛠️ Tecnologias Utilizadas

-   `Node.js`
-   `JavaScript` (puro)

***

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar a simulação da corrida localmente.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina.

### Instalação e Execução

1.  Clone o repositório (quando ele estiver criado):
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd [nome-do-seu-repositorio]
    ```

3.  Execute o script principal:
    ```bash
    node index.js
    ```
    *(Assumindo que o arquivo principal da sua lógica será `index.js`)*

***

## 🕹️ Regras & Mecânicas Implementadas

**Jogadores:**

-   [x] O computador selecionará dois personagens aleatoriamente para a corrida.

**Pistas:**

-   [x] Os personagens correrão em uma pista com 5 rodadas.
-   [x] A cada rodada, será sorteado um bloco da pista: Reta, Curva ou Confronto.
    -   [x] **Reta:** Um dado de 6 lados é jogado e somado à Velocidade de cada personagem. Quem tiver a maior soma ganha 1 ponto.
    -   [x] **Curva:** Um dado de 6 lados é jogado e somado à Manobrabilidade de cada personagem. Quem tiver a maior soma ganha 1 ponto.
    -   [x] **Confronto:** Um dado de 6 lados é jogado e somado ao Poder de cada personagem. Quem tiver a menor soma perde 1 ponto.
    -   [x] A pontuação de nenhum jogador será menor que 0.

**Condição de vitória:**

-   [x] Ao final das 5 rodadas, o personagem com a maior pontuação será declarado o vencedor.

***

## 👨‍💻 Autor


Desenvolvido por **Arthur Lago Martins**.
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arthur-martins-510b36235/)
