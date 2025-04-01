import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { VectorSvg } from "_assets/svg";
import { BaseText, TextVariant } from "_/components/custom/base-text";
import { GradientText, CircularGallery } from "_/components/custom/animations";
import { serviceGallery } from "../data/data";
import { useColorModeValue } from "_/components/ui/color-mode";

const Service = () => {
  const textColor = useColorModeValue("black", "white");
  return (
    <Box p={30}>
      <Flex alignItems={"center"} justifyContent={"flex-start"} gap={5}>
        <VectorSvg width={50} height={50} />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <BaseText color={"none"} variant={TextVariant.H1}>
            Nos Services
          </BaseText>
        </GradientText>
      </Flex>
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
          <BaseText lineHeight={"2"} variant={TextVariant.L}>
            Chez BVG-INNOVATION, nous transformons vos idées en solutions
            innovantes sur mesure. En alliant créativité, expertise et
            technologie de pointe,nous propulsons votre entreprise vers le
            succès et donnons vie à vos ambitions.
          </BaseText>
        </Box>
        <div
          style={{
            height: "300px",
            width: "100%",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularGallery
            bend={3}
            textColor={textColor}
            borderRadius={0.05}
            items={serviceGallery}
          />
        </div>
      </Flex>
    </Box>
  );
};

export default Service;
