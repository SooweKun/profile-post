"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#7D7FCF",
  },
  mobile: {
    label: "Mobile",
    color: "#B15CA4",
  },
} satisfies ChartConfig;

export function ChartComponent() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] h-full max-h-[250px] min-w-[300px] w-full border-[1px] border-white rounded-[10px]"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={6} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={6} />
      </BarChart>
    </ChartContainer>
  );
}
