import * as React from "react";
import Link from "next/link";
import Layout from "../src/components/Layout";

export default () => (
  <Layout title="About">
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <div>
      <p>
        You know, it really doesn’t matter what you write as long as you’ve got
        a young, and beautiful, piece of text. The concept of Lorem Ipsum was
        created by and for the Chinese in order to make U.S. design jobs
        non-competitive. I'm speaking with myself, number one, because I have a
        very good brain and I've said a lot of things.
      </p>
      <p>
        When other websites give you text, they’re not sending the best. They’re
        not sending you, they’re sending words that have lots of problems and
        they’re bringing those problems with us. They’re bringing mistakes.
        They’re bringing misspellings. They’re typists… And some, I assume, are
        good words. You could see there was text coming out of her eyes, text
        coming out of her wherever. When other websites give you text, they’re
        not sending the best. They’re not sending you, they’re sending words
        that have lots of problems and they’re bringing those problems with us.
        They’re bringing mistakes. They’re bringing misspellings. They’re
        typists… And some, I assume, are good words. Look at these words. Are
        they small words? And he referred to my words - if they're small,
        something else must be small. I guarantee you there's no problem, I
        guarantee.
      </p>
      <p>
        I write the best placeholder text, and I'm the biggest developer on the
        web by far... While that's mock-ups and this is politics, are they
        really so different? This placeholder text is gonna be HUGE. Look at
        that text! Would anyone use that? Can you imagine that, the text of your
        next webpage?!
      </p>
      <p>
        You’re disgusting. My placeholder text, I think, is going to end up
        being very good with women.
      </p>
      <p>
        An 'extremely credible source' has called my office and told me that
        Lorem Ipsum's birth certificate is a fraud. You're telling the enemy
        exactly what you're going to do. No wonder you've been fighting Lorem
        Ipsum your entire adult life. I write the best placeholder text, and I'm
        the biggest developer on the web by far... While that's mock-ups and
        this is politics, are they really so different?
      </p>
    </div>
  </Layout>
);
