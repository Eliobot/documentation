import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial/eliobot-assembly">
            Assemble Eliobot - 15min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageAppSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.elioblocsBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Tu es prêt à te lancer ?
        </Heading>
        <p className="hero__subtitle">
          Retrouve ton application de programmation par blocs préférée <br></br> et libère ton imagination pour jouer avec Eliobot.  
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://app.eliobot.com">
            Elioblocs
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageCommunitySection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.discordBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Rejoins la communauté
        </Heading>
        <p className="hero__subtitle">
          Partage tes créations, tes défis et tes idées les plus folles avec <br></br> les membres de la communauté sur notre serveur Discord
        </p>
        <a href="https://discord.com/invite/abq2t9vdMN"><img src={require('@site/static/img/discord-eliobot.png').default}></img></a>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.com/invite/abq2t9vdMN">
            Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageAppSection />
        <HomepageCommunitySection />
      </main>
    </Layout>
  );
}
