import { Button, Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ lang?: "en" | "tr" | null }>;
}) {
  const { lang = "en" } = await searchParams;
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
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>

      <Column fillWidth flex={1}>
        <Button
          data-border="rounded"
          href={`/blog${lang === "en" ? "?lang=tr" : ""}`}
          weight="default"
          variant="primary"
          size="s"
          suffixIcon="globe"
          style={{ marginBottom: 24 }}
        >
          {lang === "tr" ? "Read English Posts" : "Türkçe Paylaşımları Oku"}
        </Button>
        <Posts
          lang={lang || "en"}
          range={[1, 1]}
          thumbnail
          direction="column"
        />
        <Posts lang={lang || "en"} range={[2, 3]} thumbnail />
        <Posts lang={lang || "en"} range={[4]} columns="2" />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
