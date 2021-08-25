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
                manager: {
                    create: {
                        email: "watterson@calvinhobbes.com",
                        firstName: "Bill",
                        lastName: "Watterson",
                        posts: {
                            create: {
                                title: "Calvin & Hobbes",
                                content: "Comic strip about calvin & hobbes",
                            },
                        },
                    },
                },
            },
            include: {
                posts: true,
                manager: {
                    include: {
                        posts: true,
                        members: true,
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
