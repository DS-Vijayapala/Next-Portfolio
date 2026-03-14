import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const username = process.env.ADMIN_USERNAME;
const password = process.env.ADMIN_PASSWORD;

if (!username || !password) {
  console.error("ADMIN_USERNAME and ADMIN_PASSWORD must be set in environment.");
  process.exit(1);
}

const passwordHash = await bcrypt.hash(password, 12);

await prisma.adminUser.upsert({
  where: { username },
  update: { passwordHash },
  create: { username, passwordHash },
});

console.log(`Admin user '${username}' created/updated successfully.`);
await prisma.$disconnect();

