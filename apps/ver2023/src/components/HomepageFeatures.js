import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { Container, Row, Col } from '@bootstrap-styled/v4';

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

function Feature({Svg, title, description}) {
  return (
    <Col sm={4}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Container>
        <Row>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </Row>
    </Container>
    </section>
  );
}
