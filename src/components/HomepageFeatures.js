import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Mission',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      The Beach Rover Project was started with the intent to
      make monitoring and surveying the coastline faster, easier,
      and more accurate than the current by-hand methods through
      a rover running pre-planned missions gathering various sensor data.
      </>
    ),
  },
  {
    title: 'New Data and Insights',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Thanks to the multitude of sensors and the machine learning algorithm
      that quickly catagorizes sizes and types of sand grains, there is now
      a much faster and effective way to generate insights as to how and why
      the coastline is changing.
      </>
    ),
  },
  {
    title: 'Easy to Deploy',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Thanks to the avalibilty of parts and extensive documentaiton of them,
      it is easier than ever to follow our steps and create a functioning
      coastal surveying rover for yourself!
      </>
    ),
  },
];
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
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
