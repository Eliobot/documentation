import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.hero.title">Le monde de Eliobot</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            Tu débutes ? Suis-moi pour découvrir l'assemblage et la programmation de ton nouveau compagnon !
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://learn.eliobot.com/assemblage-complet/">
            <Translate id="homepage.hero.cta">Assembler Eliobot - 15 min ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageAppSection() {
  return (
    <header className={clsx('hero hero--primary', styles.elioblocsBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.app.title">Tu es prêt à te lancer ?</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.app.subtitle">
            Retrouve ton application de programmation par blocs préférée
          </Translate>{' '}
          <br></br>{' '}
          <Translate id="homepage.app.subtitle.line2">
            et libère ton imagination pour jouer avec Eliobot.
          </Translate>
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
  return (
    <header className={clsx('hero hero--primary', styles.discordBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.community.title">Rejoins la communauté</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.community.subtitle">
            Partage tes créations, tes défis et tes idées les plus folles avec
          </Translate>{' '}
          <br></br>{' '}
          <Translate id="homepage.community.subtitle.line2">
            les membres de la communauté sur notre serveur Discord
          </Translate>
        </p>
        <a href="https://discord.com/invite/abq2t9vdMN"><img src={require('@site/static/img/homepage/discord-eliobot.png').default}></img></a>
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
  return (
    <Layout
      title={translate({
        id: 'homepage.layout.title',
        message: 'Accueil',
      })}
      description={translate({
        id: 'homepage.layout.description',
        message: "Page d'accueil Eliobot",
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageAppSection />
        <HomepageCommunitySection />
      </main>
    </Layout>
  );
}
