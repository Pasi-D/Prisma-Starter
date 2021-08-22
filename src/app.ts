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

        console.log(`Query Result : ${JSON.stringify(result)}`);
        process.exit();
    }
}

export default App;
