import {
  Box,
  Center,
  SimpleGrid,
  For,
  Card,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SpotlightCard } from "_/components/custom/animations";
import { BaseText } from "_/components/custom/base-text";
import React from "react";

const WorkWithUs = () => {
  const listItem = [
    {
      key: "Travaillez plus intelligemment",
      value:
        "Chez BVG-INNOVATION, nous transformons vos idées en solutions numériques élégantes et fonctionnelles. Créativité et technique pour propulser votre projet vers le succès",
    },
    {
      key: "Travaillez plus intelligemment",
      value:
        "Chez BVG-INNOVATION, nous transformons vos idées en solutions numériques élégantes et fonctionnelles. Créativité et technique pour propulser votre projet vers le succès",
    },
    {
      key: "Travaillez plus intelligemment",
      value:
        "Chez BVG-INNOVATION, nous transformons vos idées en solutions numériques élégantes et fonctionnelles. Créativité et technique pour propulser votre projet vers le succès",
    },
  ];
  return (
    <Box>
      <Center p={8} mt={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          alignItems={"center"}
          gap="40px"
          overflow={"auto"}
          width={"full"}
          flexWrap={"wrap"}
        >
          <For each={listItem}>
            {(item, index) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(0, 229, 255, 0.2)"
                className="w-100%"
              >
                <VStack gapY={4} alignItems={"flex-start"} gap={"4px"}>
                  <Flex alignItems={"center"} justifyContent={"center"} gap={5}>
                    <Flex
                      bgColor={"yellow"}
                      borderRadius={7}
                      boxSize={"45px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      icon
                    </Flex>
                    <Box color={"white"}>
                      <BaseText>{item?.key}</BaseText>
                    </Box>
                  </Flex>
                  <Box color={"gray.600"} mt={3}>
                    <BaseText lineHeight={"1.8"}>{item?.value}</BaseText>
                  </Box>
                </VStack>
              </SpotlightCard>
            )}
          </For>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default WorkWithUs;
