import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Integration Manager',
    doc: "/docs/integration-manager/manager-overview",
    png: "/img/home/im.png",
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Integration Agent',
    doc: "/docs/integration-agent/agent-overview",
    png: "/img/home/ia.png",
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Release Notes',
    doc: "/docs/release-notes",
    png: "/img/home/release-notes.png",
    description: (
      <>
     </>
    ),
  },
];

function Feature({title, doc, png, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={doc}>
        <div className="text--center">
          <img src={png} className="homepage-tile-image" alt="" />
        </div>
        <div className="text--center padding-horiz--md"><br />
          <Heading as="h3"><b>{title}</b></Heading> 
        </div>
      </Link> 
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
