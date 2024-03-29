import { AppState } from '../AppState.js';




export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.quantity = data.quantity
        this.imgUrl = data.imgUrl
    }

    get snackCardTemplate() {
        return `
   <div class="card col-12">
   <div class="card-body">
					<span class="row">
						<h5 class="card-title">${this.name}</h5>
						<p class="card-text">$${this.price}</p>
					</span>
   </div>`
    }

}

