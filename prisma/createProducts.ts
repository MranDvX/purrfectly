import type { PrismaClient } from '@prisma/client';

export async function createProducts(prisma: PrismaClient) {
  const product1 = await prisma.product.create({
    data: {
      name: 'Plumero de colores',
      description:
        'Este juguete para gatos cuenta con una variedad de plumas salvajes y divertidas que despiertan el instinto depredador de tu felino. Además, las plumas son reales y emiten un sonido de papel crepitante al ser tocadas, lo que lo hace aún más atractivo para tu mascota.',
      price: 1.99,
      category: 'Cañas y plumeros',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/plumero_1_xfggqc.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/plumero_2_rwnc7d.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/plumero_3_klilf2.webp',
          },
        ],
      },
    },
  });
  const product2 = await prisma.product.create({
    data: {
      name: 'Rascador esquina',
      description:
        'Este práctico rascador para gatos ha sido diseñado para adaptarse perfectamente a la esquina de cualquier habitación, permitiendo a tu mascota afilar sus uñas de manera segura y sin dañar tus muebles. Con una superficie de sisal resistente y duradera, este rascador ofrece a tu felino un lugar específico donde satisfacer su necesidad natural de rascar, mientras que su tamaño compacto lo hace ideal para hogares con espacio limitado. Además, su color neutro lo hace fácil de integrar en cualquier decoración.',
      price: 1.99,
      category: 'Rascadores',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/rascador_esquinero_1_zryxsh.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/rascador_esquinero_2_uz4xyt.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/rascador_esquinero_3_ssodnn.webp',
          },
        ],
      },
    },
  });
  const product3 = await prisma.product.create({
    data: {
      name: 'Peluche de patito',
      description:
        'Este adorable peluche de patito es perfecto para que tu mascota juegue y se divierta. Fabricado con materiales suaves y resistentes, es seguro para que lo muerdan, lo abracen o lo acurruquen, ofreciéndole horas de entretenimiento y diversión.',
      price: 1.99,
      category: 'Peluches',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/peluche_1_uvt240.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/peluche_2_fzvxj4.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/peluche_3_v8cmb5.webp',
          },
        ],
      },
    },
  });
  const product4 = await prisma.product.create({
    data: {
      name: 'Pez eléctrico',
      description:
        'Este juguete para gatos emite sonidos y luces que imitan a un pez eléctrico, despertando el instinto cazador de tu mascota. Con un diseño realista y una textura suave, es seguro para que tu gato lo muerda y lo agarre, lo que lo convierte en el juguete perfecto para satisfacer sus necesidades de juego y ejercicio.',
      price: 1.99,
      category: 'Juguetes para gatos',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/pez_1_t5ssq6.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/pez_2_bcnerc.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/pez_3_ljxsza.webp',
          },
        ],
      },
    },
  });
  const product5 = await prisma.product.create({
    data: {
      name: 'Juguete interactivo con pelota',
      description:
        'Este divertido juguete interactivo para gatos ofrece una experiencia de juego única y emocionante para tu mascota. Con diferentes niveles y elementos que estimulan su curiosidad y habilidades de caza, este juguete ayuda a mantener a tu gato activo y entretenido, lo que a su vez ayuda a prevenir el aburrimiento y la obesidad.',
      price: 1.99,
      category: 'Juguetes interactivos',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/interactivo_1_gafeph.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/interactivo_2_av79la.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347477/images/interactivo_3_pcva07.webp',
          },
        ],
      },
    },
  });
  const product6 = await prisma.product.create({
    data: {
      name: 'Caña con ratón',
      description:
        'Esta caña de juguete para gatos cuenta con un ratón de peluche colgado de una cuerda, lo que permite a tu mascota perseguir, saltar y cazar su presa imaginaria. Con una longitud y diseño perfectos para que tanto tú como tu gato puedan jugar juntos, es un juguete ideal para fortalecer el vínculo entre dueño y mascota.',
      price: 1.99,
      category: 'Cañas y plumeros',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/raton_1_eu89ea.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/raton_2_punctf.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/raton_3_xn8nj3.webp',
          },
        ],
      },
    },
  });
  const product7 = await prisma.product.create({
    data: {
      name: 'Rascador en poste',
      description:
        'Este rascador de poste para gatos ofrece un lugar seguro y apropiado para que tu mascota afilar sus uñas y satisfacer su necesidad natural de rascar. Con una altura perfecta para que tu gato estire todo su cuerpo, este rascador ayuda a mantener sus garras saludables y evita que dañe tus muebles. Además, su superficie de sisal resistente y duradera lo hace perfecto para que tu gato lo use durante años.',
      price: 1.99,
      category: 'Rascadores',
      images: {
        create: [
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/rascador_poste_1_tegnqv.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/rascador_poste_2_g7dv41.webp',
          },
          {
            url: 'https://res.cloudinary.com/dfp8qzzku/image/upload/v1677347478/images/rascador_poste_3_dmylj5.webp',
          },
        ],
      },
    },
  });

  const shoppableConfig = {
    startState: 'open',
    autoClose: 2,
    bannerMsg: ' ',
    transformation: {
      quality: 'auto:eco',
      fetch_format: 'auto',
      crop: 'pad',
      aspect_ratio: '1',
    },
  };

  await prisma.video.createMany({
    data: [
      {
        publicId: 'videos/plumero_kkcmm3',
        category: 'featured',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: product1.id,
                productName: 'Plumero',
                startTime: 0,
                endTime: 11,
                publicId: 'images/plumero_1_xfggqc',
                hotspots: [
                  {
                    time: '00:08',
                    x: '43%',
                    y: '55%',
                    tooltipPosition: 'left',
                    clickUrl: '/adopt/1',
                  },
                ],
                onHover: {
                  action: 'overlay',
                  args: 'Plumero',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product1.id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/rascador_esquinero_to6sew',
        category: 'featured',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: product2.id,
                productName: 'Rascador esquina',
                startTime: 0,
                endTime: 8,
                publicId: 'images/rascador_esquinero_1_zryxsh',
                onHover: {
                  action: 'overlay',
                  args: 'Rascador esquina',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product2.id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/peluche_qkzj8t',
        category: 'featured',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: product3.id,
                productName: 'Peluche patito',
                startTime: 0,
                endTime: 6,
                publicId: 'images/peluche_1_uvt240',
                onHover: {
                  action: 'overlay',
                  args: 'Peluche patito',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product3.id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/pez_lxzexl',
        category: 'best-sellers',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: product4.id,
                productName: 'Pez eléctrico',
                startTime: 0,
                endTime: 30,
                publicId: 'images/pez_1_t5ssq6',
                onHover: {
                  action: 'overlay',
                  args: 'Pez eléctrico',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product4.id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/interactivo_dpqriz',
        category: 'best-sellers',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: product5.id,
                productName: 'Juguete interactivo',
                startTime: 0,
                endTime: 10,
                publicId: 'images/interactivo_1_gafeph',
                onHover: {
                  action: 'overlay',
                  args: 'Juguete interactivo',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product5.id}`,
                  },
                },
              },
            ],
          },
        },
      },
      {
        publicId: 'videos/rascador_poste_yn6pal',
        category: 'best-sellers',
        options: {
          shoppable: {
            ...shoppableConfig,
            products: [
              {
                productId: product6.id,
                productName: 'Caña con ratón',
                startTime: 0,
                endTime: 8,
                publicId: 'images/raton_2_punctf',
                onHover: {
                  action: 'overlay',
                  args: 'Caña con ratón',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product6.id}`,
                  },
                },
              },
              {
                productId: product7.id,
                productName: 'Rascador poste',
                startTime: 8,
                endTime: 16,
                publicId: 'images/rascador_poste_1_tegnqv',
                onHover: {
                  action: 'overlay',
                  args: 'Rascador poste',
                },
                onClick: {
                  action: 'goto',
                  args: {
                    url: `/product/${product7.id}`,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  });
}