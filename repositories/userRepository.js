const prisma = require('../lib/prisma');

async function findByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

async function create(data) {
  return prisma.user.create({ data });
}

module.exports = { findByEmail, create };