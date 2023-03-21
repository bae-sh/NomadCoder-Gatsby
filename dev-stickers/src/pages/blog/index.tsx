import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { graphql, Link, PageProps } from 'gatsby';
export default function blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  // 쿼리의 데이터가 들어감
  console.log(data);
  return (
    <Layout title={'Blog'}>
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>{file.frontmatter?.date}</h5>
              <h5>{file.frontmatter?.author}</h5>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          category
          date(formatString: "YYYY.MM.DD")
          title
          author
        }
        excerpt
      }
    }
  }
`;
export const Head = () => Seo({ title: 'Blog' });
