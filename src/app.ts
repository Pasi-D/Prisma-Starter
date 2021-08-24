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
                    },
                },
                nomination: {
                    connectOrCreate: {
                        create: {
                            email: "watterson@calvinhobbes.com",
                            firstName: "Bill",
                            lastName: "Watterson",
                            posts: {
                                create: {
                                    title: "Calvin and hobbes",
                                    content: "Calvin and his imaginary friend.",
                                },
                            },
                        },
                        where: {
                            email: "watterson@calvinhobbes.com",
                        },
                    },
                },
            },
            include: {
                posts: true,
                profile: true,
                nomination: {
                    include: {
                        nominator: true,
                    },
                },
            },
        });

        console.log(`Query Result : ${JSON.stringify(result)}`);
        process.exit();
    }
}

export default App;
