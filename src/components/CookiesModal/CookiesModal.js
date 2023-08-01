import React from 'react';
import styles from './modal.module.css';

const CookiesModal = ({ onAccept }) => {
  return (
    <div className={styles.mainModal}>
      <div className={styles.mainFlex}>
        <div className={styles.modalHeader}>
          <div className={styles.age}>
            <h2>18+</h2>
          </div>
          <div className={styles.heading}>
            <b>mistressworld.xxx contains adult content</b>
            <p>By using the website you acknowledge that you are over 18.</p>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.title}>
            <b>We Respect Your Privacy</b>
          </div>
          <p>We use cookies to improve your user experience. By continuing your browsing, you accept the use of cookies, including third-party cookies. <span className={styles.setColor}> Cookie policy</span></p>
          <div className={styles.continueBtn}>
            <button onClick={onAccept}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
