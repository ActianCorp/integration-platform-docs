import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'DataConnect',
    doc: "/docs/dataconnect/intro",
    png: "/img/home/DataConnect.svg",
    description: (
      <>
       A digital business platform for hybrid data integration, transformation, and management.
      </>
    ),
  },
  {
    title: 'Integration Manager',
    doc: "/docs/intro",
    png: "/img/home/im.png",
    description: (
      <>
      An elastic cloud-based platform that enables the design, deployment, and management of web-based integrations.
      </>
    ),
  },
  {
    title: 'Release Notes',
    doc: "/docs/release-notes",
    png: "/img/home/list.png",
    description: (
      <>
      New features, bug fixes, and known issues for each release.
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
        <br />
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
