game.splash("Let's calculate a pizza cost")
let diameter = game.askForNumber("What is the diameter")
let materials = diameter * 0.5
game.splash("Materials cost is", "$" + materials)
game.splash("It gets multiplied by labour cost and rent on the shop ")
let subtotal = 0.75 + (1 + materials)
game.splash("The subtotal is ", "$" + subtotal)
game.splash("the subtotal is added with the HST to get the total cost")
let HST = 0.13
let total = subtotal + 1 * HST
game.splash("The total cost of the pizza is", "$" + total)
