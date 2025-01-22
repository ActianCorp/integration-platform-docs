import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Integration Manager',
    qqq: "/docs/integration-manager/manager-overview",
    Svg: require('@site/static/img/home/im5.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Integration Agent',
    qqq: "/docs/integration-agent/agent-overview",
    Svg: require('@site/static/img/home/ia4.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Release Notes',
    qqq: "/docs/release-notes",
    Svg: require('@site/static/img/home/releasenotes.svg').default,
    description: (
      <>
     </>
    ),
  },
];

function Feature({Svg, title, qqq, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Link to={qqq}>{title}</Link></Heading>
       
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
