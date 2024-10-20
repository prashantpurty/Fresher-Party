-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "redeemedAt" TIMESTAMP(3),
ADD COLUMN     "redeemedBy" TEXT;
