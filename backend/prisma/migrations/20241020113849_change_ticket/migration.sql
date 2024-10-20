/*
  Warnings:

  - Added the required column `description` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodPreference` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "foodPreference" TEXT NOT NULL;
