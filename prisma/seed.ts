import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { createProducts } from './createProducts';

const prisma = new PrismaClient();

async function seed() {
  const email = 'isantos@remix.run';

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.video.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.product.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });
  await prisma.image.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash('isantos', 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: 'My first note',
      body: 'Hello, world!',
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: 'My second note',
      body: 'Hello, world!',
      userId: user.id,
    },
  });

  await createProducts(prisma);

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
