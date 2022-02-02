import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome everyone
        <br /> Yeison Casado{" "}
      </SectionTitle>
      <SectionText>
        Former agricultural engineer from the Dominican Republic who moved to
        the U.S. Worked three jobs while getting established in America.
        Recently completed a coding bootcamp at the Flatiron School and now
        using that technical knowledge along with a head for numbers to
        transition to software engineering. Learned React, JavaScript, and Ruby
        at Flatiron and learned Python independently. Strong cross-cultural
        communication and fluency in both English and Spanish.
      </SectionText>

      <Button
        onClick={() => (window.location = "https://github.com/Yeison2020")}
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
