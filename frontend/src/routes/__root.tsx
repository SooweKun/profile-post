import { Sidebar } from "@/SideBarProvider";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import * as React from "react";
import CustomCursor from "@/components/cursor/CustomCursor";
import { Toaster } from "@/components/ui/toaster";
import { Styles } from "@/components/styles/styles";

export const Route = createRootRouteWithContext()({
  component: Index,
  notFoundComponent: () => {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <p>This setting page doesn't exist!</p>
        <p>use Sidebar for back to main page</p>
        <Link to="/" className="underline-offset-4 underline">
          or click here
        </Link>
      </div>
    );
  },
});

function Index() {
  return (
    <React.Fragment>
      <Styles />
      <Sidebar>
        <CustomCursor />
        <Toaster />
        <Outlet />
      </Sidebar>
    </React.Fragment>
  );
}
