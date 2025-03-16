import { ChartPage } from "@/pages/ChartPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chart/")({
  component: ChartPage,
});
