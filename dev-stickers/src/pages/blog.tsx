import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
export default function blog() {
  return (
    <Layout title={'Welcome my Blog!!'}>
      <div></div>
    </Layout>
  );
}
export const Head = () => Seo({ title: 'Blog' });
