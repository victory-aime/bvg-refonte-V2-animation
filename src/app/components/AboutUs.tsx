import {
  Flex,
  Box,
  Center,
  For,
  Grid,
  GridItem,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  AnimatedContent,
  GradientText,
  StackAnimation,
  CountUp,
  ShinyText,
} from "_/components/custom/animations";
import {
  BaseText,
  TextVariant,
  TextWeight,
} from "_/components/custom/base-text";
import { VectorSvg } from "_assets/svg";
import React, { useState } from "react";
import { aboutUsGallery, stats } from "../data/data";
import { BaseButton } from "_/components/custom/button";
import { RiArrowRightLine } from "react-icons/ri";

const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(1);
  const responsive = useBreakpointValue({ base: false, sm: false, lg: true });
  const aboutUsText: Record<number, string> = {
    1: "Nous croyons fermement que chaque idée a le potentiel de changer le monde. C'est pourquoi nous nous engageons à faire de vos idées une réalité",
    2: "Notre engagement envers nos clients ne s'arrête pas à la livraison du produit. Nous croyons qu'un service exceptionnel se mesure par la qualité du suivi que nous offrons bien après que votre projet soit en ligne",
    3: "La stratégie et le planning sont au cœur de notre approche. Chaque projet commence par une analyse approfondie de vos besoins et de vos objectifs.",
  };

  return (
    <Box p={30} width={"full"}>
      <Flex alignItems={"center"} justifyContent={"flex-start"} gap={5}>
        <VectorSvg width={50} height={50} />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <BaseText color={"none"} variant={TextVariant.H1}>
            BVG-INNOVATION
          </BaseText>
        </GradientText>
      </Flex>

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
        <Flex
          width={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", md: "row" }}
          gap={8}
          p={5}
          mt={8}
        >
          <Box width={"full"}>
            <BaseText variant={TextVariant.L}>
              {aboutUsText[activeCard]}
            </BaseText>
            <BaseButton
              bg={"none"}
              p={0}
              mt={5}
              color={"primary.400"}
              fontSize={"20px"}
              fontWeight={"semibold"}
              rightIcon={<RiArrowRightLine />}
            >
              En savoir plus
            </BaseButton>
          </Box>
          <Box width={{ base: "full", lg: "1/2" }}>
            <StackAnimation
              randomRotation={false}
              sensitivity={180}
              sendToBackOnClick
              onActiveCardChange={setActiveCard}
              cardsData={aboutUsGallery}
              cardDimensions={{
                width: responsive ? 350 : 300,
                height: responsive ? 350 : 300,
              }}
            />
          </Box>
        </Flex>
      </AnimatedContent>

      <Box
        p="30px"
        width="100%"
        marginTop={"20px"}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <Center
          alignItems="center"
          justifyContent="center"
          bgColor={"gray.100"}
          borderRadius="12px"
          p="20px"
        >
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap="20px"
          >
            <For each={stats}>
              {(stat, index) => (
                <GridItem
                  key={index}
                  borderRadius="15px"
                  p="20px"
                  textAlign="center"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <VStack gap={3}>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontSize={"44px"}
                      gap={2}
                    >
                      <CountUp
                        from={0}
                        to={stat.value}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      <GradientText
                        colors={[
                          "#40ffaa",
                          "#4079ff",
                          "#40ffaa",
                          "#4079ff",
                          "#40ffaa",
                        ]}
                        animationSpeed={3}
                        showBorder={false}
                      >
                        <BaseText
                          variant={TextVariant.H2}
                          weight={TextWeight.Black}
                          color={"none"}
                        >
                          {stat?.suffix}
                        </BaseText>
                      </GradientText>
                    </Flex>
                    <ShinyText text={stat.label} disabled={false} speed={3} />
                  </VStack>
                </GridItem>
              )}
            </For>
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};

export default AboutUs;
