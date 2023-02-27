# DiceJS 

## What is DiceJS?

DiceJS is a JavaScript library for rolling dice. It is designed to be as simple as possible, while still being powerful enough to handle most use cases.

## How do I use DiceJS?

### Installation

DiceJS is available on npm. To install it, run the following command:

    npm install dicejs

### Usage

DiceJS is designed to be as simple as possible. To roll a dice, use the `roll` function:

    const { roll } = require('dicejs');
    const result = roll('2d6 + 4');

The `roll` function takes a string as an argument, which is the dice expression to roll.