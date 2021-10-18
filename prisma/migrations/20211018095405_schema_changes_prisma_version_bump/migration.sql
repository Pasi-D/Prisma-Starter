-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TagsOnPosts` DROP FOREIGN KEY `TagsOnPosts_ibfk_2`;

-- DropForeignKey
ALTER TABLE `TagsOnPosts` DROP FOREIGN KEY `TagsOnPosts_ibfk_1`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Profile` RENAME INDEX `Profile.username_unique` TO `Profile_username_key`;

-- RenameIndex
ALTER TABLE `Profile` RENAME INDEX `Profile_userId_unique` TO `Profile_userId_key`;

-- RenameIndex
ALTER TABLE `Tag` RENAME INDEX `Tag.name_unique` TO `Tag_name_key`;

-- RenameIndex
ALTER TABLE `User` RENAME INDEX `User.email_unique` TO `User_email_key`;
