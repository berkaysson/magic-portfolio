import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { ProjectListItem } from "@/components/work/ProjectListItem";

interface ProjectsProps {
  range?: [number, number?];
  viewMode?: "compact" | "expanded";
}

export function Projects({ range, viewMode = "expanded" }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column
      fillWidth
      gap={viewMode === "compact" ? "2" : "xl"}
      marginBottom="40"
      paddingX="l"
    >
      {displayedProjects.map((post, index) =>
        viewMode === "compact" ? (
          <ProjectListItem
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            publishedAt={post.metadata.publishedAt}
            link={post.metadata.link || ""}
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
              post.metadata.team?.map((member) => ({ src: member.avatar })) ||
              []
            }
            link={post.metadata.link || ""}
          />
        ),
      )}
    </Column>
  );
}
