import { ReactNode } from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import { noto_sans } from "@/font/font";
import { Providers } from "../providers";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  if (!user || userEmail !== ADMIN_EMAIL) {
    return redirect("/");
  }
  return (
    <>
      <Providers>
        <section className="">
          <DashboardNav />
          <div className={`${noto_sans.className} px-3 py-4 h-screen`}>
            {children}
          </div>
        </section>
      </Providers>
    </>
  )
}