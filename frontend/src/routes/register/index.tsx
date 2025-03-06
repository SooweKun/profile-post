import { Register } from "@/pages/Register";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register/")({
  component: Register,
});
