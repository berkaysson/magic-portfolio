import { Button, Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export const dynamic = "error";
export const runtime = "nodejs";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
    path: "/blog-tr",
  });
}

export default async function BlogTR() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path="/blog-tr"
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog-tr`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>

      <Column fillWidth flex={1}>
        <Button
          data-border="rounded"
          href="/blog"
          weight="default"
          variant="primary"
          size="s"
          suffixIcon="globe"
          style={{ marginBottom: 24 }}
        >
          Read English Posts
        </Button>
        <Posts
          lang="tr"
          range={[1, 1]}
          thumbnail
          direction="column"
        />
        <Posts lang="tr" range={[2, 3]} thumbnail />
        <Posts lang="tr" range={[4]} columns="2" />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}


