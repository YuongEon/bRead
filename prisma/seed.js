const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Đắc nhân tâm",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/d/a/dacnhantam_2_1_1.jpg",
        price: 89000 
      },
    });

    await prisma.products.create({
      data: {
        title: "Chiến thắng con quỷ trong bạn",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://salt.tikicdn.com/cache/w400/ts/product/30/e5/2c/7eeb7fd6a49e0648be9c9472d78467f1.jpg",
        price: 138000
      },
    });

    await prisma.products.create({
      data: {
        title: "Blockchain và đầu tư ICOs căn bản",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://thebookdata.net/wp-content/uploads/2021/02/sach-blockchain-va-dau-tu-icos-216x300.png",
        price: 99000
      },
    });

    await prisma.products.create({
      data: {
        title: "Gương phong tục",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://book365.vn/upload/thu_vien_anh/guong-phong-tuc.png",
        price: 59000
      },
    });

    await prisma.products.create({
      data: {
        title: "Lịch sử vạn vật",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://ict.ulis.vnu.edu.vn/files/uploads/2016/10/26208096962_6236423004.jpg",
        price: 129000
      },
    });

    await prisma.products.create({
      data: {
        title: "Những khám phá bí ẩn về khoa học",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://vinabook.com/product_source/detail/11/42934.jpg",
        price: 79000
      },
    });

    await prisma.products.create({
      data: {
        title: "Hello các bạn mình là Tôi Đi Code Dạo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "https://salt.tikicdn.com/cache/w1200/ts/product/e1/10/69/b8b60af313613231d144085e23f39267.jpg",
        price: 189000
      },
    });

  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();