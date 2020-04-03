const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: 'nate',
    email: 'nateD@example.com',
    password: 'hellomynameisnate'
  }).expect(201)
})