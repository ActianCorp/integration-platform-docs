import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Getting Started',
    doc: "/docs/quickstart",
    png: "/img/home/rocket1.png",
    btn: "Get Started",
    description: (
      <>
      Get up and running quickly with Cortex.
      </>
    ),
  },
  {
    title: 'User Guides',
    doc: "/docs/collections",
    png: "/img/home/reader.png",
    btn: "View the Docs",
    description: (
      <>
      View detailed user documentation.
      </>
    ),
  },
  {
    title: 'Tutorials',
    doc: "/docs/category/tutorials",
    png: "/img/home/tutorial.png",
    btn: "Start Learning",
    description: (
      <>
      Hands-on learning with real-world examples.
     </>
    ),
  },
];

function Feature({title, doc, png, description, btn}) {
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
            {btn} &#8250;&#8250;
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
