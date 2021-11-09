class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    print() {
        console.log("User: " + this.name, this.age)
    }
}

class UserDB {
    constructor() {
        this.db = []
    }
    addUser(user) {
        this.db.push(user)
    }
    removeUser(name) {
        this.db = this.db.filter(item => name !== item.name)
    }
    findUser(name) {
        return this.db.find(item => item.name === name);
    }
    getAll() {
        return this.db;
    }
}

class UserManager {
    constructor(userDb) {
        this.userDb = userDb;
    }
    createUser(name, age) {
        const user = new User(name, age)
        this.userDb.addUser(user)
        return user
    }

    getUsers() {
        return this.userDb.getAll()
    }

    getUser(name) {
        return this.userDb.findUser(name)
    }

    deleteUser(name) {
        this.userDb.removeUser(name)
    }

}

module.exports = {User, UserDB, UserManager}