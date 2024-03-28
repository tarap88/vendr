import { AppState } from '../AppState.js';




export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.quantity = data.quantity
        this.imgUrl = data.imgUrl
    }

    get SnacksButton() {
        return `
   <div class=" p-2 d-flex justify-content-center">
   <button class="btn btn-secondary rounded-circle col-2 p-2 text-center border border-dark border-1 shadow"</button></div>`
    }

}

