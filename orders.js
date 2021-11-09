class Order {
    constructor(product, user) {
        this.product = product
        this.user = user
        this.date = new Date()
    }
    print() {
        const pname = this.product.name
        const uname = this.user.name
        const date = this.date.toLocaleString()
        console.log(`Order: ${pname}, by ${uname}, at ${date}`)
    }
}

class OrderDB {
    constructor() {
        this.db = []
    }
    addOrder(order) {
        this.db.push(order)
    }
    removeOrder(date) {
        this.db = this.db.filter(item => item.date.getTime() !== date.getTime())
    }
    findOrder(date) {
        return this.db.find(item => item.date.getTime() === date.getTime());
    }
    findOrdersByUser(user) {
        return this.db.find(item => item.user.name === user.name)
    }
    finOrdersByUserAndProd(user, prod) {
        return this.db.find(item => 
            item.user.name === user.name && item.prod.name === prod.name)
    }

    deleteOrdersForUser(user) {
        this.db = this.db.filter(item => item.user.name !== user.name)
    }

    deleteOrdersForUserAndProd(user, prod) {
        this.db = this.db.filter(item => 
            item.user.name !== user.name && item.prod.name !== prod.name)
    }

    getAll() {
        return this.db;
    }
}


class OrderManager {
    constructor(orderDb) {
        this.orderDb = orderDb
    }
    createOrder(user, prod) {
        const order = new Order(prod, user)
        this.orderDb.addOrder(order)
        return order
    }

    getOrdersForUser(user) {
        return this.orderDb.findOrdersByUser(user)
    }

    getOrdersForUserAndProduct(user, prod) {
        return this.orderDb.finOrdersByUserAndProd(user, prod)
    }

    deleteOrders(user) {
        this.orderDb.deleteOrderForUser(user)
    }

    deleteOrders(user, prod) {
        this.orderDb.deleteOrdersForUserAndProd(user, prod)
    }
}

module.exports = {Order, OrderDB, OrderManager}