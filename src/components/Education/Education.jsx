import React from "react";

import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";
import certification from "../../data/certification.json";
import skills from "../../data/skills.json";


export const Education = () => {
  return (
    <>
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        {/* <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className={styles.history}>
          {education.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.major}, ${historyItem.university}`}</h3>
                  <p>{`${historyItem.status}`}</p>
                  <ul>
                    {historyItem.summary.map((education, id) => {
                      return <li key={id}>{education}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
    <section className={styles.container} id="certification">
      <h2 className={styles.title}>Certification</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {certification.map((certificationItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${certificationItem.name}, ${certificationItem.organisation}`}</h3>
                  <p>{`${certificationItem.date}`}</p>
                  
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};
