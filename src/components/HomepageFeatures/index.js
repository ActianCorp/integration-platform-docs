import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Getting Started',
    doc: "/docs/getting-started",
    png: "/img/home/rocket1.png",
    description: (
      <>
      Get up and running quickly with DataConnect.
     </>
    ),
  },  {
    title: 'Data Quality',
    doc: "/docs/dataconnect/data-quality",
    png: "/img/home/data-quality.png",
    description: (
      <>
      Improve and monitor the accuracy and consistency of your data.
      </>
    ),
  },
  {
    title: 'Integration',
    doc: "/docs/integration-manager/manager-overview",
    png: "/img/home/integration.png",
    description: (
      <>
      Create and manage data integration designs.
      </>
    ),
  },
];

function Feature({title, doc, png, description}) {
  return (
    <div className={clsx('col col--4')}>
        <div className="text--center">
          <img src={png} className="icon" alt="" />
          <div className="text--center padding-horiz--md">
          <Heading as="h3"><b>{title}</b></Heading> 
          <center>
            <div className="card-text">
              {description}
            </div>
          </center>
          </div>
          <Link className="button button--primary button--md" to={doc}>
            View Docs &#8250;&#8250;
          </Link>
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
