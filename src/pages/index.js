import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="" description="Team Tech Project">
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
          Each month, members come together to form teams, build awesome
          projects, and share what they built and learned the following month.
        </p>
        <p>
          Every team that presents their project will earn a spot on the club
          website in the <Link to="/gallery">Team Tech Project gallery!</Link>
        </p>
      </main>
    </Layout>
  );
}

export default Home;
