import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class App {
    public async main(): Promise<void> {
        const result = await prisma.user.create({
            data: {
                firstName: "Harper",
                lastName: "Lee",
                email: "Harper@lee.com",
                posts: {
                    create: {
                        title: "To Kill a mocking bird",
                        content: "Shoot with a stone",
                        tags: {
                            connectOrCreate: {
                                create: {
                                    name: "novel",
                                },
                                where: {
                                    name: "novel",
                                },
                            },
                        },
                    },
                },
                following: {
                    create: {
                        email: "watterson@calvinhobbes.com",
                        firstName: "Bill",
                        lastName: "watterson",
                        posts: {
                            create: {
                                title: "Calvin & hobbes",
                                content: "Comic strip of calvin & hobbes",
                            },
                        },
                    },
                },
                followedBy: {
                    create: {
                        email: "danb@db.com",
                        firstName: "dan",
                        lastName: "brown",
                        posts: {
                            create: {
                                title: "Da Vinci Code",
                                content: "Best seller",
                            },
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
                followedBy: {
                    include: {
                        posts: true,
                    },
                },
                following: {
                    include: {
                        posts: true,
                    },
                },
            },
        });

        console.log(`Query Result : ${JSON.stringify(result)}`);
        process.exit();
    }
}

export default App;
