import { sprintf } from 'sprintf-js';

export class Dice {
    private language: string = 'en';

    private messages: any = {
        en: {
            rolling: 'Rolling %sd%s...\n',
            diceRoll: "Dice %d rolled %d .",
            roll: "Roll %s rolled %d ."
        },
        'pt-br': {
            rolling: 'Lançando %sd%s...\n',
            diceRoll: "Dado %d rolou %d .",
            roll: "Rolagem %s rolou %d ."
        }
    }
    
    constructor(language: string = 'en') {
        this.language = language;
    }

    roll(roll = 'd6') {

        const [dices, sides] :any = roll.split('d').map((v, i) => v || (i === 0 ? 1 : 6));
        
        console.log(sprintf(this.messages[this.language]?.rolling, dices, sides));
        
        let total = 0;
        for (let i = 0; i < dices; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            console.log(sprintf(this.messages[this.language]?.diceRoll, (i + 1), roll));

            total += roll;
        }
        
        console.log(sprintf(this.messages[this.language]?.roll, roll, total));
    }
}
  