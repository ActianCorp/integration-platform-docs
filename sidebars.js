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
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    'release-notes',
    //    'someOtherDoc',
    {
      type: 'category',
      label: 'INTEGRATION MANAGER USERS',
      className: 'categoryItem',
      items: [
        'integration-manager/manager-overview',
        'integration-manager/quickstart-install',
        'integration-manager/accessing-the-integration-manager',
        'integration-manager/dashboard',
        'integration-manager/editing-your-profile',
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'integration-manager/jobs/run-your-first-job',
            'integration-manager/jobs/viewing-job-run-history',
            'integration-manager/jobs/job-status-codes',
            'integration-manager/jobs/downloading-the-log-file',
              ]
        },
        {
          type: 'category',
          label: 'Configurations',
          items: [
            'integration-manager/configurations/configurations-overview',
            'integration-manager/configurations/creating-configurations-on-prem',
            'integration-manager/configurations/creating-configurations-cloud',
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
          label: 'Templates',
          items: [
            //'integration-manager/templates/templates-overview',
            'integration-manager/templates/creating-templates',
            'integration-manager/templates/editing-template-details',
            'integration-manager/templates/creating-a-configuration-from-a-template',
            'integration-manager/templates/activating-or-inactivating-templates',
            //'integration-manager/templates/deleting-templates',
            'integration-manager/templates/importing-template-macros',
            'integration-manager/templates/managing-template-files',
            'integration-manager/templates/managing-template-configurations',
          ]
        },
         //'integration-manager/job-scheduling',
        {
          type: 'category',
          label: 'Macros',
          items: [
            'integration-manager/macros/macros-overview',
            //'integration-manager/macros/managing-macros',
            'integration-manager/macros/creating-macros',
            'integration-manager/macros/importing-macros',
            //'integration-manager/macros/viewing-macros',
            'integration-manager/macros/editing-macros',
            //'integration-manager/macros/creating-public-macros',
            //'integration-manager/macros/managing-public-macros',
            //'integration-manager/macros/runtime-macros',
            'integration-manager/macros/using-LOCAL_JOB_SPEC_DIR',
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
            'integration-manager/APIs/api-overview',
            'integration-manager/APIs/quickstart-api-tutorial',
            'integration-manager/APIs/jobconfig-file-listener-api',
            'integration-manager/APIs/jobconfig-message-listener-api',
            'integration-manager/APIs/sfdc-outbound-messaging-api',
              ]
        },
        {
          type: 'category',
          label: 'Managing Agents and Devices',
          items: [
            'integration-manager/agents-and-devices/managing-agents-and-devices',
            'integration-manager/agents-and-devices/download-agent',
            'integration-manager/agents-and-devices/install-agent',
            'integration-manager/agents-and-devices/register-agent',
            'integration-manager/agents-and-devices/view-registered-agents',
            'integration-manager/agents-and-devices/ping-agent',
            'integration-manager/agents-and-devices/request-log',
            'integration-manager/agents-and-devices/view-log',
            'integration-manager/agents-and-devices/update-agent',
            'integration-manager/agents-and-devices/activate-agent',
            'integration-manager/agents-and-devices/deregister-agent',
            'integration-manager/agents-and-devices/execute-config-with-agent',
            'integration-manager/agents-and-devices/execute-template-with-agent',
            'integration-manager/agents-and-devices/other-authorized-devices',
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
            'integration-manager/admin/security/enabling-https',
            'integration-manager/admin/security/encryption-at-rest',
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
          //link: {type: 'doc', id: 'integration-manager/server-administration/server-administration'},
          items: [
            'integration-manager/admin/server-administration/server-administration-overview',
            'integration-manager/admin/server-administration/production-architecture',
            'integration-manager/admin/server-administration/production-configuration',
            'integration-manager/admin/server-administration/setup-mysql',
            'integration-manager/admin/server-administration/setup-ms-sql-server',
            'integration-manager/admin/server-administration/setup-rabbitmq',
            'integration-manager/admin/server-administration/setup-zookeeper',
            'integration-manager/admin/server-administration/setup-kubernetes',
            'integration-manager/admin/server-administration/server-upgrades',
            'integration-manager/admin/server-administration/integration-engines',
          ]
        },
        {
          type: 'category',
          label: 'File Folder Listener',
          items: [
            'integration-manager/admin/file-folder-listener/file-folder-listener-service',
            'integration-manager/admin/file-folder-listener/local-folder-listener',
            'integration-manager/admin/file-folder-listener/aws-s3-bucket-listener',
            'integration-manager/admin/file-folder-listener/azure-blob-storage-listener',
            'integration-manager/admin/file-folder-listener/google-cloud-storage-listener',
            {
              type: 'category',
              label: 'Application Property Reference',
              items: [
                'integration-manager/admin/file-folder-listener/dataconnect-properties',
                'integration-manager/admin/file-folder-listener/dataflow-properties',
                'integration-manager/admin/file-folder-listener/datasource-properties',
                'integration-manager/admin/file-folder-listener/file-repository-properties',
                'integration-manager/admin/file-folder-listener/queue-connection-properties',
                'integration-manager/admin/file-folder-listener/scheduling-properties',
                'integration-manager/admin/file-folder-listener/web-server-properties',
                'integration-manager/admin/file-folder-listener/worker-properties',
              ]
            },
              ]
        },
        'integration-manager/admin/workload-management',
        'integration-manager/admin/setup-job-notifications',
        'integration-manager/admin/aggregator-service',
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
        'integration-agent/agent-file-folder-listener',
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
          label: 'Advanced Topics',
          items: [
            'integration-agent/advanced-topics/configuration-files',
            'integration-agent/advanced-topics/manual-agent-registration',
            'integration-agent/advanced-topics/retrieve-agent-credential',
            'integration-agent/advanced-topics/scriptable-agent-registration',
            'integration-agent/advanced-topics/connecting-to-other-environments',
            'integration-agent/advanced-topics/windows-service-wrapper',
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
