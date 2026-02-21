import React from "react";
import VisionSection from "./VisionSection";
import PurposeSection from "./PurposeSection";
import MissionSection from "./MissionSection";
import CoreValuesSection from "./CoreValuesSection";

const VisionMission = () => {
  const values = [
    {
      title: "Integrity",
      description: "Integrity is non-negotiable in everything we do.",
    },
    {
      title: "Client Growth",
      description:
        "We prioritize sustainable growth and long-term value creation for our clients.",
    },
    {
      title: "Strategic Partnership",
      description:
        "Every engagement is treated as a long-term partnership aimed at sustainable institutional transformation.",
    },
    {
      title: "Agility",
      description:
        "We empower organizations to rapidly adapt to market changes, fostering innovation and resilience.",
    },
    {
      title: "Diversity",
      description:
        "We value diverse perspectives and inclusive cultures as foundations for strong institutions.",
    },
    {
      title: "Social Impact",
      description:
        "We integrate positive social and environmental impact into strategy to secure long-term sustainability.",
    },
  ];

  return (
    <div>
      <VisionSection />
      <PurposeSection />
      <MissionSection />
      <CoreValuesSection values={values} />
    </div>
  );
};

export default VisionMission;
