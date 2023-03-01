import type { PrismaClient } from '@prisma/client';

export async function createAdoptables(prisma: PrismaClient) {
  await prisma.adoptable.create({
    data: {
      name: 'Cookie',
      sex: 'f',
      description:
        'Cookie es una gata de 4 años de edad con un pelaje suave y sedoso tri-color. Es una gata muy dulce y tranquila que adora pasar tiempo en los brazos de los humanos. Cookie también disfruta de las siestas en el sol y jugar con juguetes de cuerda. ¿Quieres darle a Cookie un hogar para siempre? ¡Adóptala hoy mismo!',
      category: 'Gato',
      status: 'Disponible',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677710472/images/adoptable/carey-1_n5cprf.jpg',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677710472/images/adoptable/carey-2_oa683b.jpg',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677710472/images/adoptable/carey-3_v48vmn.jpg',
          },
        ],
      },
    },
  });

  await prisma.adoptable.create({
    data: {
      name: 'Melocotón',
      sex: 'm',
      description:
        'Melocotón es un gatito naranja de 4 meses de edad. Es un gatito juguetón y curioso que le encanta explorar su entorno. Melocotón también adora recibir cariño y jugar con sus peluches. Está buscando un hogar amoroso donde pueda crecer y desarrollarse rodeado de mucho amor y atención.',
      category: 'Gato',
      status: 'Disponible',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677710472/images/adoptable/orange-kitten-1_au3qkg.jpg',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677710472/images/adoptable/orange-kitten-2_bgh7e1.jpg',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677710472/images/adoptable/orange-kitten-3_au2mnz.jpg',
          },
        ],
      },
    },
  });
}