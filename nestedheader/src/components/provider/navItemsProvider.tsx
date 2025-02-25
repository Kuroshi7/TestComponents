import { Children, ReactNode } from "react";
import { MenuType, NavItemsContext } from "../context/navItemsContext";

type NavBarProviderType = {
  children: ReactNode;
}

export function NavBarProvider({ children }: NavBarProviderType) {

  const menuItems = [
    {
      "label": "Services",
      "value": "services",
      "submenu": [
        {
          "label": "Web Development",
          "value": "web-development"
        },
        {
          "label": "App Development",
          "value": "app-development",
          "submenu": [
            {
              "label": "iOS Development",
              "value": "ios-development"
            },
            {
              "label": "Android Development",
              "value": "android-development"
            },
            {
              "label": "Cross-platform",
              "value": "cross-platform"
            }
          ]
        },
        {
          "label": "SEO Optimization",
          "value": "seo"
        }
      ]
    },
    {
      "label": "About",
      "value": "about"
    },
    {
      "label": "teste",
      "value": "teste",
      "submenu": [
        { "label": "subTeste", "value": "subTeste" }
      ]
    },
    {
      "label": "renderin",
      "value": "renderin"
    }

  ];


  const data: MenuType = {
    items: menuItems
  }
  return (
    <NavItemsContext.Provider value={data}>
      {children}
    </NavItemsContext.Provider>
  )

}