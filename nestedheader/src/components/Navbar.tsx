import { Box, Button, Stack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "../components/ui/menu";
import { useNavBar } from "./context/navItemsContext";


interface NavItem{
  value: string;
  label: string;
  submenu?: NavItem[];
}

const Navbar = () => {
  const { items }: {items: NavItem[]} = useNavBar();

  const renderMenuItems = (i: NavItem[]) => {
    return i.map((item) => {
      if (item.submenu) {
        return (
          <Box>
            <MenuRoot key={item.value} positioning={{ placement: "right-start", gutter: 2 }}>
              <MenuTriggerItem value={item.value}>{item.label}</MenuTriggerItem>
              <MenuContent>
                {renderMenuItems(item.submenu)}
              </MenuContent>
            </MenuRoot>
          </Box>
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
    <Stack direction={'row'} style={{ backgroundColor: "#8b2121", width: "100%", height: "60px", display: "flex", alignItems: "center", padding: "0 16px" }}>
      {items.map((item) => (
        <Box key={item.label} >
          {item.submenu ? (
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {item.label}
                </Button>
              </MenuTrigger>
              <MenuContent>
                {item.submenu && renderMenuItems(item.submenu)}
              </MenuContent>
            </MenuRoot>
          ) : (
            <Button variant={'outline'} size={'sm'}>
              {item.label}
            </Button>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Navbar;