import { Children, ReactNode } from "react";
import { MenuType, NavItemsContext } from "../context/navItemsContext";

type NavBarProviderType = {
  children: ReactNode;
}

export function NavBarProvider({ children }: NavBarProviderType) {

  const menuItems = [
    {
      "label": 'INSTITUCIONAL',
      "value": "renderin",
      "url": "#",
    },
    {
      "label": 'PÓS-GRADUAÇÃO',
      "value": "renderin",
      "submenu":[
        {
          "label": "cursosEADAtivos",
          "value": "cursosEADAtivos",
          "url": "#"
        },
      ]
    },
    {
      "label": 'CONCURSO DE BOLSAS',
      "value": "renderin",
      "url": "#",
    },
    {
      "label": 'CURSOS DE EXTENSÃO',
      "value": "renderin",
      "url": "#",
    },
    {
      "label": 'EVENTOS',
      "value": 'EVENTOS',
      "submenu": [
        {
          "label": "SIMPÓSIOS",
          "value": "app-development",
          "submenu": [
            {
              "label": 'XV SIMPÓSIO (2024)',
              "value": 'XV SIMPÓSIO (2024)'
            },
            {
              "label": 'XIV SIMPÓSIO (2020)',
              "value": 'XIV SIMPÓSIO (2020)'
            },
            {
              "label": 'XIII SIMPÓSIO (2018)',
              "value": 'XIII SIMPÓSIO (2018)'
            },
            {
              "label": 'XIII SIMPÓSIO (2018)',
              "value": 'XIII SIMPÓSIO (2018)'
            },
            {
              "label": 'I SIMPÓSIO BRASILEIRO DE PROC. CIVIL (2017)',
              "value": 'I SIMPÓSIO BRASILEIRO DE PROC. CIVIL (2017)'
            },
            {
              "label": 'XII SIMPÓSIO (2016)',
              "value": 'XII SIMPÓSIO (2016)'
            },
            {
              "label": 'XI SIMPÓSIO (2014)',
              "value": 'XI SIMPÓSIO (2014)'
            },
            {
              "label": 'X SIMPÓSIO (2012)',
              "value": 'X SIMPÓSIO (2012)'
            },
            {
              "label": 'IX SIMPÓSIO (2010)',
              "value": 'IX SIMPÓSIO (2010)'
            },
            {
              "label": 'VIII SIMPÓSIO (2008)',
              "value": 'VIII SIMPÓSIO (2008)'
            },
            {
              "label": 'VII SIMPÓSIO (2006)',
              "value": 'VII SIMPÓSIO (2006)'
            },
            {
              "label": 'VI SIMPÓSIO (2004)',
              "value": 'VI SIMPÓSIO (2004)'
            },
            {
              "label": 'V SIMPÓSIO (2003)',
              "value": 'V SIMPÓSIO (2003)'
            },
            {
              "label": 'III SIMPÓSIO (2001)',
              "value": 'III SIMPÓSIO (2001)'
            },
            {
              "label": 'II SIMPÓSIO (2000)',
              "value": 'II SIMPÓSIO (2000)'
            },
            {
              "label": 'I SIMPÓSIO (1999)',
              "value": 'I SIMPÓSIO (1999)'
            },
          ]
        },
        {
          "label": 'OUTROS',
          "value": 'OUTROS'
        }
      ]
    },
    {
      "label": 'PROJETOS',
      "value": 'PROJETOS',
    },
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