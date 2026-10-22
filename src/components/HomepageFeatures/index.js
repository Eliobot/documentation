import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Elioblocs',
    Svg: require('@site/static/img/logos/elioblocs.svg').default,
    link: 'https://app.eliobot.com',
    description: (
      <>
        <Translate id="homepage.features.elioblocs.description">
          Outil de programmation par blocs, idéal pour débuter sans se soucier de la syntaxe du code.
        </Translate>
      </>
    ),
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/logos/python.svg').default,
    link: '/docs/python_lib/intro',
    description: (
      <>
        <Translate id="homepage.features.python.description">
          Le langage le plus utilisé au monde actuellement, il conviendra parfaitement à ceux qui veulent commencer le code.
        </Translate>
      </>
    ),
  },
  {
    title: 'Arduino',
    Svg: require('@site/static/img/logos/arduino.svg').default,
    description: (
      <>
        <Translate id="homepage.features.arduino.description">
          Pour ceux qui veulent aller plus loin en programmation, tout en bénéficiant d'un écosystème étendu.
        </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
      <Link className={clsx('col col--4 featureCol')} to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">
          {translate({
            id: 'homepage.features.title',
            message: '1 robot, 3 façons de le programmer',
          })}
        </Heading>
      </div>
      <div className={styles.features}>
        <div className="container">
          <div className="row featureRow">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
