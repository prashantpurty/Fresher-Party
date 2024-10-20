const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient({ log: ["query"] });

module.exports = { prismaClient };
