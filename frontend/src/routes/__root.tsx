import { Sidebar } from "@/SideBarProvider";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import * as React from "react";
import CustomCursor from "@/components/cursor/CustomCursor";

export const Route = createRootRouteWithContext()({
  component: Index,
});

function Index() {
  return (
    <React.Fragment>
      <Sidebar>
        <CustomCursor />
        <Outlet />
      </Sidebar>
    </React.Fragment>
  );
}
