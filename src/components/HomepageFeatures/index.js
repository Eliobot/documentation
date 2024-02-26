import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Elioblocs',
    Svg: require('@site/static/img/elioblocs.svg').default,
    link: 'docs/category/programmer-avec-elioblocs',
    description: (
      <>
        Outil de programmation par blocs, idéal pour débuter sans se soucier de la syntaxe du code.
      </>
    ),
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/python.svg').default,
    link: 'docs/category/programmer-en-python',
    description: (
      <>
        Le langage le plus utilisé au monde actuellement, il conviendra parfaitement a ceux qui veulent commencer le code.
      </>
    ),
  },
  {
    title: 'Arduino',
    Svg: require('@site/static/img/arduino.svg').default,
    description: (
      <>
        Pour ceux qui veulent aller plus loin en programmation, tout en bénéficiant d'un écosystème étendu.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
      <a className={clsx('col col--4 featureCol')} href= {link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">1 robot, 3 façons de le programmer</Heading>
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
