import React from "react";
import { Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { AnimateStarBorder } from "_/components/custom/animations";
import { BaseText, TextVariant } from "_/components/custom/base-text";

const ContactWidget = ({
  icon,
  value,
  width = "100%",
  color,
}: {
  icon: React.JSX.Element;
  color?: string;
  value: string | undefined;
  width?: string | number;
}) => {
  const responsive = useBreakpointValue({ base: false, lg: true });

  return (
    <Link
      width={width}
      href={`mailto:${value}`}
      _hover={{ textDecoration: "none" }}
    >
      <AnimateStarBorder
        as="button"
        color="cyan"
        speed="8s"
        className="cursor-pointer"
      >
        {responsive ? (
          <Flex alignItems={"center"} gap={"10px"}>
            <Flex
              bgColor={color}
              width={"45px"}
              height={"45px"}
              ml={"10px"}
              borderRadius={"12px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {icon}
            </Flex>
            <Text fontSize="17px">{value}</Text>
          </Flex>
        ) : (
          <Flex alignItems={"center"} gap={"20px"}>
            <Flex
              bgColor={color}
              width={"45px"}
              height={"45px"}
              ml={"10px"}
              borderRadius={"12px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {icon}
            </Flex>
            <BaseText variant={TextVariant.S}>{value}</BaseText>
          </Flex>
        )}
      </AnimateStarBorder>
    </Link>
  );
};

export default ContactWidget;
