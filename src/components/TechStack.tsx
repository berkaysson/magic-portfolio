"use client";

import React from "react";
import { Flex } from "@/once-ui/components";
import { TechBadge } from "./TechBadge";
import { TechCard } from "./TechCard";

interface TechStackProps {
  technologies: string[];
  variant?: "badge" | "card";
  gap?: string;
}

export const TechStack: React.FC<TechStackProps> = ({
  technologies,
  variant = "badge",
  gap = "4",
}) => {
  return (
    <Flex wrap gap={gap as any} vertical="center">
      {technologies.map((tech, index) => (
        variant === "badge" ? (
          <TechBadge key={index} name={tech} />
        ) : (
          <TechCard key={index} name={tech} />
        )
      ))}
    </Flex>
  );
};
