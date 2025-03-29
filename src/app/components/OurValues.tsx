import { Flex, Box } from "@chakra-ui/react";
import {
  AnimatedContent,
  GradientText,
  RotatingText,
} from "_/components/custom/animations";
import { BaseText, TextVariant } from "_/components/custom/base-text";
import { VectorSvg } from "_assets/svg";
import React from "react";

const OurValues = () => {
  return (
    <Box p={30} width={"full"}>
      <Flex alignItems={"center"} justifyContent={"flex-start"} gap={5}>
        <VectorSvg width={50} height={50} />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <BaseText variant={TextVariant.H3}>
            Solutions Numériques Innovantes
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
            <BaseText>
              BVG est une entreprise spécialisée dans la création de solutions
              numériques sur mesure. Alliant expertise et créativité, elle
              accompagne ses clients à chaque étape de leurs projets, de la
              conception à la mise en œuvre. Son engagement repose sur la
              rigueur, l'attention aux détails et le respect des délais,
              garantissant des résultats qui dépassent les attentes.
            </BaseText>
          </Box>
          <Box width={"full"} bgColor={"red"}>
            <BaseText>Creative</BaseText>
            <RotatingText
              texts={[
                "Innovation",
                "Travail d'equipe",
                "Excellence",
                "Responsabilite",
              ]}
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </Box>
        </Flex>
      </AnimatedContent>
    </Box>
  );
};

export default OurValues;
