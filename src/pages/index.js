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
                <img src={card.icon} alt={card.title} style={{width: '2.5rem', height: '2.5rem'}} />
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

function LearningResources() {
  const resources = [
    {
      id: 1,
      title: 'Quick Start Guide',
      description: 'Get up and running with DataConnect in minutes with our step-by-step quick start guide.',
      icon: '🚀',
      link: '/docs/getting-started/getting-started-intro'
    },
    {
      id: 2,
      title: 'Data Profiling',
      description: 'Learn how to analyze and understand your data quality with powerful profiling tools.',
      icon: '📊',
      link: '/docs/dataconnect/data-quality'
    },
    {
      id: 3,
      title: 'API Reference',
      description: 'Explore our comprehensive API documentation for programmatic access.',
      icon: '📡',
      link: '/docs/integration-manager/APIs/quickstart-api-tutorial'
    },
    {
      id: 4,
      title: 'Best Practices',
      description: 'Discover proven strategies for building reliable and efficient data pipelines.',
      icon: '✅',
      link: '/docs/integration-manager/manager-overview'
    },
    {
      id: 5,
      title: 'Troubleshooting',
      description: 'Find solutions to common issues and learn debugging techniques.',
      icon: '🔧',
      link: '#faq'
    },
    {
      id: 6,
      title: 'Community',
      description: 'Join our community forums to connect with other DataConnect users.',
      icon: '👥',
      link: 'https://communities.actian.com/s/'
    }
  ];

  return (
    <div className={styles.learningResourcesSection}>
      <div className="container">
        <h2 className="text--center">Learning Resources</h2>
        <p className={styles.learningSubtitle}>Everything you need to master DataConnect</p>
        <div className={styles.learningGrid}>
          {resources.map((resource) => (
            <Link key={resource.id} to={resource.link} className={styles.learningCard}>
              <div className={styles.learningIcon}>{resource.icon}</div>
              <h3 className={styles.learningTitle}>{resource.title}</h3>
              <p className={styles.learningDescription}>{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoGrid() {
  const videos = [
    {
      id: 1,
      title: 'Quick Start Tutorial',
      description: 'Get started with DataConnect in just 5 minutes. Learn the basics and create your first integration.',
      videoId: '8glGaj-cWjQ',
      link: 'https://www.youtube.com/watch?v=8glGaj-cWjQ'
    },
    {
      id: 2,
      title: 'Data Quality Overview',
      description: 'Understand data profiling, validation, and cleansing techniques for maintaining high-quality data.',
      videoId: 'vLJJVfUCkRI',
      link: 'https://www.youtube.com/watch?v=vLJJVfUCkRI'
    },
    {
      id: 3,
      title: 'Integration Workflows',
      description: 'Learn how to build complex data integration workflows and orchestrate multi-step processes.',
      videoId: '8glGaj-cWjQ',
      link: 'https://www.youtube.com/watch?v=8glGaj-cWjQ'
    }
  ];

  return (
    <div className={styles.videoGridSection}>
      <div className="container">
        <h2 className="text--center">Watch and Learn</h2>
        <p className={styles.videoGridSubtitle}>Quick video guides to help you get the most out of DataConnect</p>
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoGridCard}>
              <div className={styles.videoGridEmbed}>
                <iframe 
                  width="100%" 
                  height="200" 
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className={styles.videoGridContent}>
                <h3 className={styles.videoGridTitle}>{video.title}</h3>
                <p className={styles.videoGridDescription}>{video.description}</p>
                <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles.videoGridLink}>
                  Watch on YouTube →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AvailableProviders() {
  const providers = [
    {
      id: 1,
      name: 'Salesforce',
      description: 'Cloud-based CRM platform for sales, service, and marketing.',
      icon: '☁️',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 2,
      name: 'AWS',
      description: 'Cloud computing services and infrastructure by Amazon.',
      icon: '🚪',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 3,
      name: 'Google Cloud',
      description: 'Cloud computing services offered by Google.',
      icon: '☁️',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 4,
      name: 'Microsoft Azure',
      description: 'Cloud computing platform and services by Microsoft.',
      icon: '☁️',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 5,
      name: 'PostgreSQL',
      description: 'Open source relational database management system.',
      icon: '📢',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 6,
      name: 'MySQL',
      description: 'Open source relational database management system.',
      icon: '🔷',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 7,
      name: 'MongoDB',
      description: 'NoSQL document-oriented database program.',
      icon: '🍃',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 8,
      name: 'Snowflake',
      description: 'Cloud data platform for data warehousing and analytics.',
      icon: '❄️',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 9,
      name: 'Oracle',
      description: 'Enterprise database management system and cloud applications.',
      icon: '💻',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 10,
      name: 'REST API',
      description: 'Web-based APIs using standard HTTP methods.',
      icon: '🔌',
      link: '/docs/integration-manager/APIs/quickstart-api-tutorial'
    },
    {
      id: 11,
      name: 'SAP',
      description: 'Enterprise resource planning and business software.',
      icon: '🏢',
      link: '/docs/integration-manager/configurations/configurations-overview'
    },
    {
      id: 12,
      name: 'Databricks',
      description: 'Unified analytics platform for big data and machine learning.',
      icon: '📦',
      link: '/docs/integration-manager/configurations/configurations-overview'
    }
  ];

  return (
    <section className={styles.providersSection}>
      <div className="container">
        <h2 className="text--center">Available Providers</h2>
        <p className={styles.providersSubtitle}>
          Connect to a wide range of data sources and cloud platforms
        </p>
        <div className={styles.providersGrid}>
          {providers.map((provider) => (
            <Link key={provider.id} to={provider.link} className={styles.providerCard}>
              <div className={styles.providerIcon}>{provider.icon}</div>
              <div className={styles.providerContent}>
                <h3 className={styles.providerName}>{provider.name}</h3>
                <p className={styles.providerDescription}>{provider.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.providersFooter}>
          <p>Don't see your provider here? <Link to="/docs/feedback">Let us know</Link></p>
        </div>
      </div>
    </section>
  );
}

function AllInOneFlow() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [enabledTabs, setEnabledTabs] = React.useState([true, false, false, false, false]);

  const handleTabClick = (index) => {
    if (!enabledTabs[index]) return;
    setActiveTab(index);
  };

  const handleNextTab = () => {
    const nextIndex = activeTab + 1;
    if (nextIndex < enabledTabs.length) {
      // Enable the next tab
      const newEnabledTabs = [...enabledTabs];
      newEnabledTabs[nextIndex] = true;
      setEnabledTabs(newEnabledTabs);
      // Switch to the next tab
      setActiveTab(nextIndex);
    }
  };

  const steps = [
    {
      id: 1,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V6M16 2V6" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8H17C18.1046 8 19 8.89543 19 10V11C19 13.7614 16.7614 16 14 16H10C7.23858 16 5 13.7614 5 11V10C5 8.89543 5.89543 8 7 8Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 16V22M14 16V22" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: '1. Connect →',
      shortDesc: 'Connect to your data sources with pre-built connectors or custom APIs.',
      details: {
        heading: 'Connect to Any Data Source',
        description: 'DataConnect provides pre-built connectors for all major data sources, databases, and cloud platforms. Whether you\'re working with Salesforce, PostgreSQL, MongoDB, or REST APIs, our connectors make integration seamless.',
        features: [
          'Pre-built connectors for 100+ data sources',
          'Custom API integration support',
          'Secure authentication and credential management',
          'Real-time and batch data ingestion'
        ]
      }
    },
    {
      id: 2,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: '2.Transform →',
      shortDesc: 'Apply data quality rules, profiling, and transformations in real-time.',
      details: {
        heading: 'Transform and Cleanse Your Data',
        description: 'Apply powerful data quality rules, profiling, and transformations to ensure your data meets the highest standards. Use our visual editor or write custom logic to shape your data exactly how you need it.',
        features: [
          'Visual data mapping and transformation editor',
          'Built-in data quality and validation rules',
          'Advanced profiling and cleansing capabilities',
          'Custom transformation scripts support'
        ]
      }
    },
    {
      id: 3,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: '3. Process →',
      shortDesc: 'Execute complex workflows with built-in orchestration and scheduling.',
      details: {
        heading: 'Orchestrate Complex Workflows',
        description: 'Build and execute sophisticated data pipelines with our powerful workflow engine. Schedule jobs, handle dependencies, and manage error handling with ease.',
        features: [
          'Visual workflow designer with drag-and-drop',
          'Flexible scheduling and trigger options',
          'Parallel processing and dependency management',
          'Built-in error handling and retry logic'
        ]
      }
    },
    {
      id: 4,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21H21" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 16L12 11L15 14L21 8" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 8H21V13" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: '4. Monitor →',
      shortDesc: 'Track performance, errors, and data quality metrics in real-time.',
      details: {
        heading: 'Monitor Performance and Quality',
        description: 'Get complete visibility into your data pipelines with comprehensive monitoring and analytics. Track execution history, performance metrics, and data quality scores in real-time.',
        features: [
          'Real-time job execution monitoring',
          'Performance and throughput metrics',
          'Data quality score tracking',
          'Alerting and notification system'
        ]
      }
    },
    {
      id: 5,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15V3M12 3L7 8M12 3L17 8" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: '5. Deploy',
      shortDesc: 'Publish to production environments with confidence and control.',
      details: {
        heading: 'Deploy with Confidence',
        description: 'Move your integrations from development to production seamlessly. Manage multiple environments, control access, and ensure reliable deployments with built-in versioning and rollback capabilities.',
        features: [
          'Multi-environment deployment support',
          'Version control and change tracking',
          'Role-based access control',
          'One-click rollback functionality'
        ]
      }
    }
  ];

  return (
    <section className={styles.allInOneFlowSection}>
      <div className="container">
        <h2 className={`text--center ${styles.capabilitiesTitle}`}>
          End-to-end data integration.
          <br />
          <span className={styles.capabilitiesTitleAccent}>All in one flow.</span>
        </h2>
        
        <div className={styles.tabsContainer}>
          <div className={styles.tabsList}>
            {steps.map((step, index) => (
              <button
                key={step.id}
                className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ''} ${!enabledTabs[index] ? styles.tabButtonDisabled : ''}`}
                onClick={() => handleTabClick(index)}
                disabled={!enabledTabs[index]}
              >
                <span className={styles.tabIcon}>{step.icon}</span>
                <span className={styles.tabTitle}>{step.title}</span>
              </button>
            ))}
          </div>
          
          <div className={styles.tabContent}>
            <div className={styles.tabPanel}>
              <div className={styles.tabPanelHeader}>
                <div className={styles.tabPanelIcon}>{steps[activeTab].icon}</div>
                <h3>{steps[activeTab].details.heading}</h3>
              </div>
              <p className={styles.tabPanelDescription}>
                {steps[activeTab].details.description}
              </p>
              <ul className={styles.tabPanelFeatures}>
                {steps[activeTab].details.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.featureCheck}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {activeTab < steps.length - 1 && (
                <button className={styles.nextTabButton} onClick={handleNextTab}>
                  Next: {steps[activeTab + 1].details.heading} →
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className={styles.flowFooter}>
          <p>From data source to insights, without ever leaving DataConnect.</p>
          <Link to="/docs/intro" className={styles.flowCTA}>Get Started</Link>
        </div>
      </div>
    </section>
  );
}

function AllInOneFlowSimple() {
  const [activeTab, setActiveTab] = React.useState(0);

  const capabilities = [
    {
      id: 1,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 8V11L13 13" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Analyze my data',
      label: 'Data Profiling & Analysis',
      description: 'Automatically discover patterns, anomalies, and quality issues in your data with intelligent profiling.',
      features: [
        'Automatic pattern detection',
        'Anomaly identification',
        'Data distribution analysis',
        'Quality score calculation'
      ],
      metric: '10x faster analysis',
      video: '/video/scene1.mp4'
    },
    {
      id: 2,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7H10M16 7H21" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="13" cy="7" r="3" stroke="#ff9800" strokeWidth="2" fill="none"/><path d="M3 17H6M12 17H21" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="17" r="3" stroke="#ff9800" strokeWidth="2" fill="none"/></svg>,
      title: 'Filter my data',
      label: 'Smart Data Filtering',
      description: 'Apply intelligent filters to focus on the data that matters most to your business.',
      features: [
        'Advanced filter builder',
        'Custom filter templates',
        'Real-time filter preview',
        'Filter performance optimization'
      ],
      metric: '95% accuracy rate',
      video: '/video/scene2.mp4'
    },
    {
      id: 3,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Create a rule',
      label: 'Rule Engine',
      description: 'Build custom validation and transformation rules with our intuitive rule builder.',
      features: [
        'Visual rule designer',
        'Pre-built rule templates',
        'Complex logic support',
        'Rule version control'
      ],
      metric: '50% faster setup',
      video: '/video/scene3.mp4'
    },
    {
      id: 4,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#lightning-gradient)" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="lightning-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#ffb74d" stopOpacity="0.4"/><stop offset="1" stopColor="#ff9800" stopOpacity="0.4"/></linearGradient></defs></svg>,
      title: 'Apply a rule',
      label: 'Automated Execution',
      description: 'Execute data quality rules automatically across all your data pipelines.',
      features: [
        'Scheduled execution',
        'Trigger-based automation',
        'Parallel processing',
        'Auto-scaling'
      ],
      metric: '24/7 uptime',
      video: '/video/scene4.mp4'
    },
    {
      id: 5,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Prep my data',
      label: 'Data Preparation',
      description: 'Transform and cleanse your data for analytics, reporting, and machine learning.',
      features: [
        'Visual data mapper',
        'Transformation library',
        'Data cleansing tools',
        'ML-ready output'
      ],
      metric: 'Zero-code required',
      video: '/video/scene5.mp4'
    },
    {
      id: 6,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 17V15M12 17V13M15 17V11" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      title: 'Monitor my data',
      label: 'Real-time Monitoring',
      description: 'Track data quality metrics and pipeline performance with comprehensive dashboards.',
      features: [
        'Live quality metrics',
        'Performance monitoring',
        'Alert notifications',
        'Historical trending'
      ],
      metric: 'Live data insights',
      video: '/video/scene6.mp4'
    }
  ];

  return (
    <section className={styles.capabilitiesTabSection}>
      <div className="container">
        <div className={styles.capabilitiesHeader}>
          <h2 className={styles.capabilitiesTitle}>
            Everything you need for
            <br />
            <span className={styles.capabilitiesTitleAccent}>data quality excellence</span>
          </h2>
        </div>
        
        <div className={styles.capabilitiesTabsWrapperVertical}>
          <div className={styles.capabilitiesTabsListVertical}>
            {capabilities.map((capability, index) => (
              <button
                key={capability.id}
                className={`${styles.capabilitiesTabVertical} ${activeTab === index ? styles.capabilitiesTabVerticalActive : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className={styles.capabilitiesTabIcon}>{capability.icon}</span>
                <span className={styles.capabilitiesTabTitle}>{capability.title}</span>
              </button>
            ))}
          </div>
          
          <div className={styles.capabilitiesTabContentVertical}>
            {capabilities[activeTab].video ? (
              <div className={styles.capabilitiesVideoContainer}>
                <video 
                  key={capabilities[activeTab].video}
                  className={styles.capabilitiesVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={capabilities[activeTab].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className={styles.capabilitiesTabPanel}>
                <div className={styles.capabilitiesTabTop}>
                  <div className={styles.capabilitiesTabIconLarge}>
                    {capabilities[activeTab].icon}
                  </div>
                  <div className={styles.capabilitiesTabMetric}>
                    {capabilities[activeTab].metric}
                  </div>
                </div>
                <h3 className={styles.capabilitiesTabHeading}>
                  {capabilities[activeTab].label}
                </h3>
                <p className={styles.capabilitiesTabDescription}>
                  {capabilities[activeTab].description}
                </p>
                <ul className={styles.capabilitiesTabFeatures}>
                  {capabilities[activeTab].features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={styles.capabilitiesFeatureCheck}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={styles.capabilitiesCTA}>
          <Link to="/docs/intro" className={styles.capabilitiesButton}>
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
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
    <section id="faq" className={styles.faqSection}>
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
      { url: '#faq', title: 'FAQ' },
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
        <AllInOneFlowSimple />
        <hr />
        <AllInOneFlow />
        <hr />
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
        <VideoGrid />
        <hr />
        <VideoShowcase />
        <hr />
        <LearningResources />
        <hr />
        <ConnectingPlugins />
        <hr />
        <AvailableProviders />
        <hr />
        <FAQ />


      </main>
    </Layout>
  );
}

