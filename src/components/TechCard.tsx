"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Flex, Text } from "@/once-ui/components";
import { techData } from "./techStackData";
import styles from "./TechCard.module.scss";

interface TechCardProps {
  name: string;
}

export const TechCard: React.FC<TechCardProps> = ({ name }) => {
  const tech = techData[name.toLowerCase()];
  
  if (!tech) {
    console.warn(`Technology "${name}" not found in techData`);
    return null;
  }

  return (
    <Flex
      direction="column"
      vertical="center"
      horizontal="center"
      padding="8"
      className={styles.card}
    >
      <Icon icon={tech.icon} width="28" height="28" />
      <Text variant="body-default-xs">
        {tech.name}
      </Text>
    </Flex>
  );
};
