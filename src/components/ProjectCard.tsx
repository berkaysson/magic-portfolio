"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Icon,
} from "@/once-ui/components";
import { TechStack } from "./TechStack";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  featured?: boolean;
  technologies?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  featured,
  technologies,
}) => {
  return (
    <Column
      fillWidth
      gap="m"
      style={{
        border: featured ? "1px solid var(--brand-alpha-medium)" : "none",
        borderRadius: "var(--radius-l)",
        padding: featured ? "12px" : "0",
        transition: "all 0.2s ease",
        position: "relative",
      }}
    >
      {featured && (
        <Icon
          name="star"
          size="s"
          style={{
            color: "white",
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "var(--brand-solid-strong)",
            padding: "8px",
            borderRadius: "50%",
            boxShadow: "var(--shadow-m)",
            zIndex: 10,
          }}
          tooltip="Featured Project"
        />
      )}
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>

          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            {technologies && technologies.length > 0 && (
              <TechStack technologies={technologies} gap="8" />
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
