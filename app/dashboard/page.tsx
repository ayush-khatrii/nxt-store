import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import DashboardNav from "@/components/dashboard/DashboardNav";
import SalesChart from "@/components/dashboard/Saleschart";
import OrderStatus from "@/components/dashboard/Orderstatus";

export default function page() {
  return (
    <section>
      <DashboardNav />
      <div className="mx-4 my-3">
        <AnalyticsCards />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div className="col-span-2">
            <SalesChart />
          </div>
          <div className="">
            <OrderStatus />
          </div>
        </div>
      </div>
    </section>
  )
}
