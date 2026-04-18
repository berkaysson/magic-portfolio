import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  IconButton,
  RevealFx,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, social, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { ProjectsView } from "@/components/work/ProjectsView";
import { getPosts } from "@/app/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  const allProjects = getPosts(["src", "app", "work", "projects"]);
  const sortedProjects = allProjects.sort((a, b) => {
    if (a.metadata.featured && !b.metadata.featured) return -1;
    if (!a.metadata.featured && b.metadata.featured) return 1;
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header Section */}
      <Column paddingX="l" paddingTop="12" paddingBottom="24" gap="4">
        <RevealFx>
          <Heading as="h1" variant="display-strong-s">
            Personal Projects
          </Heading>
        </RevealFx>
        <RevealFx delay={0.1}>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            style={{ maxWidth: "640px" }}
          >
            A collection of side projects and experiments I've built in my free
            time. These are my personal playgrounds — tools, apps, and ideas I
            craft to explore new technologies and scratch my own itch.
          </Text>
        </RevealFx>
      </Column>

      <ProjectsView projects={sortedProjects} />

      <RevealFx paddingTop="12" delay={0.1} horizontal="start" paddingLeft="12">
        <Button
          id="about"
          data-border="rounded"
          href={social[0].link}
          variant="secondary"
          size="m"
          arrowIcon
        >
          <Flex gap="8" vertical="center">
            {social && (
              <Avatar
                style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                src={person.avatar}
                size="m"
              />
            )}
            Discover my other personal projects
            <IconButton
              key={social[0].name}
              href={social[0].link}
              icon={social[0].icon}
              tooltip={social[0].name}
              size="s"
              variant="ghost"
            />
          </Flex>
        </Button>
      </RevealFx>
    </Column>
  );
}
