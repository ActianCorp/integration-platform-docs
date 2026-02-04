import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const cardData = [
  {
    id: 1,
    title: 'Data Quality',
    description: 'Ensure high-quality data with advanced profiling and validation tools.',
    icon: '📊',
    link: '/docs/dataconnect/data-quality'
  },
  {
    id: 2,
    title: 'Integration Manager',
    description: 'Manage and orchestrate your data integration workflows efficiently.',
    icon: '/img/home/integration.png',
    isImage: true,
    link: '/docs/integration-manager/manager-overview'
  },
//  {
//    id: 3,
//    title: 'Integration Agent',
//    description: 'Deploy agents for secure on-premise data connectivity.',
//    icon: '🔐',
//    link: '/docs/integration-agent/agent-overview'
//  }
];

const resourcesData = [
  {
    id: 1,
    title: 'Getting Started Guide',
    description: 'Learn how to set up and configure your first integration with Actian Integration Platform.',
    type: 'Guide',
    readTime: '5 min read',
    link: '/docs/getting-started/getting-started-intro'
  },
  {
    id: 2,
    title: 'How to Improve Data Quality',
    description: 'How to improve data quality by understanding its fundamentals, addressing common challenges, and adopting strategic steps and tools for sustainable data excellence.',
    type: 'Blog',
    readTime: '8 min read',
    link: 'https://www.actian.com/blog/data-quality/how-to-improve-data-quality/'
  },
  {
    id: 3,
    title: 'Integration Manager Tutorial',
    description: 'Watch this video tutorial to learn how to orchestrate complex data integration workflows.',
    type: 'Video',
    readTime: '10 min watch',
    link: '/docs/integration-manager/manager-overview'
  }
];

function HoverCards() {
  return (
    <div className={styles.cardsContainer}>
      {/* <h2 className="text--center">Explore Our Solutions</h2> */}
      <br />
      <div className={styles.cardsWrapper}>
        {cardData.map((card) => (
          <Link key={card.id} to={card.link} className={styles.card}>
            <div className={styles.cardIcon}>
              {card.isImage ? (
                <img src={card.icon} alt={card.title} style={{width: '4rem', height: '4rem'}} />
              ) : (
                card.icon
              )}
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <span className={styles.cardLink}>Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function WantToKnowMore() {
  return (
    <div className={styles.resourcesSection}>
      <div className="container">
        <h2 className="text--center">Want to Know More?</h2>
        <br />
        <div className={styles.resourcesGrid}>
          {resourcesData.map((resource) => (
            <Link key={resource.id} to={resource.link} className={styles.resourceCard}>
              <div className={styles.resourceBadge}>{resource.type}</div>
              <h3 className={styles.resourceTitle}>{resource.title}</h3>
              <p className={styles.resourceDescription}>{resource.description}</p>
              <div className={styles.resourceFooter}>
                <span className={styles.readTime}>{resource.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoShowcase() {
  return (
    <div className={styles.videoShowcase}>
      <div className="container">
        <h2 className="text--center">Video Tutorials</h2>
        <div className={styles.videoColumns}>
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <div className={styles.videoDescription}>
                <h3>Getting Started with Data Integration</h3>
                <p>
                  Learn the fundamentals of data integration with Actian. This tutorial covers 
                  the basic concepts, setup process, and your first integration workflow.
                </p>
                <ul>
                  <li>Platform overview</li>
                  <li>Creating your first workflow</li>
                  <li>Best practices and tips</li>
                </ul>
              </div>
              <div className={styles.videoEmbed}>
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/8glGaj-cWjQ?si=0-0NU0L_PgAiyRaG" 
                  title="Getting Started Tutorial" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
          
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <div className={styles.videoDescription}>
                <h3>Advanced Data Quality Techniques</h3>
                <p>
                  Dive deep into data quality management with advanced profiling, validation, 
                  and cleansing techniques to ensure your data meets the highest standards.
                </p>
                <ul>
                  <li>Data profiling strategies</li>
                  <li>Validation rules setup</li>
                  <li>Automated cleansing workflows</li>
                </ul>
              </div>
              <div className={styles.videoEmbed}>
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/vLJJVfUCkRI?si=EaL9DszlSHUHg455" 
                  title="Data Quality Tutorial" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: 'What is Actian DataConnect?',
      answer: 'Actian DataConnect is a comprehensive data integration and quality platform that enables organizations to connect, transform, and manage data across multiple sources. It provides powerful tools for data profiling, validation, cleansing, and integration workflows.'
    },
    {
      question: 'How does the Integration Manager work?',
      answer: 'The Integration Manager allows you to create, schedule, and monitor data integration workflows. You can configure connections to various data sources, define transformation logic, set up schedules, and track execution history all from a centralized interface.'
    },
    {
      question: 'What data sources are supported?',
      answer: 'DataConnect supports a wide range of data sources including cloud platforms (Salesforce, AWS S3), databases (PostgreSQL, MySQL, MongoDB), REST APIs, and many more. Each connector is optimized for its specific technology.'
    },
    {
      question: 'Can I run integrations on-premise?',
      answer: 'Yes, you can deploy Integration Agents in your on-premise environment to securely connect to local data sources while managing configurations through the cloud-based Integration Manager.'
    },
    {
      question: 'How do I get started with DataConnect?',
      answer: 'Start by exploring our Getting Started Guide, which covers platform setup, creating your first integration, and best practices. You can also watch our video tutorials for step-by-step instructions.'
    },
    {
      question: 'What kind of support is available?',
      answer: 'We provide comprehensive documentation, video tutorials, community forums, and direct support channels. Premium users have access to dedicated support teams and consultation services.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className="text--center">Frequently Asked Questions</h2>
        <p className={styles.faqSubtitle}>Common questions about data integration and DataConnect</p>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectingPlugins() {
  const connectors = [
    { name: 'Salesforce', icon: '☁️', link: '/docs/integration-manager/configurations/configurations-overview' },
    { name: 'AWS S3', icon: '📦', link: '/docs/integration-manager/configurations/configurations-overview' },
    { name: 'PostgreSQL', icon: '📢', link: '/docs/integration-manager/configurations/configurations-overview' },
    { name: 'MySQL', icon: '🔷', link: '/docs/integration-manager/configurations/configurations-overview' },
    { name: 'MongoDB', icon: '🍃', link: '/docs/integration-manager/configurations/configurations-overview' },
    { name: 'REST API', icon: '🔌', link: '/docs/integration-manager/APIs/quickstart-api-tutorial' },
  ];

  return (
    <section className={styles.pluginsSection}>
      <div className="container">
        <h2 className="text--center">Connecting Data Sources</h2>
        <p className={styles.pluginsIntro}>
          Using our built-in connectors is a quick way to integrate your data sources. Each
          connector is optimized for its specific technology, allowing you to chain them together
          like building blocks to create powerful data pipelines.
        </p>
        <p className={styles.pluginsBrowse}>
          Browse the <Link to="/docs/integration-manager/configurations/configurations-overview">available connectors</Link> to see what's supported!
        </p>
        <div className={styles.pluginsGrid}>
          {connectors.map((connector, idx) => (
            <Link key={idx} to={connector.link} className={styles.pluginCard}>
              <div className={styles.pluginIcon}>{connector.icon}</div>
              <div className={styles.pluginName}>{connector.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container homeheader">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="subtitle">Data Quality & Integration</p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--md"
            to="/docs/intro">
            View Docs &#8250;&#8250;
          </Link>
        </div>
    </div>
    </header>
  );
}

const features = [
  {
    title: 'Basics',
    description: <>Familiarize with DataConnect basics</>,
    links: [
      { url: '/docs/getting-started/getting-started-intro', title: 'Getting started' },
      { url: '#', title: 'Main Concepts' },
      { url: '#', title: 'End-to-End Process Overview' },
      { url: '#', title: 'Data Prep Rules' },
      { url: '#', title: 'Profiling Rules' },
      { url: '#', title: 'Remediation' },
      { url: '#', title: 'Monitoring' },
      { url: '#', title: 'FAQ' },
      { url: '#', title: 'Glossary' },
    ],
  },
  {
    title: 'Common Tasks',
    description: <>Perform Frequent DataConnect tasks</>,
    links: [
      { url: '#', title: 'Using the Map Editor' },
      { url: '#', title: 'Creating a Data Profile' },
      { url: '#', title: 'Adding Data Quality Rules' },
      { url: '#', title: 'Creating a Map' },
      { url: '#', title: 'Creating a  Macro Set' },
      { url: '#', title: 'Creating a Schema' },
      { url: '#', title: 'Using Design Templates' },
      { url: '#', title: 'Creating a New Integration' },
      { url: '#', title: 'Adding a New Rule' },
    ],
    },
    {
    title: 'Advanced Guides',
    description: <>API, CLI, SAML, Webhooks...</>,
    links: [
      {
        url: '#',
        title: 'Using the API',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
      {
        url: '#',
        title: 'Link to topic...',
      },
    ],
  },
  {
    title: 'Integrations', // This list should be in alphabetical order
    description: <>Get connected to increase productivity</>,
    links: [
      { url: '#', title: 'Amplitude' },
      { url: '#', title: 'Azure DevOps' },
      { url: '#', title: 'Bitrise Step' },
      { url: '#', title: 'Bitbucket Pipe' },
      { url: '#', title: 'CircleCI Orb' },
      { url: '#', title: 'DataDog' },
      { url: '#', title: 'GitHub Action' },
      { url: '#', title: 'Google Analytics' },
      { url: '#', title: 'GitLab (via CLI)' },
    ],
  },
];

function Feature({ imageUrl, title, description, links }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={clsx('no-auto-height', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3><b>{title}</b></h3>
      <p>{description}</p>
      {FeatureItems(links)}
    </div>
  );
}

function FeatureItems(links) {
  return (
    <ul class="feature-list">
      {links.map(({ url, title, items }) => (
        <li>
          <Link to={useBaseUrl(url)}>{title}</Link>
          {items?.length && FeatureItems(items)}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <HoverCards />
        <hr />
        <WantToKnowMore />
        <hr />
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h2 className="text--center">Quick Links</h2>
              <br />
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
            <hr />
            <h2 className="text--center">Watch and Learn</h2>
            <br />
            <div className="container">
              <div className="row">
                <div className="col col--6" style={{fontSize: '1.25rem'}}>
                  Data Quality and Governance.
                </div>
                <div className="col col--6">
                  <iframe width="420" height="236" src="https://www.youtube.com/embed/8glGaj-cWjQ?si=0-0NU0L_PgAiyRaG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col col--6" style={{fontSize: '1.25rem'}}>
                  Description for video 2.
                </div>
                <div className="col col--6">
                  <iframe width="420" height="236" src="https://www.youtube.com/embed/vLJJVfUCkRI?si=EaL9DszlSHUHg455" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col col--6" style={{fontSize: '1.25rem'}}>
                  Description for video 3.
                </div>
                <div className="col col--6">
                  <iframe width="420" height="236" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
        )}
        <hr />
        <VideoShowcase />
        <hr />
        <ConnectingPlugins />
        <hr />
        <FAQ />


      </main>
    </Layout>
  );
}

