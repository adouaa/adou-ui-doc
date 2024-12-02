import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
// 在这里引入 图标库
import "@site/src/assets/css/fontawesome/6.3.0/all.min.css";
import "@site/src/assets/css/bi/1.11.0/all.min.css";

import styles from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 bootstrap 属性在滚动的时候，左侧的导航栏会跟着一起滚动

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Adou UI
        </Heading>
        <p className="hero__subtitle">
          A Bootstrap based React UI Component Library
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/form/button"
          >
            Docusaurus Tutorial - 5min213242343454 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
