import { AspectRatio, Box, Center, Flex, For, Image } from "@chakra-ui/react";
import {
  AnimatedContent,
  DecryptedText,
  GradientText,
  SplitText,
  ScrollVelocity,
} from "_/components/custom/animations";
import { BaseText, TextVariant } from "_/components/custom/base-text";
import { BaseButton } from "_/components/custom/button";
import React, { useState } from "react";

const WhyBvg = ({
  content,
  title,
  imageSrc,
  buttonTitle,
  reverse = false,
  showButton = false,
  bgColor = "primary.500",
}: {
  content: string;
  title: string;
  imageSrc: string;
  buttonTitle?: string;
  showButton?: boolean;
  reverse?: boolean;
  bgColor?: string;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const value = [
    "Expertise multidisciplinaire",
    "Engagement envers nos clients",
  ];

  return (
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
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        mt={{ base: 5, lg: 15 }}
      >
        <BaseText variant={{ base: TextVariant.L, md: TextVariant.H2 }} mt={12}>
          {title}
        </BaseText>
        <Center
          p={{ base: 5, lg: 10 }}
          flexDir={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          w={"full"}
          gap={"20px"}
        >
          <Box width={"full"}>
            <BaseText
              variant={{ base: TextVariant.M, md: TextVariant.H3 }}
              lineHeight={2}
            >
              <SplitText
                text={content}
                className="text-2xl font-semibold text-center"
                delay={25}
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
            </BaseText>
            {showButton && (
              <BaseButton
                bgColor={bgColor}
                color={bgColor === "white" ? "primary.500" : "white"}
                shadow={"lg"}
                mt={"20px"}
                mb={"20px"}
                p={{ base: "25px", lg: "30px" }}
              >
                {buttonTitle}
              </BaseButton>
            )}
          </Box>
          <AspectRatio width={"1/2"} ratio={4 / 3}>
            <Image src={imageSrc} alt="bvg-images" borderRadius={7} />
          </AspectRatio>
        </Center>
      </Flex>
      <Center
        mt={{ base: "30px", md: "50px" }}
        p={{ base: "5", md: "10" }}
        overflow="hidden"
        width="100%"
      >
        <Flex
          whiteSpace="nowrap"
          alignItems={"center"}
          justifyContent={"center"}
          animation={`slidesHorizontaleScale`}
          animationPlayState={isPaused ? "paused" : "running"}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          gap={20}
        >
          <For each={value}>
            {(item, index) => (
              <GradientText
                key={index}
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
              >
                <BaseText
                  fontWeight={"semibold"}
                  textAlign={"center"}
                  fontSize={{ base: "meduim", lg: "2xl" }}
                  color={"none"}
                >
                  {item}
                </BaseText>
              </GradientText>
            )}
          </For>
        </Flex>
      </Center>
    </AnimatedContent>
  );
};

export default WhyBvg;
