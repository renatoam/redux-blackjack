# Blackjack

## Desenvolvimento

// explicar

## Objetivo do jogo

O objetivo do jogo é ganhar do croupier, superando-o em valor de pontos sem ultrapassar 21 ou vendo-o ultrapassar 21. Quem passa de 21 perde.  

## Regras

### Valor das cartas

- Cada carta numerada de 2 a 10 tem o seu valor nominal (igual ao número da carta)
- Os valetes, as damas e os reis - as figuras - , têm o valor de 10 pontos
- O Ás vale 1 ponto ou 11 pontos, à escolha do jogador

### Distribuição

- O jogador recebe duas cartas viradas para cima
- O Croupier recebe duas cartas, uma virada para cima e outra para baixo
- Se o jogador tiver um blackjack (21), irá ganhar o jogo, a menos que o croupier também tenha

### Jogador

- O croupier pergunta se o jogador deseja mais alguma carta além das duas recebidas
- O jogador pode pedir (hit) quantas cartas quiser, desde que não exceda 21
- Se estiver satisfeito, o jogador pede para ficar (stand) e é a vez do croupier

### Croupier

- O croupier revela sua carta escondida e há verificação de vencedor; se não houver, segue o jogo
- O croupier irá tirar cartas até que ultrapasse 21, perdendo o jogo, até que chegue a 21, vencendo o jogo, ou até que chegue em 17*, pedindo para ficar (stand)

> Na maioria dos casinos, o croupier deve continuar a tirar até que obtenha um valor de pelo menos 17, aí ficará.

## O jogo

1. User e Croupier recebem 2 cartas, uma das cartas do Croupier é virada
2. Verifica se o User conseguiu Blackjack
3. User começa pedindo cartas (ou passando a vez)
4. Vez do Croupier, pega carta ou passa a vez
5. Volta pro User
6. Compara pontos e revela vencedor
7. Novo jogo

## Componentes

### Card

Serão componentes que representarão todas as cartas do baralho.

### Player

Os players serão o usuário e o croupier, ou seja, duas instâncias do componente.

### Deck

O deck é o conjunto de cartas, ou seja, um componente que usa um array de componentes card.

### Match

Componente principal que vai controlar o jogo.

## Páginas

### Introdução

### Home

### Jogo
