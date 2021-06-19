import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
    const Martin = await prisma.user.upsert({
        where: { email: "robert@martin.com" },
        update: {},
        create: {
            email: "robert@martin.com",
            username: "Uncle_Bob",
            posts: {
                create: {
                    title: "Clean Code",
                    content:
                        "But if code isn’t clean, it can bring a development organization to its knees.",
                },
            },
        },
    });
    console.log({ Martin });
};

main()
    .catch((error) => {
        console.error(error);
        process.exit();
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
