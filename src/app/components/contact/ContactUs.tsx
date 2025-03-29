import { Box, Center, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
import ContactWidget from "./ContactWidget";
import { MailIcon, PhoneRingsIcon } from "_assets/svg";
import { AnimateStarBorder } from "_/components/custom/animations";

export const ContactUs = () => {
  const responsive = useBreakpointValue({ base: false, sm: false, lg: true });

  return (
    <Box mt={50}>
      <Box width="100%" marginTop={{ base: "50px", lg: "150px" }}>
        {responsive ? (
          <Flex
            bgImage={"/assets/images/background.png"}
            align={"center"}
            justify={"center"}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            backgroundSize="contain"
            h="100%"
          >
            <Center width="100%">
              <Box>
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  gap={{ base: "16px", lg: "24px" }}
                  p={"30px"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <ContactWidget
                    icon={<MailIcon fill="white" />}
                    color="secondary.500"
                    value={process.env.NEXT_PUBLIC_GOOGLE_EMAIL}
                  />
                  <ContactWidget
                    icon={<PhoneRingsIcon fill="white" />}
                    color="primary.500"
                    value={process.env.NEXT_PUBLIC_BVG_PHONE_NUMBER}
                  />
                </Flex>
                <AnimateStarBorder
                  as="div"
                  color="cyan"
                  speed="5s"
                  className="cursor-pointer"
                >
                  <Box
                    mt={{ base: "16px", lg: "24px" }}
                    width={{ base: "100%", lg: "80vw" }}
                    minH={{ base: "500px", lg: "600px" }}
                  >
                    <ContactForm />
                  </Box>
                </AnimateStarBorder>
              </Box>
            </Center>
          </Flex>
        ) : (
          <Box width="100%" bgColor="primary.500">
            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ base: "16px", lg: "24px" }}
              alignItems="center"
              p={"10px"}
              justifyContent="center"
            >
              <ContactWidget
                icon={<MailIcon fill="white" />}
                color="secondary.500"
                value={process.env.NEXT_PUBLIC_GOOGLE_EMAIL}
              />
              <ContactWidget
                icon={<PhoneRingsIcon fill="white" />}
                color="primary.500"
                value={process.env.NEXT_PUBLIC_BVG_PHONE_NUMBER}
              />
            </Flex>
            <Box
              mt={{ base: "16px", lg: "24px" }}
              p={{ base: 4, lg: 8 }}
              boxShadow="0px 0px 50px 0px rgba(110, 124, 124, 0.1)"
              width={{ base: "100%", lg: "80vw" }}
              bgColor="yellow"
            >
              <ContactForm />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
