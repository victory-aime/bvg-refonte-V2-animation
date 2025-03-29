import React, { useRef } from "react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "_/components/ui/drawer";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "_/components/ui/menu";
import {
  HStack,
  IconButton,
  Flex,
  For,
  Link,
  DrawerFooter,
} from "@chakra-ui/react";
import { IoIosCloseCircle } from "react-icons/io";
import SwitchColorMode from "_/components/custom/switch-color/SwitchColorMode";
import { useRouter } from "next/navigation";
import { BaseText } from "_/components/custom/base-text";
import { IoIosArrowDown } from "react-icons/io";

const MobileMenu = ({
  open,
  link,
  onChange,
}: {
  open: boolean;
  link: {
    label: string;
    href: string;
    subMenu?: { label: string; href: string }[];
  }[];
  onChange: (value: any) => void;
}) => {
  const router = useRouter();
  const contentRef = useRef<React.RefObject<HTMLElement> | any>(null);

  return (
    <DrawerRoot
      open={open}
      onOpenChange={(e) => onChange(e.open)}
      size={"xs"}
      closeOnEscape
    >
      <DrawerBackdrop />
      <DrawerContent height={"full"} pos={"absolute"} ref={contentRef}>
        <DrawerHeader>
          <HStack p={5} justifyContent={"space-between"}>
            <DrawerTitle>BVG-INNOVATION</DrawerTitle>
            <DrawerActionTrigger asChild>
              <IconButton
                aria-label="close-drawer"
                bgColor={"secondary.500"}
                color={"white"}
                onClick={() => onChange(false)}
              >
                <IoIosCloseCircle />
              </IconButton>
            </DrawerActionTrigger>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <Flex flexDir={"column"} gap={5}>
            <For each={link}>
              {(item, index) =>
                item.subMenu ? (
                  <Flex key={index} gap={5} width={"full"}>
                    <MenuRoot
                      key={index}
                      positioning={{
                        placement: "bottom-start",
                      }}
                    >
                      <MenuTrigger asChild>
                        <Flex
                          alignItems={"center"}
                          gap={2}
                          fontSize="20px"
                          textDecoration="none"
                          p="10px 20px"
                        >
                          {item.label}
                          <IoIosArrowDown />
                        </Flex>
                      </MenuTrigger>
                      <MenuContent
                        p={3}
                        portalRef={contentRef}
                        bgColor={"primary.900"}
                        gap={4}
                      >
                        {item.subMenu?.map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            color={"white"}
                            mb={2}
                            onClick={() => {
                              router.push(subItem.href);
                              onChange(false);
                            }}
                            value={subItem.label}
                            px={2}
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </MenuContent>
                    </MenuRoot>
                  </Flex>
                ) : (
                  <Link
                    key={index}
                    position="relative"
                    fontSize="20px"
                    textDecoration="none"
                    p="10px 20px"
                    _hover={{ textDecoration: "none" }}
                    css={{
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        borderRadius: "full",
                        height: "4px",
                        width: "100%",
                        background:
                          "linear-gradient(90deg, #1A3C8A, #F6A724, #ffffff)",
                        backgroundSize: "200% auto",
                        transition: "all 0.5s",
                        transform: "translateX(-100%)",
                        opacity: 0,
                      },
                      "&:hover::after": {
                        transform: "translateX(0%)",
                        animation: "gradient-89 3s linear infinite",
                        opacity: 1,
                      },
                      "@keyframes gradient-89": {
                        "0%": { backgroundPosition: "100% 0%" },
                        "50%": { backgroundPosition: "0% 0%" },
                        "100%": { backgroundPosition: "100% 0%" },
                      },
                    }}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )
              }
            </For>
          </Flex>
        </DrawerBody>
        <DrawerFooter
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          width={"full"}
          p={5}
        >
          <SwitchColorMode />
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenu;
