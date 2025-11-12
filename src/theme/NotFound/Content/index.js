import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <h2>Actian Integration Platform documentation has moved.</h2>
      <p> Be sure to update any bookmarks to the new URL: <a href="https://im.dev.actiandatacloud.com/guide/">https://im.dev.actiandatacloud.com/guide/</a></p>
    </main>
  );
}