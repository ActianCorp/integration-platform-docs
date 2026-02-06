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
      icon: '🔌',
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
      icon: '📦',
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
      icon: '⚙️',
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
      icon: '📊',
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
      icon: '🚀',
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
        <h2 className="text--center">End-to-end data integration.<br/>All in one flow.</h2>
        
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
      icon: '🔬',
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
      icon: '🎯',
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
      icon: '⚙️',
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
      icon: '⚡',
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
      icon: '🛠️',
      title: 'Perform data prep',
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
      icon: '📊',
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

