import {
  Box,
  Flex,
  Text,
  Center,
  useBreakpointValue,
  Separator,
  VStack,
  For,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "_/components/ui/menu";
import { renderContacts, links, socialLinks } from "../data/data";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export const Footer = () => {
  const responsiveMode = useBreakpointValue({
    lg: true,
    base: false,
    sm: false,
  });
  const router = useRouter();

  return (
    <Box w={"full"} mt={50}>
      <Flex bgColor={"primary.500"} width={"full"}>
        {responsiveMode && (
          <Box pos={"relative"} width={"25%"}>
            <Image src={"/assets/images/logo/forme.png"} alt="forme" />
            <Center pos="absolute" inset={0} zIndex={1000} width={"full"}>
              <Box width={"170px"} height={"170px"} mt={20}>
                <Image
                  src={"/assets/images/logo/bvg-black-icon.png"}
                  alt={"bvg-icon"}
                />
              </Box>
            </Center>
          </Box>
        )}
        <Box position={"relative"} width={"full"} ml={10}>
          <Center minH={"50vh"}>
            <Flex
              width={"full"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              flexDir={{ base: "column", lg: "row" }}
              gap={30}
            >
              <Box width={"full"} color={"white"}>
                <Text fontSize={"22px"}>Contact</Text>
                <VStack gap={4} mt={8} alignItems={"flex-start"}>
                  <For each={renderContacts}>
                    {(item, index) => (
                      <Flex key={index} gap={4}>
                        {item.icon}
                        <Text>{item.label}</Text>
                      </Flex>
                    )}
                  </For>
                </VStack>
              </Box>
              <Box width={"full"} color={"white"}>
                <Text fontSize={"22px"}>Liens</Text>
                <Stack
                  flexDir={{ base: "row", lg: "column" }}
                  gap={{ base: 0, lg: 4 }}
                  mt={8}
                  width={"full"}
                  alignItems={"flex-start"}
                >
                  <For each={links}>
                    {(item, index) =>
                      item.subMenu ? (
                        <Flex key={index} gap={5} width={"full"}>
                          <MenuRoot
                            key={index}
                            positioning={{
                              placement: responsiveMode
                                ? "right-end"
                                : "bottom",
                            }}
                          >
                            <MenuTrigger asChild color="white">
                              <Flex alignItems={"center"} gap={2}>
                                {item.label}
                                <IoIosArrowDown />
                              </Flex>
                            </MenuTrigger>
                            <MenuContent p={4} bgColor={"primary.900"} gap={4}>
                              {item.subMenu?.map((subItem, subIndex) => (
                                <MenuItem
                                  key={subIndex}
                                  value={subItem.label}
                                  color={"white"}
                                  mb={2}
                                  onClick={() => router.push(subItem.href)}
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
                          color={"white"}
                          width={"full"}
                          key={index}
                          href={item.href}
                        >
                          <Text>{item.label}</Text>
                        </Link>
                      )
                    }
                  </For>
                </Stack>
              </Box>
            </Flex>
          </Center>
          <Box width={"full"}>
            <Flex gap={"30px"}>
              <For each={socialLinks}>
                {(item, index) => (
                  <Link key={index} href={item.link}>
                    <Image
                      src={item.icon}
                      alt={"icon"}
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  </Link>
                )}
              </For>
            </Flex>
            <Separator size="lg" mt={3} colorPalette={"white"} />
            <Center mt={10} mb={5}>
              <Text color={"white"}>Copyright @ 2025 BVG-INNOVATION </Text>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
