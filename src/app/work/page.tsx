import {
  Avatar,
  Button,
  Column,
  Flex,
  IconButton,
  RevealFx,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, social, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

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
      <Projects />

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
            Discover my other projects
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
