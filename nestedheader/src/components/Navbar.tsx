import { Box, Button, DrawerTitle, Flex, HStack, Stack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,

} from "../components/ui/menu";
import { useNavBar } from "./context/navItemsContext";
import { AppLogo } from "./logo/applogo";
import { SocialNav } from "./socialnav/socialNav";
import { useMediaQuery } from '@chakra-ui/react'

import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTrigger } from "./ui/drawer";
import { AlignJustify } from "lucide-react";


interface NavItem {
  value: string;
  label: string;
  submenu?: NavItem[];
}

const Navbar = () => {
  const { items }: { items: NavItem[] } = useNavBar();
  const [isMobile] = useMediaQuery(['(max-width: 820px)'], {
    fallback: [false]
  });

  const renderMenuItems = (i: NavItem[]) => {
    return i.map((item) => {
      if (item.submenu) {
        return (
          <Box key={item.value}>
            <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
              <MenuTriggerItem value={item.value}>{item.label}</MenuTriggerItem>
              <MenuContent>{renderMenuItems(item.submenu)}</MenuContent>
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
    <HStack
      flex="1"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
    >
      <Flex>
        <AppLogo />
      </Flex>

      {!isMobile && (
        <Flex
          justify="center"
          align="center"
          gap={4}
          bg="red.800"
          minW="150px"
          maxW="80%"
          h="50px"
          wrap="wrap"
        >
          {items.map((item) => (
            <Box key={item.label}>
              {item.submenu ? (
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Button
                      _hover={{ bg: "none" }}
                      border="none"
                      variant="outline"
                      size="sm"
                      flexShrink={0}
                    >
                      {item.label}
                    </Button>
                  </MenuTrigger>
                  <MenuContent>{renderMenuItems(item.submenu)}</MenuContent>
                </MenuRoot>
              ) : (
                <Button
                  _hover={{ bg: "none" }}
                  border="none"
                  variant="outline"
                  size="sm"
                  flexShrink={0}
                >
                  {item.label}
                </Button>
              )}
            </Box>
          ))}
        </Flex>
      )}

      {isMobile && (
        <DrawerRoot placement="start">
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button ml='auto'>
              <AlignJustify />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>MENU</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Stack p={4}>
                {items.map((item) => (
                  <Box key={item.label}>
                    {item.submenu ? (
                      <MenuRoot>
                        <MenuTriggerItem value={item.value}>{item.label}</MenuTriggerItem>
                        <MenuContent>{renderMenuItems(item.submenu)}</MenuContent>
                      </MenuRoot>
                    ) : (
                      <Button variant="outline" size="sm" w="full">
                        {item.label}
                      </Button>
                    )}
                  </Box>
                ))}
              </Stack>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      )}

      <Flex>
        <SocialNav />
      </Flex>
    </HStack>
  );
};
export default Navbar;