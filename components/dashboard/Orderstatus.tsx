"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const OrderStatus = () => {
  const data = [
    { name: 'Shipped', value: 320, color: 'hsl(var(--chart-1))' },
    { name: 'Processing', value: 540, color: 'hsl(var(--chart-2))' },
    { name: 'Cancelled', value: 140, color: 'hsl(var(--chart-3))' }
  ];

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Order Status</CardTitle>
        <CardDescription>Distribution of orders by status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64 flex justify-center">
          <PieChart width={300} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatus;