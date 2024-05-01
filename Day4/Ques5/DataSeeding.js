//4. Develop a data seeding module that generates mock API responses.

const faker = require("faker");

function generateMockUserData(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        zipcode: faker.address.zipCode(),
      },
    };
    users.push(user);
  }
  return users;
}

function generateMockProductData(count = 10) {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
    };
    products.push(product);
  }
  return products;
}

module.exports = {
  generateMockUserData,
  generateMockProductData,
};
