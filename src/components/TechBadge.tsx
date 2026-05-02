"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { techData } from "./techStackData";
import styles from "./TechBadge.module.scss";

interface TechBadgeProps {
  name: string;
  size?: "s" | "m" | "l";
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, size = "m" }) => {
  const tech = techData[name.toLowerCase()];
  
  if (!tech) {
    console.warn(`Technology "${name}" not found in techData`);
    return null;
  }

  const sizeClasses = {
    s: "20px",
    m: "28px",
    l: "34px",
  };

  const iconSizes = {
    s: "14px",
    m: "20px",
    l: "24px",
  };

  return (
    <div 
      className={styles.badge}
      title={tech.name}
      style={{
        width: sizeClasses[size],
        height: sizeClasses[size],
      }}
    >
      <Icon 
        icon={tech.icon} 
        width={iconSizes[size]} 
        height={iconSizes[size]} 
      />
    </div>
  );
};
