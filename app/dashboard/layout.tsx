import { ReactNode } from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import { noto_sans } from "@/font/font";
import { Providers } from "../providers";

export default function DashboardLayout({ children }: { children: ReactNode }) {
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