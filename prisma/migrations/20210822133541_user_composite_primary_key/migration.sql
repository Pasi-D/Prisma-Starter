/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `authorFirstName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorLastName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- DropIndex
DROP INDEX `User.username_unique` ON `User`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `authorId`,
    ADD COLUMN `authorFirstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `authorLastName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `username`,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`firstName`, `lastName`);

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `userFirstName` VARCHAR(191) NOT NULL,
    `userLastName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Profile.username_unique`(`username`),
    UNIQUE INDEX `Profile_userFirstName_userLastName_unique`(`userFirstName`, `userLastName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`authorFirstName`, `authorLastName`) REFERENCES `User`(`firstName`, `lastName`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD FOREIGN KEY (`userFirstName`, `userLastName`) REFERENCES `User`(`firstName`, `lastName`) ON DELETE CASCADE ON UPDATE CASCADE;
