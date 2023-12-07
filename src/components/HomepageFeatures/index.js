import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integration Platform Overview',
    Svg: require('@site/static/img/home/page-blue.svg').default,
    link: 'docs/',
  /*     description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  */  },
    {
    title: 'Integration Manager Users',
    Svg: require('@site/static/img/home/page-blue.svg').default,
    link: 'docs/integration-manager/manager-overview',
/*     description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
 */  },
{
    title: 'Integration Manager Admins',
    Svg: require('@site/static/img/home/page-blue.svg').default,
    link: 'docs/integration-manager/admin/admin-overview',
 /*    description: (
      <>

      </>
    ), */
  },
  {
    title: 'Integration Agent',
    Svg: require('@site/static/img/home/page-blue.svg').default,
    link: 'docs/integration-agent/agent-overview',
 /*    description: (
      <>

      </>
    ), */
  },
  {
    title: 'Release Notes',
    Svg: require('@site/static/img/home/releasenotes.svg').default,
    link: 'docs/release-notes',
 /*    description: (
      <>

      </>
    ), */
  },
  {
    title: 'Common Tasks',
    Svg: require('@site/static/img/home/tasks.svg').default,
    link: 'docs/common-tasks',
  /*     description: (
      <>

      </>
    ),
  */  },
    {
    title: 'Frequently Asked Questions',
    Svg: require('@site/static/img/home/FAQ.svg').default,
    link: 'docs/faq',
/*     description: (
      <>

      </>
    ),
 */  },
 {
  title: 'Feedback',
  Svg: require('@site/static/img/home/Feedback.svg').default,
  link: 'docs/feedback',
/*     description: (
    <>

    </>
  ),
*/  },
];


function Feature({Svg, title, description, link }) {
  return (
    <a href={link} className="featureLink">

    <div className={styles.feature}>
      <div className="text--center">
        {
           <Svg className="featureSVG-custom" role="img" />
        }      
      <h3 className="featureLink">{title}</h3>
      <p>{description}</p>
      </div>
    </div>
    </a>
  );
}



export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className={styles.featuresContainer}>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
          </div>
        </div>
      </div>
    </div>      
  </section>
  );
}
