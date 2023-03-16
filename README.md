# [Voltorb Flip](https://voltorbflip.vercel.app/)

[![en](https://img.shields.io/badge/README%20em-português-brightgreen.svg)](../main/README.pt.md)

Voltorb Flip is a minigame of the Goldenrod and Celadon Game Corners in the Korean and Western releases of Pokémon HeartGold and SoulSilver.

<img style="display:block; margin-left: auto; margin-right: auto" width="300px" src="/home/jv/Projects/voltorb-flip/public/images/voltorb-flip.png" />

### <div style="text-align: center">[**Play in the browser**](https://voltorbflip.vercel.app/)</div>

---

## How to play

- Each row and column has a number of Total Coins and Voltorbs displayed in the colored cards.
- The objective is to reveal all x2 and x3 Coins while avoiding Voltorbs.

## Tools used

[<img alt="Visual Studio Code" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />](https://code.visualstudio.com/ 'Visual Studio Code')
[<img  alt="ReactJS" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />](https://reactjs.org/ 'ReactJS')
[<img  alt="TypeScript" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />](https://www.typescriptlang.org/ 'TypeScript')
[<img  alt="Next.js" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />](https://nextjs.org/ 'Next.js')
[<img  alt="Tailwindcss" width="50px" style="padding-right: 10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />](https://tailwindcss.com/ 'Tailwindcss')

VSCode | React | TypeScript | Next.js | Tailwindcss

## About the project

The goal of this project was to recreate a 'casino-like' game integrating **Typescript** and **React** through **Next.js**. The main game logic, which was created from scratch, is encapsulated inside _VoltorbFlip.ts_, _Board.ts_ and _Level.ts_, and is stored in a React state to be consumed by the UI.

The game's UI was recreated using only **Tailwindcss** (the only graphic asset I used is the Voltorb sprite).

<img src="/home/jv/Projects/voltorb-flip/public/images/comparison.png" />

## Methods and Properties

<table>
<tr>
<td>
flipCell(row: number, col: number) => void
</td>
<td>
 flips cell at given position
</td>
</tr>

<tr>
<td>
restartGame() => void
</td>
<td>
 restarts the level
</td>
</tr>

<tr>
<td>
gameStatus
</td>
<td>
 returns 'playing' | 'lose' | 'win' | 'memo'
</td>
</tr>

<tr>
<td>
currentLevel
</td>
<td>
 returns the current level (1~8)
</td>
</tr>

<tr>
<td>
currentScore
</td>
<td>
 returns the current score
</td>
</tr>

<tr>
<td>
totalScore
</td>
<td>
 returns the total score
</td>
</tr>

<tr>
<td>
rowValues
</td>
<td>
 number of Coins and Voltorbs per row
</td>
</tr>

<tr>
<td>
colValues
</td>
<td>
 number of Coins and Voltorbs per column
</td>
</tr>

<tr>
<td>
cells
</td>
<td>
 returns a 2D array of Cells
</td>
</tr>

</table>

## Credits

The Pokémon images used in this game and the original Voltorb Flip game concept belong to Nintendo. This game is created solely for educational purposes and is not intended for commercial use.

## Licence

[MIT](https://choosealicense.com/licenses/mit/) License.
All rights reserved &copy; 2023 JV Vogler.
