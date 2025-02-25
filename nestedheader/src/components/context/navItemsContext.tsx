import { createContext, useContext } from "react";

export type MenuType={
    items: MenuItem[]
}

export interface MenuItem{
    label: string
    value: string
    submenu?: Submenu[]
  }
  
  export interface Submenu {
    label: string
    value: string
    submenu?: Submenu2[]
  }
  
  export interface Submenu2 {
    label: string
    value: string
  }

export const NavItemsContext = createContext <MenuType>({}as MenuType)

export function useNavBar() {
    const context = useContext(NavItemsContext);
    if(!context){
        throw new Error("Nao pode usar context sem provider")
    }
    return context
}