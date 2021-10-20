import prisma from "utils/prisma";

const main = async (): Promise<void> => {
    const Martin = await prisma.user.upsert({
        where: { email: "robert@cleancode.com" },
        update: {},
        create: {
            email: "robert@cleancode.com",
            firstName: "Robert",
            lastName: "Martin",
            profile: {
                create: {
                    username: "uncle_bob",
                },
            },
            posts: {
                create: {
                    title: "Clean Code",
                    content: "Writing scalable code",
                    tags: {
                        create: [
                            {
                                tag: {
                                    connectOrCreate: {
                                        create: {
                                            name: "software-engineering",
                                        },
                                        where: {
                                            name: "software-engineering",
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            },
        },
        include: {
            posts: {
                include: {
                    tags: true,
                },
            },
            profile: true,
        },
    });
    console.log(`Seeded initial user : ${JSON.stringify(Martin)}`);
};

main()
    .catch((err) => {
        console.error(err);
        process.exit();
    })
    .finally(async () => {
        prisma.$disconnect();
    });
