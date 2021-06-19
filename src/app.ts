import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class App {
    public async main(): Promise<void> {
        const result = await prisma.user.create({
            data: { username: "Harper Lee", email: "Harper@lee.com" },
        });

        console.log(`Query Result : ${JSON.stringify(result)}`);
    }
}

export default App;
