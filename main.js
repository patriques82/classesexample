const {UserDB, UserManager} = require('./user.js');
const {ProdDB, ProdManager} = require('./product.js')
const {OrderManager, OrderDB} = require('./orders.js')

const main = () => {

    // Users grejor
    const userDb = new UserDB();
    const userManeger = new UserManager(userDb);
    const pelle = userManeger.createUser("Pelle", 13);
    const kajsa = userManeger.createUser("Kajsa", 55);
    const mio = userManeger.createUser("Mio", 77);

    // Products grejor
    const prodDb = new ProdDB()
    const prodManeger = new ProdManager(prodDb)
    const soffa = prodManeger.createProd("Soffa", 30)
    const stol = prodManeger.createProd("Stol", 2)
    const sprit = prodManeger.createProd("Sprit", 10)

    // Order grejor
    const orderDb = new OrderDB();
    const orderManager = new OrderManager(orderDb)
    const soffOrder1 = orderManager.createOrder(pelle, soffa)
    const soffOrder2 = orderManager.createOrder(pelle, soffa)
    const soffOrder3 = orderManager.createOrder(kajsa, soffa)
    const spritOrder = orderManager.createOrder(kajsa, sprit)
    const stolOrder = orderManager.createOrder(mio, stol)

    soffOrder1.print()
    soffOrder2.print()
    soffOrder3.print()
    spritOrder.print()
    stolOrder.print()

    
}

main()