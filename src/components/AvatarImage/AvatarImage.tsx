import React from "react";
import styles from "./AvatarImage.module.scss";

import Image from "next/image";
import AvatarImageSrc from "@/../public/images/avatar.png";

interface AvatarImageProps {
  alt: string;
  theme?: {
    colors: {
      light?: string;
      lightest?: string;
    };
  };
}

const AvatarImage = ({ alt, theme }: AvatarImageProps) => {
  return (
    <Image
      src={AvatarImageSrc}
      alt={alt}
      className={styles.avatarImage}
    />
  );
};

export default AvatarImage;
