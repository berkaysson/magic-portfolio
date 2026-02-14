"use client";

import { useState } from "react";
import {
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";

interface ProjectListItemProps {
  href: string;
  images: string[];
  title: string;
  description: string;
  publishedAt: string;
  link: string;
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({
  href,
  images = [],
  title,
  description,
  publishedAt,
  link,
}) => {
  const year = new Date(publishedAt).getFullYear().toString();
  const [hovered, setHovered] = useState(false);

  return (
    <Flex
      fillWidth
      mobileDirection="column"
      gap="m"
      vertical="center"
      paddingY="16"
      paddingX="12"
      radius="l"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid var(--neutral-border-medium)",
        transition: "background 0.2s ease",
        background: hovered ? "var(--neutral-alpha-weak)" : "transparent",
      }}
    >
      {/* Thumbnail — fixed on desktop, full-width on mobile */}
      {images.length > 0 && (
        <SmartLink
          unstyled
          href={href}
          style={{ flexShrink: 0, textDecoration: "none" }}
          className="project-list-thumb"
        >
          <Flex
            radius="m"
            overflow="hidden"
            className="project-list-thumb-inner"
          >
            <SmartImage
              src={images[0]}
              alt={title}
              aspectRatio="3/2"
              objectFit="cover"
              sizes="(max-width: 640px) 100vw, 120px"
            />
          </Flex>
        </SmartLink>
      )}

      {/* Content — title + summary */}
      <Column flex={1} gap="4" style={{ minWidth: 0, width: "100%" }}>
        <Flex gap="8" vertical="center" wrap>
          <SmartLink
            unstyled
            href={href}
            style={{ textDecoration: "none", minWidth: 0 }}
          >
            <Heading
              as="h3"
              variant="heading-strong-s"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer",
              }}
            >
              {title}
            </Heading>
          </SmartLink>
          <Tag variant="neutral" size="s" label={year} />
        </Flex>
        <Text
          variant="body-default-xs"
          onBackground="neutral-weak"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Text>

        {/* Actions — visible inline on mobile, right-aligned on desktop */}
        <Flex
          gap="12"
          vertical="center"
          wrap
          className="project-list-actions-mobile"
        >
          <SmartLink
            href={href}
            suffixIcon="arrowRight"
            style={{ margin: "0", width: "fit-content" }}
          >
            <Text variant="body-default-xs">Read case study</Text>
          </SmartLink>
          {link && (
            <SmartLink
              href={link}
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
            >
              <Text variant="body-default-xs">Live</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>

      {/* Desktop-only action area */}
      <Flex
        gap="8"
        vertical="center"
        style={{ flexShrink: 0 }}
        className="project-list-actions-desktop"
      >
        {link && (
          <SmartLink
            href={link}
            suffixIcon="arrowUpRightFromSquare"
            style={{ margin: "0", width: "fit-content" }}
          >
            <Text variant="body-default-xs">Live</Text>
          </SmartLink>
        )}
      </Flex>

      <style>{`
        .project-list-thumb-inner {
          width: 120px;
          min-width: 120px;
          height: 80px;
        }
        .project-list-actions-mobile {
          display: none;
        }
        .project-list-actions-desktop {
          display: flex;
        }

        @media (max-width: 640px) {
          .project-list-thumb {
            width: 100%;
          }
          .project-list-thumb-inner {
            width: 100% !important;
            min-width: 100% !important;
            height: auto !important;
          }
          .project-list-actions-mobile {
            display: flex !important;
            margin-top: 4px;
          }
          .project-list-actions-desktop {
            display: none !important;
          }
        }
      `}</style>
    </Flex>
  );
};
