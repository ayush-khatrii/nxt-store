"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo, useState } from "react";

const chartData = [
  { date: "2024-04-01", unitSold: 222, revenue: 150 },
  { date: "2024-04-02", unitSold: 97, revenue: 180 },
  { date: "2024-04-03", unitSold: 167, revenue: 120 },
  { date: "2024-04-04", unitSold: 242, revenue: 260 },
  { date: "2024-04-05", unitSold: 373, revenue: 290 },
  { date: "2024-04-06", unitSold: 301, revenue: 340 },
  { date: "2024-04-07", unitSold: 245, revenue: 180 },
  { date: "2024-04-08", unitSold: 409, revenue: 320 },
  { date: "2024-04-09", unitSold: 59, revenue: 110 },
  { date: "2024-04-10", unitSold: 261, revenue: 190 },
  { date: "2024-04-11", unitSold: 327, revenue: 350 },
  { date: "2024-04-12", unitSold: 292, revenue: 210 },
  { date: "2024-04-13", unitSold: 342, revenue: 380 },
  { date: "2024-04-14", unitSold: 137, revenue: 220 },
  { date: "2024-04-15", unitSold: 120, revenue: 170 },
  { date: "2024-04-16", unitSold: 138, revenue: 190 },
  { date: "2024-04-17", unitSold: 446, revenue: 360 },
  { date: "2024-04-18", unitSold: 364, revenue: 410 },
  { date: "2024-04-19", unitSold: 243, revenue: 180 },
  { date: "2024-04-20", unitSold: 89, revenue: 150 },
  { date: "2024-04-21", unitSold: 137, revenue: 200 },
  { date: "2024-04-22", unitSold: 224, revenue: 170 },
  { date: "2024-04-23", unitSold: 138, revenue: 230 },
  { date: "2024-04-24", unitSold: 387, revenue: 290 },
  { date: "2024-04-25", unitSold: 215, revenue: 250 },
  { date: "2024-04-26", unitSold: 75, revenue: 130 },
  { date: "2024-04-27", unitSold: 383, revenue: 420 },
  { date: "2024-04-28", unitSold: 122, revenue: 180 },
  { date: "2024-04-29", unitSold: 315, revenue: 240 },
  { date: "2024-04-30", unitSold: 454, revenue: 380 },
  { date: "2024-05-01", unitSold: 165, revenue: 220 },
  { date: "2024-05-02", unitSold: 293, revenue: 310 },
  { date: "2024-05-03", unitSold: 247, revenue: 190 },
  { date: "2024-05-04", unitSold: 385, revenue: 420 },
  { date: "2024-05-05", unitSold: 481, revenue: 390 },
  { date: "2024-05-06", unitSold: 498, revenue: 520 },
  { date: "2024-05-07", unitSold: 388, revenue: 300 },
  { date: "2024-05-08", unitSold: 149, revenue: 210 },
  { date: "2024-05-09", unitSold: 227, revenue: 180 },
  { date: "2024-05-10", unitSold: 293, revenue: 330 },
  { date: "2024-05-11", unitSold: 335, revenue: 270 },
  { date: "2024-05-12", unitSold: 197, revenue: 240 },
  { date: "2024-05-13", unitSold: 197, revenue: 160 },
  { date: "2024-05-14", unitSold: 448, revenue: 490 },
  { date: "2024-05-15", unitSold: 473, revenue: 380 },
  { date: "2024-05-16", unitSold: 338, revenue: 400 },
  { date: "2024-05-17", unitSold: 499, revenue: 420 },
  { date: "2024-05-18", unitSold: 315, revenue: 350 },
  { date: "2024-05-19", unitSold: 235, revenue: 180 },
  { date: "2024-05-20", unitSold: 177, revenue: 230 },
  { date: "2024-05-21", unitSold: 82, revenue: 140 },
  { date: "2024-05-22", unitSold: 81, revenue: 120 },
  { date: "2024-05-23", unitSold: 252, revenue: 290 },
  { date: "2024-05-24", unitSold: 294, revenue: 220 },
  { date: "2024-05-25", unitSold: 201, revenue: 250 },
  { date: "2024-05-26", unitSold: 213, revenue: 170 },
  { date: "2024-05-27", unitSold: 420, revenue: 460 },
  { date: "2024-05-28", unitSold: 233, revenue: 190 },
  { date: "2024-05-29", unitSold: 78, revenue: 130 },
  { date: "2024-05-30", unitSold: 340, revenue: 280 },
  { date: "2024-05-31", unitSold: 178, revenue: 230 },
  { date: "2024-06-01", unitSold: 178, revenue: 200 },
  { date: "2024-06-02", unitSold: 470, revenue: 410 },
  { date: "2024-06-03", unitSold: 103, revenue: 160 },
  { date: "2024-06-04", unitSold: 439, revenue: 380 },
  { date: "2024-06-05", unitSold: 88, revenue: 140 },
  { date: "2024-06-06", unitSold: 294, revenue: 250 },
  { date: "2024-06-07", unitSold: 323, revenue: 370 },
  { date: "2024-06-08", unitSold: 385, revenue: 320 },
  { date: "2024-06-09", unitSold: 438, revenue: 480 },
  { date: "2024-06-10", unitSold: 155, revenue: 200 },
  { date: "2024-06-11", unitSold: 92, revenue: 150 },
  { date: "2024-06-12", unitSold: 492, revenue: 420 },
  { date: "2024-06-13", unitSold: 81, revenue: 130 },
  { date: "2024-06-14", unitSold: 426, revenue: 380 },
  { date: "2024-06-15", unitSold: 307, revenue: 350 },
  { date: "2024-06-16", unitSold: 371, revenue: 310 },
  { date: "2024-06-17", unitSold: 475, revenue: 520 },
  { date: "2024-06-18", unitSold: 107, revenue: 170 },
  { date: "2024-06-19", unitSold: 341, revenue: 290 },
  { date: "2024-06-20", unitSold: 408, revenue: 450 },
  { date: "2024-06-21", unitSold: 169, revenue: 210 },
  { date: "2024-06-22", unitSold: 317, revenue: 270 },
  { date: "2024-06-23", unitSold: 480, revenue: 530 },
  { date: "2024-06-24", unitSold: 132, revenue: 180 },
  { date: "2024-06-25", unitSold: 141, revenue: 190 },
  { date: "2024-06-26", unitSold: 434, revenue: 380 },
  { date: "2024-06-27", unitSold: 448, revenue: 490 },
  { date: "2024-06-28", unitSold: 149, revenue: 200 },
  { date: "2024-06-29", unitSold: 103, revenue: 160 },
  { date: "2024-06-30", unitSold: 446, revenue: 400 },
];

const chartConfig = {
  views: {
    label: "Sales Overview",
  },
  unitSold: {
    label: "Units Sold",
    color: "hsl(var(--chart-1))",
  },
  revenue: {
    label: "Revenue ($)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const Saleschart = () => {
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>("unitSold");

  const total = useMemo(
    () => ({
      unitSold: chartData.reduce((acc, curr) => acc + curr.unitSold, 0),
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>
            <h1 className="font-bold text-2xl">
              Sales Performance Analytics
            </h1>
          </CardTitle>
          <CardDescription>
            Units Sold vs Revenue - Last 3 Months
          </CardDescription>
        </div>
        <div className="flex">
          {["unitSold", "revenue"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {chart === 'revenue' ? '$' : ''}{total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Saleschart
