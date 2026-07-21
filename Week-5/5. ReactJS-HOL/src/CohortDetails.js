import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const headingClass = cohort.status === 'Ongoing' ? styles.ongoing : styles.completed;

  return (
    <div className={styles.card}>
      <h2 className={headingClass}>{cohort.name}</h2>
      <p>Status: {cohort.status}</p>
    </div>
  );
}

export default CohortDetails;
