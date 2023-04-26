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
        },
        es: {
            rolling: 'Lanzando %sd%s...\n',
            diceRoll: "Dado %d rodó %d .",
            roll: "Rodaje %s rodó %d ." 
        },
        fr: {
            rolling: 'Roulant %sd%s...\n',
            diceRoll: "Dé %d roulé %d .",
            roll: "Rouleau %s roulé %d ."
        },
        de: {
            rolling: 'Rolling %sd%s...\n',
            diceRoll: "Würfel %d rollte %d .",
            roll: "Rolle %s rollte %d ."
        },
        it: {
            rolling: 'Rotolando %sd%s...\n',
            diceRoll: "Dado %d rotolato %d .",
            roll: "Rotolo %s rotolato %d ."
        },
        ru: {
            rolling: 'Бросок %sd%s...\n',
            diceRoll: "Кубик %d брошен %d .",
            roll: "Рулон %s брошен %d ."
        },
        ja: {
            rolling: 'ローリング %sd%s...\n',
            diceRoll: "ダイス %d が %d になりました。",
            roll: "ロール %s が %d になりました。"
        },
        ko: {
            rolling: '롤링 %sd%s...\n',
            diceRoll: "다이스 %d %d .",
            roll: "롤 %s %d ."
        },
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
  