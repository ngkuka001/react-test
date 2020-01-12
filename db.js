var faker = require('faker');

module.exports = () => {
    const data = { todos: [], users: [] }
    for (let i = 0; i < 10; i++) {
        data.todos.push({
            id: faker.random.uuid(),
            text: faker.commerce.productName(),
            completed: faker.random.boolean(),
            category: faker.commerce.product(),
            description: faker.lorem.paragraph(),
        })
    }

    for (let i = 0; i < 5; i++) {
        data.users.push({
            id: faker.random.uuid(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: faker.random.arrayElement(['user','admin'])
        })
    }

    return data 
}
