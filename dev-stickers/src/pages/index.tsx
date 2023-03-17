import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout title={'Home'}>
      <div></div>
    </Layout>
  );
}

export const Head = () => Seo({ title: 'Home' });
