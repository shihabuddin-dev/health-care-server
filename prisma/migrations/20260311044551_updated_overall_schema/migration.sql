-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "stripeEventId" DROP NOT NULL,
ALTER COLUMN "stripeEventId" SET DATA TYPE TEXT;
