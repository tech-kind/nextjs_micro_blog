import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyle from "@/styles/utils.module.css";

import Link from "next/link";
import { getPostsData } from "../lib/post";
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          私はアプリケーションエンジニアです/好きな言語はC#です
        </p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map((post) => (
            <article key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <img src={post.thumbnail} className={styles.thumbnailImage} />
              </Link>
              <Link legacyBehavior href={`/posts/${post.id}`}>
                <a className={utilStyle.boldText}>{post.title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                {post.date}
              </small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
