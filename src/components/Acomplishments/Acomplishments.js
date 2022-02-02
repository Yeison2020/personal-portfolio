import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 2019, text: "I started my programming journey with Python" },
  {
    number: 2020,
    text: "My interest in database in Architech led me into Web development.",
  },
  {
    number: 2021,
    text: "I enrolled in a coding bootcamp and dedicated over 14 hours a day.",
  },
  {
    number: 2022,
    text: "Aiming to learn new technologies like React Native while seeking new jobs opportunities",
  },
];

const Acomplishments = () => (
  <Section id="acomplishments">
    <SectionTitle>Personal Acccomplisments</SectionTitle>
    <Boxes>
      {data.map((card, index) => {
        return (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        );
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;
