"use client";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { House } from "phosphor-react";

export default function useRoutes() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = ({ path, action }: RouteItem) => {
    if (pathname === path) return;

    if (action) return action();
    if (path) router.push(path);
  };

  const routes = useMemo<RouteItem[]>(
    () => [
      {
        label: "Início",
        icon: <House />,
        path: "/",
        childrenRoutesPattern: /^\/(categorias|oracoes)+.*/g,
      }
    ],
    []
  );

  const currentRoute = useMemo(
    () =>
      routes.find(
        (route) =>
          route?.path?.startsWith(pathname) ||
          (route.childrenRoutesPattern &&
            pathname.match(route.childrenRoutesPattern))
      ),
    [pathname, routes]
  );

  const selectedItemIndex = routes.findIndex(
    (route) => currentRoute?.path === route?.path
  );

  return { routes, currentRoute, selectedItemIndex, handleNavigation };
}
