import { AppState } from "../AppState.js";
import { Snack } from "../models/vendr.js";
import { SnacksController } from "../controllers/snackController.js";


class snackService {

    addMoney() {
        AppState.money += .25
    }

}