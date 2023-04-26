"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
class Dice {
    roll(roll = 'd6') {
        const [dices, sides] = roll.split('d').map((v, i) => v || (i === 0 ? 1 : 6));
        console.log('Rolling ' + dices + 'd' + sides + '...');
        let total = 0;
        for (let i = 0; i < dices; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            console.log('Dice ' + (i + 1) + ' rolled ' + roll + '!');
            total += roll;
        }
        console.log(dices + 'D' + sides + ' rolled ' + total + '!');
    }
}
exports.Dice = Dice;
