import prisma from "utils/prisma";

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
                            create: [
                                {
                                    tag: {
                                        connectOrCreate: {
                                            create: { name: "novel" },
                                            where: { name: "novel" },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            },
            include: {
                posts: { include: { tags: true, author: true } },
            },
        });

        console.log(`Query Result : ${JSON.stringify(result)}`);
        process.exit();
    }
}

export default App;
