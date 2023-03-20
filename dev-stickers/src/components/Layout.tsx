import React from 'react';
import { Link } from 'gatsby';
interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
export default function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
       </main>
    </div>
  );
}
