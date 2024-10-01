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
                  <th>3.3</th>
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

         <div className="margin-bottom--lg">
          <h2 id="archive">Previous Versions (No longer maintained)</h2>
          <table>
            <tbody>
                <tr>
                  <th>3.2</th>
                  <td>
                  <a href={`/3.2`}>
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href={`3.2/release-notes`}>
                      Release Notes
                    </a>
                  </td>
                </tr>                
            </tbody>
          </table>
        </div>

        <h2>Versions Prior to 3.2</h2>
          <p>Documentation for Integration Platform releases prior to version 3.2 has not been migrated to the new documentation platform.<br />Documentation for older releases can be found <a href={`https://docs.actian.com/#page/Welcome/Welcome_to_the_Actian_Documentation_Portal.htm`} target='_blank'>here</a>.</p>
      </main>
    </Layout>
  );
}

export default Version;
