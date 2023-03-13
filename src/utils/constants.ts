type Level = {
  x2: number
  x3: number
  voltorbs: number
  coins: number
}

export const LEVELS: Level[][] = [
  // Level 1
  [
    { x2: 3, x3: 1, voltorbs: 6, coins: 24 },
    { x2: 0, x3: 3, voltorbs: 6, coins: 27 },
    { x2: 5, x3: 0, voltorbs: 6, coins: 32 },
    { x2: 2, x3: 2, voltorbs: 6, coins: 36 },
    { x2: 4, x3: 1, voltorbs: 6, coins: 48 },
  ],
  // Level 2
  [
    { x2: 1, x3: 3, voltorbs: 7, coins: 54 },
    { x2: 6, x3: 0, voltorbs: 7, coins: 64 },
    { x2: 3, x3: 2, voltorbs: 7, coins: 72 },
    { x2: 0, x3: 4, voltorbs: 7, coins: 81 },
    { x2: 5, x3: 1, voltorbs: 7, coins: 96 },
  ],
  // Level 3
  [
    { x2: 2, x3: 3, voltorbs: 8, coins: 108 },
    { x2: 7, x3: 0, voltorbs: 8, coins: 128 },
    { x2: 4, x3: 2, voltorbs: 8, coins: 144 },
    { x2: 1, x3: 4, voltorbs: 8, coins: 162 },
    { x2: 6, x3: 1, voltorbs: 8, coins: 192 },
  ],
  // Level 4
  [
    { x2: 3, x3: 3, voltorbs: 8, coins: 216 },
    { x2: 0, x3: 5, voltorbs: 8, coins: 243 },
    { x2: 8, x3: 0, voltorbs: 10, coins: 256 },
    { x2: 5, x3: 2, voltorbs: 10, coins: 288 },
    { x2: 2, x3: 4, voltorbs: 10, coins: 324 },
  ],
  // Level 5
  [
    { x2: 7, x3: 1, voltorbs: 10, coins: 384 },
    { x2: 4, x3: 3, voltorbs: 10, coins: 432 },
    { x2: 1, x3: 5, voltorbs: 10, coins: 486 },
    { x2: 9, x3: 0, voltorbs: 10, coins: 512 },
    { x2: 6, x3: 2, voltorbs: 10, coins: 576 },
  ],
  // Level 6
  [
    { x2: 3, x3: 4, voltorbs: 10, coins: 648 },
    { x2: 0, x3: 6, voltorbs: 10, coins: 729 },
    { x2: 8, x3: 1, voltorbs: 10, coins: 768 },
    { x2: 5, x3: 3, voltorbs: 10, coins: 864 },
    { x2: 2, x3: 5, voltorbs: 10, coins: 972 },
  ],
  // Level 7
  [
    { x2: 7, x3: 2, voltorbs: 10, coins: 1152 },
    { x2: 4, x3: 4, voltorbs: 10, coins: 1296 },
    { x2: 1, x3: 6, voltorbs: 13, coins: 1458 },
    { x2: 9, x3: 1, voltorbs: 13, coins: 1536 },
    { x2: 6, x3: 3, voltorbs: 10, coins: 1728 },
  ],
  // Level 8
  [
    { x2: 0, x3: 7, voltorbs: 10, coins: 2187 },
    { x2: 8, x3: 2, voltorbs: 10, coins: 2304 },
    { x2: 5, x3: 4, voltorbs: 10, coins: 2592 },
    { x2: 2, x3: 6, voltorbs: 10, coins: 2916 },
    { x2: 7, x3: 3, voltorbs: 10, coins: 3456 },
  ],
]
