import { Settings } from "@/pages/Settingspage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/")({
  component: Settings,
});
