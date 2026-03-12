import React from 'react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import styles from './styles.module.css';

function MarkdownCell({ value }) {
  if (typeof value !== 'string') {
    return value;
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      className={styles.cellMarkdown}
    >
      {value}
    </ReactMarkdown>
  );
}

export default function MarkdownTable({ headers = [], rows = [], caption, className }) {
  return (
    <div className={styles.wrapper}>
      <table className={clsx('table', styles.table, className)}>
        {caption ? <caption className={styles.caption}>{caption}</caption> : null}
        {headers.length > 0 ? (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={`${header}-${index}`}>
                  <MarkdownCell value={header} />
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`cell-${rowIndex}-${cellIndex}`}>
                  <MarkdownCell value={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
