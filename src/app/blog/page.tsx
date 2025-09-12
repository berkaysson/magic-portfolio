import { Button, Column, Heading, Row } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
 

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const rawLang = searchParams?.lang;
  const langFromQuery = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const selectedLang = (langFromQuery === 'tr' ? 'tr' : 'en') as 'en' | 'tr';

  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth vertical="center" marginBottom="l" gap="8" horizontal="space-between">
        <Heading variant="display-strong-s">
          {blog.title}
        </Heading>
        <Row gap="8">
          <Button
            data-border="rounded"
            href={`?lang=en`}
            variant={selectedLang === 'en' ? 'primary' : 'tertiary'}
            weight={selectedLang === 'en' ? 'strong' : 'default'}
            size="s"
          >
            English
          </Button>
          <Button
            data-border="rounded"
            href={`?lang=tr`}
            variant={selectedLang === 'tr' ? 'primary' : 'tertiary'}
            weight={selectedLang === 'tr' ? 'strong' : 'default'}
            size="s"
          >
            Türkçe
          </Button>
        </Row>
      </Row>
      <Column
				fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column" lang={selectedLang}/>
				<Posts range={[2,3]} thumbnail lang={selectedLang}/>
				<Posts range={[4]} columns="2" lang={selectedLang}/>
			</Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
