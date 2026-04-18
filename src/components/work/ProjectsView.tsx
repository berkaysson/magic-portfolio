"use client";

import { useState } from "react";
import { Accordion, Column, Flex, IconButton } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { ProjectListItem } from "@/components/work/ProjectListItem";

interface ProjectData {
  slug: string;
  content: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images: string[];
    team?: { avatar: string }[];
    featured?: boolean;
    link?: string;
    archived?: boolean;
  };
}

interface ProjectsViewProps {
  projects: ProjectData[];
}

export function ProjectsView({ projects }: ProjectsViewProps) {
  const [viewMode, setViewMode] = useState<"compact" | "expanded">("compact");
  const activeProjects = projects.filter(
    (project) => !project.metadata.archived,
  );
  const archivedProjects = projects.filter(
    (project) => project.metadata.archived,
  );

  return (
    <>
      <Flex fillWidth horizontal="end" paddingX="l" paddingBottom="8">
        <Flex
          gap="4"
          style={{
            background: "var(--neutral-alpha-weak)",
            borderRadius: "var(--radius-m)",
            padding: "4px",
          }}
        >
          <IconButton
            icon="list"
            size="s"
            variant={viewMode === "compact" ? "secondary" : "ghost"}
            onClick={() => setViewMode("compact")}
            tooltip="List view"
          />
          <IconButton
            icon="grid"
            size="s"
            variant={viewMode === "expanded" ? "secondary" : "ghost"}
            onClick={() => setViewMode("expanded")}
            tooltip="Card view"
          />
        </Flex>
      </Flex>
      <Column
        fillWidth
        gap={viewMode === "compact" ? "8" : "xl"}
        marginBottom="40"
        paddingX="l"
      >
        {activeProjects.map((post, index) =>
          viewMode === "compact" ? (
            <ProjectListItem
              key={post.slug}
              href={`work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              publishedAt={post.metadata.publishedAt}
              link={post.metadata.link || ""}
              featured={post.metadata.featured}
            />
          ) : (
            <ProjectCard
              priority={index < 2}
              key={post.slug}
              href={`work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={
                post.metadata.team?.map((member) => ({
                  src: member.avatar,
                })) || []
              }
              link={post.metadata.link || ""}
              featured={post.metadata.featured}
            />
          ),
        )}
      </Column>

      {archivedProjects.length > 0 && (
        <Column fillWidth paddingX="l" marginBottom="40">
          <Accordion title={`Archived Projects (${archivedProjects.length})`}>
            <Column fillWidth gap="2">
              {archivedProjects.map((post) => (
                <ProjectListItem
                  key={post.slug}
                  href={`work/${post.slug}`}
                  images={post.metadata.images}
                  title={post.metadata.title}
                  description={post.metadata.summary}
                  publishedAt={post.metadata.publishedAt}
                  link={post.metadata.link || ""}
                  featured={post.metadata.featured}
                />
              ))}
            </Column>
          </Accordion>
        </Column>
      )}
    </>
  );
}
