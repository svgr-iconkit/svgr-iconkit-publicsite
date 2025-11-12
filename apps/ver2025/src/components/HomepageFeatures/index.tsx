import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        svgr-iconkit was designed for grouping vendor iconset that to be easily installed and
        running quickly.
      </>
    ),
  },
  {
    title: 'Native ready',
    description: (
      <>
        svgr-iconkit is ready for running on your website and mobile app in once.
      </>
    ),
  },
  {
    title: 'Customized',
    description: (
      <>
        You are free to customize and create your own iconset
      </>
    ),
  },
];

function Feature({ title, description }: { title: string; description: React.ReactNode }) {
  return (
    <div className="col col--4">
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
