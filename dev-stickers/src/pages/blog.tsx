import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
export default function blog() {
  return (
    <Layout title={'Welcome my Blog!!'}>
      <p>news</p>

      <article>
        <h4>My first post</h4>
      </article>
    </Layout>
  );
}
export const Head = () => Seo({ title: 'Blog' });
