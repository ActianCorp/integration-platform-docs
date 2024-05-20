import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';

function Version() {
  const { versions: [nextVersion, latestVersion, ...pastVersions ] } = usePluginData('docusaurus-plugin-content-docs')
  const css = `
  .custom h1 {
      font-size: 32pt;
      padding-bottom: 20px;
  }
`
  return (
    <Layout
      title="Versions"
      permalink="/versions"
      description="Integration Platform Documentation Versions">
      <main className="container margin-vert--lg">
        <div className="custom">
          <style>{css}</style>
          <h1>Integration Platform Documentation Versions</h1>
        </div>
        <div className="margin-bottom--lg">
          <h2 id="latest">Current Version</h2>
          <table>
            <tbody>
            <tr>
                  <th>3.2</th>
                  <td>
                  <a href={`./docs`}>
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href={`./docs/release-notes`}>
                      Release Notes
                    </a>
                  </td>
                </tr>                
            </tbody>
          </table>
        </div>

{/*         <div className="margin-bottom--lg">
          <h3 id="archive">Previous Versions (No longer maintained)</h3>
          <table>
            <tbody>
                <tr>
                  <th>3.0</th>
                  <td>
                  <a href={`/3.0`}>
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href={`3.0/release-notes`}>
                      Release Notes
                    </a>
                  </td>
                </tr>                
            </tbody>
          </table>
        </div> */}

        <h2>Previous Versions</h2>
          <p>Integration Platform documentation for releases prior to version 3.2 has not been migrated to the new documentation platform.<br />Links to documentation for older releases are listed below.</p>
        <div className="margin-bottom--lg">
          <table>
            <tbody>
              <tr>
                <th>Version</th>
                <th>Integration Manager</th>
                <th>Integration Agent</th>
              </tr>
              <tr>
                <th>3.1</th>
                <td>
                <a href={`https://docs.actian.com/integrationmanager/3.1`} target='_blank'>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={`https://docs.actian.com/integrationagent/3.1/#page/User/IntegrationAgent_Title.htm`} target='_blank'>
                  Documentation
                  </a>
                </td>
              </tr>                
              <tr>
                <th>3.0</th>
                <td>
                  <a href={`https://docs.actian.com/integrationmanager/3.0`} target='_blank'>
                  Documentation
                  </a>
                </td>
                <td>
                  <a href={`https://docs.actian.com/integrationagent/3.0/#page/User/IntegrationAgent_Title.htm`} target='_blank'>
                  Documentation
                  </a>
                </td>
              </tr>                
              <tr>
                <th>2.5</th>
                <td>
                  <a href={`https://docs.actian.com/integrationmanager/2.5`} target='_blank'>
                  Documentation
                  </a>
                </td>
                <td>
                  <a href={`https://docs.actian.com/integrationagent/2.5/#page/User/IntegrationAgent_Title.htm`} target='_blank'>
                  Documentation
                  </a>
                </td>
              </tr>                
              <tr>
                <th>2.1</th>
                <td>
                  <a href={`https://docs.actian.com/integrationmanager/2.1`} target='_blank'>
                  Documentation
                  </a>
                </td>
                <td align='center'>
                  -
                </td>
              </tr>                
              <tr>
                <th>2.0</th>
                <td>
                  <a href={`https://docs.actian.com/integrationmanager/2.0`} target='_blank'>
                  Documentation
                  </a>
                </td>
                <td align='center'>
                  -
                </td>
              </tr>                
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}

export default Version;
