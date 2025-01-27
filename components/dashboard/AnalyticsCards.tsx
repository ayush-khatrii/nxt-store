import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Package, ShoppingCart, Users, TrendingUp, Clock, User, Box } from 'lucide-react';

export default function AnalyticsCards() {

  const cards = [
    {
      title: "Total Profit",
      value: "2523413",
      change: "32% compared to last month",
      icon: TrendingUp,
      trend: "positive"
    },
    {
      title: "Total Revenue",
      value: "4523189",
      change: "+20.1% from last month",
      icon: DollarSign,
      trend: "positive"
    },
    {
      title: "Total Orders",
      value: "+5773",
      change: "+12.5% from last month",
      icon: Package,
      trend: "positive"
    },
    {
      title: "Total Products",
      value: "+5773",
      change: "+12.5% from last month",
      icon: Box,
      trend: "positive"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index} className="relative hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
            <div className="bg-zinc-100 rounded-full">
              <card.icon className="h-4 w-4 text-zinc-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-3xl font-bold tracking-tight">
                {`${new Intl.NumberFormat('en-IN',).format(Number(card.value))}`}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs ${card.trend === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
                >
                  {card.change}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}