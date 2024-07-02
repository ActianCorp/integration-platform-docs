/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    //{
    //  type: 'doc',
    //  id: 'intro',
    //  label: 'Overview',
    //},
    'intro',
    'release-notes',
    'integration-manager/quickstart-install',
    'accessing-the-integration-manager',
    'dashboard',
    'editing-your-profile',
    {
      type: 'category',
      label: 'INTEGRATION MANAGER USERS',
      className: 'categoryItem',
      items: [
        'integration-manager/manager-overview',
        {
          type: 'category',
          label: 'Configurations',
          items: [
            'integration-manager/configurations/configurations-overview',
            'integration-manager/configurations/importing-configurations',
            'integration-manager/configurations/creating-configurations',
            //'integration-manager/configurations/run-your-first-job',
            'integration-manager/configurations/editing-configuration-details',
            'integration-manager/configurations/activating-or-inactivating-configurations',
            'integration-manager/configurations/duplicating-configurations',
            'integration-manager/configurations/deleting-configurations',
            'integration-manager/configurations/creating-configuration-macros',
            'integration-manager/configurations/importing-configuration-macros',
            'integration-manager/configurations/managing-configuration-files',
            'integration-manager/configurations/running-configurations',
            'integration-manager/configurations/editing-configuration-schedules',
            'integration-manager/configurations/serialized-job-queues',
            'integration-manager/configurations/dataflow-usage',
          ]
        },
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'integration-manager/jobs/viewing-job-run-history',
            'integration-manager/jobs/job-status-codes',
            'integration-manager/jobs/downloading-the-log-file',
              ]
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            'integration-manager/templates/creating-templates',
            'integration-manager/templates/editing-template-details',
            'integration-manager/templates/creating-a-configuration-from-a-template',
            'integration-manager/templates/activating-or-inactivating-templates',
            'integration-manager/templates/importing-template-macros',
            'integration-manager/templates/managing-template-files',
            'integration-manager/templates/managing-template-configurations',
          ]
        },
        {
          type: 'category',
          label: 'Macros',
          items: [
            'integration-manager/macros/macros-overview',
            'integration-manager/macros/creating-macros',
            'integration-manager/macros/importing-macros',
            'integration-manager/macros/editing-macros',
            'integration-manager/macros/using-LOCAL_JOB_SPEC_DIR',
            'integration-manager/macros/using-preinstalled-driver-macros',
            'integration-manager/macros/securing-macros',
          ]
        },
        {
          type: 'category',
          label: 'Files',
          items: [
            'integration-manager/files/managing-files',
          ]
        },
        {
          type: 'category',
          label: 'APIs',
          items: [
            'integration-manager/APIs/quickstart-api-tutorial',
            'integration-manager/APIs/api-overview',
            'integration-manager/APIs/jobconfig-file-listener-api',
            'integration-manager/APIs/jobconfig-message-listener-api',
            'integration-manager/APIs/file-loader-api',
            'integration-manager/APIs/sfdc-outbound-messaging-api',
              ]
        },
        {
          type: 'category',
          label: 'Agents',
          items: [
            'integration-manager/agents-and-devices/managing-agents-and-devices',
            'integration-manager/agents-and-devices/download-agent',
            'integration-manager/agents-and-devices/execute-config-with-agent',
            'integration-manager/agents-and-devices/execute-template-with-agent',
            //'integration-manager/agents-and-devices/other-authorized-devices',
              ]
        },
      ]
    },
    {
      type: 'category',
      label: 'INTEGRATION MANAGER ADMINS',
      className: 'categoryItem',
      items: [
        'integration-manager/admin/admin-overview',
        {
          type: 'category',
          label: 'Configuring Security',
          items: [
            'integration-manager/admin/security/encryption-keystores',
            'integration-manager/admin/security/enabling-https',
            'integration-manager/admin/security/encryption-at-rest',
            'integration-manager/admin/security/access-token-signatures',
          ]
        },
        {
          type: 'category',
          label: 'Access Control',
          items: [
            'integration-manager/admin/access-control/user-management',
            'integration-manager/admin/access-control/access-control-polices',
            'integration-manager/admin/access-control/jobconfig-aliasing',
          ]
        },
        {
          type: 'category',
          label: 'Server Administration',
          link: {
            type: 'generated-index',
            title: 'Server Administration',
            description: 'Integration Manager can be deployed and configured to meet the most demanding production requirements.',
            slug: '/category/server-administration',
          },
          items: [
            'integration-manager/admin/server-administration/production-architecture',
            'integration-manager/admin/server-administration/production-configuration',
            'integration-manager/admin/server-administration/setup-mysql',
            'integration-manager/admin/server-administration/setup-ms-sql-server',
            'integration-manager/admin/server-administration/setup-rabbitmq',
            'integration-manager/admin/server-administration/setup-zookeeper',
            'integration-manager/admin/server-administration/setup-kubernetes',
            //'integration-manager/admin/server-administration/setup-kubernetes-on-prem',
            'integration-manager/admin/server-administration/server-upgrades',
            'integration-manager/admin/server-administration/integration-engines',
            {
              type: 'category',
              label: 'File Folder Listener',
              items: [
                'integration-manager/admin/server-administration/file-folder-listener/file-folder-listener-service',
                'integration-manager/admin/server-administration/file-folder-listener/local-folder-listener',
                'integration-manager/admin/server-administration/file-folder-listener/aws-s3-bucket-listener',
                'integration-manager/admin/server-administration/file-folder-listener/azure-blob-storage-listener',
                'integration-manager/admin/server-administration/file-folder-listener/google-cloud-storage-listener',
              ]
            },
          ]
        },
        'integration-manager/admin/aggregator-service',
        {
          type: 'category',
          label: 'Application Property Reference',
          items: [
            'integration-manager/admin/application-property-reference/properties-overview',
            'integration-manager/admin/application-property-reference/dataconnect-properties',
            'integration-manager/admin/application-property-reference/dataflow-properties',
            'integration-manager/admin/application-property-reference/datasource-properties',
            'integration-manager/admin/application-property-reference/file-repository-properties',
            'integration-manager/admin/application-property-reference/queue-connection-properties',
            //'integration-manager/admin/application-property-reference/scheduling-properties',
            'integration-manager/admin/application-property-reference/web-server-properties',
            'integration-manager/admin/application-property-reference/worker-properties',
          ]
        },
//        {
//          type: 'category',
//          label: 'File Listener Services',
//          items: [
//            'integration-manager/file-listener/file-listener-overview',
//            'integration-manager/file-listener/file-listener-local',
//            'integration-manager/file-listener/file-listener-aws',
//            'integration-manager/file-listener/file-listener-azure',
//            'integration-manager/file-listener/file-listener-google',
//            'integration-manager/file-listener/file-listener-history-management',
//              ]
//        },
        'integration-manager/admin/workload-management',
        'integration-manager/admin/setup-job-notifications',
        'integration-manager/admin/server-troubleshooting',
      ]
    },
    {
      type: 'category',
      label: 'INTEGRATION AGENT',
      items: [
        'integration-agent/agent-overview',
        'integration-agent/quickstart-install',
        'integration-agent/run-your-first-remote-job',
        'integration-agent/monitoring-agent-status',
        {
          type: 'category',
          label: 'On-Premise Data',
          items: [
            'integration-agent/on-prem-data/accessing-on-premise-storage',
            'integration-agent/on-prem-data/connecting-to-ms-sql-server',
          ]
        },
        {
          type: 'category',
          label: 'File Listener Services',
          items: [
            'integration-manager/file-listener/file-listener-overview',
            'integration-manager/file-listener/file-listener-local',
            'integration-manager/file-listener/file-listener-aws',
            'integration-manager/file-listener/file-listener-azure',
            'integration-manager/file-listener/file-listener-google',
            'integration-manager/file-listener/file-listener-history-management',
              ]
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          items: [
            'integration-agent/advanced-topics/configuration-files',
            'integration-agent/advanced-topics/manual-agent-registration',
            'integration-agent/advanced-topics/retrieve-agent-credential',
            'integration-agent/advanced-topics/scriptable-agent-registration',
            'integration-agent/advanced-topics/connecting-to-other-environments',
          ]
        },
        'integration-agent/agent-troubleshooting',
      ]
    },
  ],
};

module.exports = sidebars;

//module.exports = {
//  myAutogeneratedSidebar: [
//    {
//      type: 'autogenerated',
//      dirName: '.', // '.' means the current docs folder
//    },
//  ],
//};
