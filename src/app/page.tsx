"use client";

import { Box } from "@chakra-ui/react";
import { links } from "./data/data";
import HeroBanner from "_/components/custom/banner/HeroBanner";
import WhyBvg from "./components/WhyBvg";
import WorkWithUs from "./components/WorkWithUs";
import Service from "./components/Service";
import { useColorMode } from "_/components/ui/color-mode";
import AboutUs from "./components/AboutUs";
import OurValues from "./components/OurValues";
import { ContactUs } from "./components/contact/ContactUs";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgColor={colorMode === "light" ? "white" : "black"}
      overflow={"hidden"}
    >
      <HeroBanner
        links={links}
        title={"Offrir et Innover les Meilleurs"}
        animateText={"Service du Digital"}
        description={
          "Chez BVG-INNOVATION, nous transformons vos idées en solutions numériques élégantes et fonctionnelles. Créativité et technique pour propulser votre projet vers le succès"
        }
      />
      <WhyBvg
        content={
          "Chez BVG-INNOVATION, nous transformons vos idées en solutions innovantes sur mesure. En alliant créativité, expertise et technologie de pointe,nous propulsons votre entreprise vers le succès et donnons vie à vos ambitions."
        }
        title={"Pourquoi choisir BVG-INNOVATION ?"}
        imageSrc={"/assets/images/home/bvg-cart.png"}
      />
      <WorkWithUs />
      <Service />
      <AboutUs />
      <OurValues />
      <ContactUs />
    </Box>
  );
}
