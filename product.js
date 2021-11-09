class Product {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }
    print() {
        console.log("Product: " + this.name, this.amount)
    }
}

class ProdDB {
    constructor() {
        this.db = []
    }
    addProd(prod) {
        this.db.push(prod)
    }
    removeProd(name) {
        this.db = this.db.filter(item => name !== item.name)
    }
    findProd(name) {
        return this.db.find(item => item.name === name);
    }
    getAll() {
        return this.db;
    }
}

class ProdManager {
    constructor(prodDb) {
        this.prodDb = prodDb;
    }
    createProd(name, amount) {
        const prod = new Product(name, amount)
        this.prodDb.addProd(prod)
        return prod
    }

    getProds() {
        return this.prodDb.getAll()
    }

    getProd(name) {
        return this.prodDb.findProd(name)
    }

    deleteProd(name) {
        this.prodDb.removeProd(name)
    }

}

module.exports = {Product, ProdDB, ProdManager}