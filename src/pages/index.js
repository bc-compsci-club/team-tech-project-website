import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import banner from "../../static/img/banner-long.png";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.landingHeading)}>
            Team Tech Project
          </h1>
          <h2>
            Presented by the
            <br />
            Brooklyn College Computer Science Club
          </h2>

          <br />

          <h2>
            Next Meetup:
            <br />
            October 13, 2020
          </h2>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.landingDescription}>
        <p>
          Team Tech Project is a monthly meetup for club members interested in
          gaining experience working in a team, as well as building up their
          portfolio with awesome projects.
        </p>
        <p>
          Form teams to build awesome projects and share what you built the
          following month!
        </p>
        <p>
          Every team that presents their project will earn a spot on the club
          website in the Team Tech Project gallery!
        </p>
      </main>
    </Layout>
  );
}

export default Home;
