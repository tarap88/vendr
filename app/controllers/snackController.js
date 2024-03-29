import { Snack } from '../models/vendr.js';
import { AppState } from '../AppState.js';


export class SnacksController {
    constructor() {
        this.drawSnacksContent()
    }

    drawSnacksContent() {
        let snacks = AppState.snacks
        let snacksContent = ''
        snacks.forEach(snack => snacksContent += snack.snackCardTemplate)
        let snacksElem = document.getElementById('snacksContent')
        snacksElem.innerHTML = snacksContent
    }

}
