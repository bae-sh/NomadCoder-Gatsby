import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
interface ISeo {
  title: string;
}
export default function Seo({ title }: ISeo) {
  const data = useStaticQuery<Queries.SeoQueryQuery>(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data.site?.siteMetadata?.title);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
