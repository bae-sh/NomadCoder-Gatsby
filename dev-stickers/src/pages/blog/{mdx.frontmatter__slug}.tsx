import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';
interface IBlogPostProps {
  data: Queries.PorstDetailQuery;
  children: any;
}
export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data, children);
  return (
    <Layout title="Blog Post">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PorstDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title!} />;