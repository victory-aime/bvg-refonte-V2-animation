import React, { FC, useState } from "react";
import { IBannerProps } from "./interface/banner";
import {
  Box,
  Center,
  Flex,
  For,
  IconButton,
  Image,
  Link,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { hexToRGB } from "_/theme/colors";
import { ColorModeButton } from "_/components/ui/color-mode";
import { BaseButton } from "../button";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "_/app/components/MobileMenu";
import {
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuRoot,
} from "_/components/ui/menu";
import { useRouter } from "next/navigation";
import {
  BlurText,
  PixelTransition,
  SplitText,
  ShinyText,
  AnimatedContent,
} from "../animations";
import { BaseText, TextVariant, TextWeight } from "../base-text";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

const HeroBanner: FC<IBannerProps> = ({
  imageSrc = "/assets/images/home/home.png",
  height = "100vh",
  links,
  title,
  animateText,
  description,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const responsiveMode = useBreakpointValue({
    lg: true,
    base: false,
    sm: false,
  });

  return (
    <Box width={"full"} height={height} position={"relative"}>
      <Image
        src={imageSrc}
        alt={"image-background"}
        objectFit={"cover"}
        width={"full"}
        height={"full"}
      />
      <Box position={"absolute"} inset={0} bgColor={hexToRGB("overlay", 0.8)} />
      <Box position={"absolute"} inset={0} zIndex={2} width={"full"}>
        <Flex
          width={"full"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Flex
            bgColor={"primary.900"}
            justifyItems={"center"}
            borderBottomRightRadius={"full"}
            alignItems={"baseline"}
            width={{ base: "130px", lg: "200px" }}
            height={{ base: "110px", lg: "170px" }}
          >
            <PixelTransition
              firstContent={
                <Box
                  width={{ base: "130px", lg: "200px" }}
                  height={{ base: "110px", lg: "170px" }}
                  bgColor={"primary.900"}
                  justifyItems={"center"}
                  borderBottomRightRadius={"full"}
                  placeItems={"normal"}
                  display={"grid"}
                >
                  <Center
                    width={{ base: "80px", lg: "120px" }}
                    height={{ base: "80px", lg: "120px" }}
                    ml={1}
                    mt={2}
                  >
                    <Image
                      src={"/assets/images/logo/bvg-icon.png"}
                      alt="logo"
                    />
                  </Center>
                </Box>
              }
              secondContent={
                <Box
                  width={{ base: "130px", lg: "200px" }}
                  height={{ base: "110px", lg: "170px" }}
                  bgColor={"primary.900"}
                  justifyItems={"center"}
                  borderBottomRightRadius={"full"}
                  placeItems={"center"}
                  color={"white"}
                  display={"grid"}
                >
                  <BaseText ml={-5} variant={TextVariant.M}>
                    BVG INNOVATION
                  </BaseText>
                </Box>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
            />
          </Flex>

          <Box
            m={{ base: "4" }}
            display={{ base: "block", sm: "block", lg: "none" }}
          >
            <IconButton
              bgColor={"primary.500"}
              color={"white"}
              aria-label="Search database"
              onClick={() => setOpen(true)}
            >
              <GiHamburgerMenu />
            </IconButton>
          </Box>
          {responsiveMode ? (
            <Flex p={8} gap={15} alignItems={"center"} width={"full"}>
              <Flex width={"full"}>
                <For each={links ?? []}>
                  {(item, index) =>
                    item.subMenu ? (
                      <Flex key={index} gap={5} width={"full"}>
                        <MenuRoot
                          key={index}
                          positioning={{
                            placement: "bottom",
                          }}
                        >
                          <MenuTrigger
                            asChild
                            color={"white"}
                            cursor={"pointer"}
                            position={"relative"}
                            _hover={{ textDecoration: "none" }}
                            css={{
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                borderRadius: "full",
                                height: "4px",
                                width: pathname === item.href ? "100%" : "0%",
                                background:
                                  "linear-gradient(90deg, #1A3C8A, #F6A724, #ffffff)",
                                backgroundSize: "200% auto",
                                transition: "all 0.5s",
                                transform:
                                  pathname === item.href
                                    ? "translateX(0%)"
                                    : "translateX(-100%)",
                                opacity: pathname === item.href ? 1 : 0,
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
                          >
                            <Flex
                              alignItems={"center"}
                              justifyContent={"flex-start"}
                              gap={"25px"}
                              width={"fit-content"}
                              fontSize="20px"
                              textDecoration="none"
                            >
                              <BlurText
                                text={item.label}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={() => {}}
                                className="text-2xl mb-8"
                              />
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
                        key={index}
                        position="relative"
                        fontSize="20px"
                        color={"white"}
                        width={"full"}
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
                            width: pathname === item.href ? "50%" : "0%",
                            background:
                              "linear-gradient(90deg, #1A3C8A, #F6A724, #ffffff)",
                            backgroundSize: "200% auto",
                            transition: "all 0.5s",
                            transform:
                              pathname === item.href
                                ? "translateX(0%)"
                                : "translateX(-50%)",
                            opacity: pathname === item.href ? 1 : 0,
                          },
                          "&:hover::after": {
                            transform: "translateX(0%)",
                            animation: "gradient-89 3s linear infinite",
                            opacity: 1,
                          },
                          "@keyframes gradient-89": {
                            "0%": { backgroundPosition: "100% 0%" },
                            "50%": { backgroundPosition: "0% 0%" },
                            "100%": { backgroundPosition: "50% 0%" },
                          },
                        }}
                        href={item.href}
                      >
                        <BlurText
                          text={item.label}
                          delay={150}
                          animateBy="words"
                          direction="top"
                          onAnimationComplete={() => {}}
                          className="text-2xl mb-8"
                        />
                      </Link>
                    )
                  }
                </For>
              </Flex>
              <ColorModeButton />
            </Flex>
          ) : (
            <MobileMenu
              open={open}
              link={links ?? []}
              pathname={pathname}
              onChange={() => setOpen(false)}
            />
          )}
        </Flex>

        <Center
          p={{ base: "10px", lg: "0" }}
          mt={{ base: "150px", lg: "75px" }}
          flexDir={"column"}
          textAlign="center"
        >
          <VStack alignItems={"center"} gap={"20px"}>
            <Box
              fontSize={{ base: "20px", lg: "46px" }}
              fontWeight={"semibold"}
              color={"white"}
            >
              <SplitText
                text={title}
                className="text-2xl font-semibold text-center"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={() => {}}
              />

              <br />
              <BaseText
                as="span"
                color="secondary.500"
                fontSize={{ base: TextVariant.L, lg: TextVariant.H1 }}
                weight={TextWeight.Black}
                whiteSpace="nowrap"
                overflow={"visible"}
                display="inline-block"
                position="relative"
                width="fit-content"
                animation={"textTypings"}
                css={{
                  "&::before": {
                    content: '"|"',
                    position: "absolute",
                    right: "-10px",
                    color: "white",
                    animation: `blinkCursor`,
                  },
                }}
              >
                {animateText}
              </BaseText>
            </Box>

            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <Box
                maxW={{ base: "100%", lg: "800px" }}
                textAlign={"center"}
                lineHeight={2}
              >
                <BaseText variant={TextVariant.M} color="white">
                  {description}
                </BaseText>
              </Box>
              <BaseButton
                p={"30px"}
                fontWeight={"bold"}
                colorType={"primary"}
                mt={5}
              >
                <ShinyText text={"Contactez-nous"} disabled={false} speed={3} />
              </BaseButton>
            </AnimatedContent>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default HeroBanner;
