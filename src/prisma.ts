import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  // A cada operação que o prisma faça no banco de dados para aparecer no log (terminal => console.log)
  log: ['query']
});