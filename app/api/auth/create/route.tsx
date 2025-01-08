import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  if (!user || !user.id || user === null) {
    throw new Error("Something went wong!!");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id
    }
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.emailAddresses?.[0]?.emailAddress ?? "",
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        profileImage: user.imageUrl,
      }
    });
  }
  return NextResponse.redirect("http://localhost:3000");
}