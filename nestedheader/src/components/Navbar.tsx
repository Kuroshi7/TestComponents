import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "../components/ui/menu";

const Navbar = () => {
  const menuItems = [
    {
      label: "Services", value: "services", submenu: [
        { label: "Web Development", value: "web-development" },
        { label: "App Development", value: "app-development", submenu: [
          { label: "iOS Development", value: "ios-development" },
          { label: "Android Development", value: "android-development" },
          { label: "Cross-platform", value: "cross-platform" },
        ]},
        { label: "SEO Optimization", value: "seo" },
      ]
    },
    { label: "About", value: "about" },
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.submenu) {
        return (
          <MenuRoot key={item.value} positioning={{ placement: "right-start", gutter: 2 }}>
            <MenuTriggerItem value={item.value}>{item.label}</MenuTriggerItem>
            <MenuContent>
              {renderMenuItems(item.submenu)}
            </MenuContent>
          </MenuRoot>
        );
      }
      return (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <div style={{ backgroundColor: "#e53e3e", width: "100%", height: "60px", display: "flex", alignItems: "center", padding: "0 16px" }}>
      <Button variant="outline" size="sm" onClick={() => window.location.href = '/about'}>
        About
      </Button>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Services
          </Button>
        </MenuTrigger>
        <MenuContent>
          {renderMenuItems(menuItems)}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default Navbar;
