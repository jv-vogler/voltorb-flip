# [Voltorb Flip](https://voltorbflip.vercel.app/)

[![en](https://img.shields.io/badge/README%20in-english-red.svg)](../main/README.md)

Voltorb Flip é um minigame dos Game Corners de Goldenrod e Celadon nas versões Coreanas e Ocidentais dos jogos Pokémon HeartGold e SoulSilver.

### [**Jogue no navegador**](https://voltorbflip.vercel.app/)

## Como jogar

- Cada linha e coluna tem um número total de Moedas e Voltorbs mostrados nos cartões coloridos.
- O objectivo é revelar todas as Moedas x2 e x3 Coins evitando os Voltorbs.

## Ferramentas utilizadas

[<img alt="Visual Studio Code" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />](https://code.visualstudio.com/ 'Visual Studio Code')
[<img  alt="ReactJS" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />](https://reactjs.org/ 'ReactJS')
[<img  alt="TypeScript" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />](https://www.typescriptlang.org/ 'TypeScript')
[<img  alt="Next.js" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />](https://nextjs.org/ 'Next.js')
[<img  alt="Tailwindcss" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />](https://tailwindcss.com/ 'Tailwindcss')

VSCode | React | TypeScript | Next.js | Tailwindcss

## Sobre o projeto

O objetivo desse projeto foi recriar o jogo semelhante a cassino integrando **Typescript** e **React** através de **Next.js**. A lógica principal do jogo, que foi criada do zero, está encapsulada dentro de _VoltorbFlip.ts_, _Board.ts_ e _Level.ts_, e é armazenada dentro de um estado React para ser consumida pela UI.

A UI do jogo foi recriada usando apenas **Tailwindcss** (o único gráfico que usei foi o sprite de Voltorb).

### **VoltorbFlip.ts**

<table>
<tr>
<td>
flipCell(row: number, col: number) => void
</td>
<td>
 vira a célula na posição determinada
</td>
</tr>

<tr>
<td>
restartGame() => void
</td>
<td>
 reinicia o nível
</td>
</tr>

<tr>
<td>
gameStatus
</td>
<td>
 retorna 'playing' | 'lose' | 'win' | 'memo'
</td>
</tr>

<tr>
<td>
currentLevel
</td>
<td>
 retorna o nível atual (1~8)
</td>
</tr>

<tr>
<td>
currentScore
</td>
<td>
 retorna o placar atual
</td>
</tr>

<tr>
<td>
totalScore
</td>
<td>
 retorna o placar total
</td>
</tr>

</table>

### **Board.ts**

<table>
<tr>
<td>
flippedCells
</td>
<td>
 células viradas nesse nível
</td>
</tr>

<tr>
<td>
rowValues
</td>
<td>
 número de Moedas e Voltorbs por linha
</td>
</tr>

<tr>
<td>
colValues
</td>
<td>
 número de Moedas e Voltorbs por coluna
</td>
</tr>

<tr>
<td>
cells
</td>
<td>
 retorna uma array 2D de Cells
</td>
</tr>

<tr>
<td>
maxLevelScore
</td>
<td>
 placar máximo possível nesse nível
</td>
</tr>

</table>

## Créditos

As imagens de Pokémon usadas nesse jogo e o conceito original do jogo Voltorb Flip pertencem à Nintendo. Esse jogo foi criado somente para fins educacionais e não tem intenção de uso comercial.

## Licença

Licença [MIT](https://choosealicense.com/licenses/mit/).
Todos os direitos reservados &copy; 2023 JV Vogler.
