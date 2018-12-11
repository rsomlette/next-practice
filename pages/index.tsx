import * as React from "react";
import Link from "next/link";
import Layout from "../src/components/Layout";

export default () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);
