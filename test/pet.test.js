const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Pet = require('../models/pet.model');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('PUT /pets/:id', () => {
  it('should update a pet successfully', async () => {
    const pet = await Pet.create({
      name: 'Firulais',
      breed: 'Beagle',
      age: 4,
      healthStatus: 'Good',
      description: 'Friendly beagle',
      location: 'Quito',
      images: [],
    });

    const res = await request(app)
      .put(`/pets/${pet._id}`)
      .send({ age: 5 });

    expect(res.statusCode).toBe(200);
    expect(res.body.age).toBe(5);
  });
});
