/*
  Warnings:

  - A unique constraint covering the columns `[nominatedBy]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `nominatedBy` INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX `User_nominatedBy_unique` ON `User`(`nominatedBy`);

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`nominatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
