const EventEmitter = require("events")

class Sales extends EventEmitter {
  constructor() {
    super() // get access to all the methods of the parent class
  }
}

const myEmitter = new Sales()

myEmitter.on("newSale", () => {
  console.log("There was a new sale!")
})

myEmitter.on("newSale", () => {
  console.log("Customer name: Stacy")
})

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`)
})

myEmitter.emit("newSale", 9)

////////////////////

