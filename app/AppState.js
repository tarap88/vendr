import { Snack } from './models/vendr.js'

import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  snacks = [

    new Snack({ name: 'Nacho Doritos', price: 2.50, imgUrl: 'https://t4.ftcdn.net/jpg/04/18/52/25/240_F_418522520_EMqYNIFkA4V7HlFDjUXBofctOx50NIDR.jpg' }),

    new Snack({ name: 'Sample', price: 2.50, imgUrl: 'https://t4.ftcdn.net/jpg/03/93/34/65/240_F_393346541_q5l2hzfRUOeGcTLpRGJuvrgPaByPupDa.jpg' }),







  ]

  money = 0




}

export const AppState = createObservableProxy(new ObservableAppState())