import { Container } from "@bootstrap-styled/v4";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ArrowRight from "@svgr-iconkit/fontawesome5/icons/regular/arrow-alt-circle-right";
import { Icon } from "@svgr-iconkit/core";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      
      <Container>
        <img width="280" src={useBaseUrl('/img/logo.svg')} alt={siteConfig.title} />
        <p className={clsx("hero__subtitle", styles.heroBannerSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/0.2.0/intro"
          >
            Get Started in 1 mins <Icon content={ArrowRight} size={18} />
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
