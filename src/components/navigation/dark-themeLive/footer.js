import React from "react";
import styles from "./dashbpard-dark-theme.module.css";
import Link from "next/link";

const Footer = () => {

  return (
    <div>
      <div className="footer-container pb-4">

        <div id="copyrights" className={styles.copyrights_dark}>
          <div className="container clearfix">
            <div className={styles.footer_menu}>
              <a className={styles.footer_menu_item} href="https://www.mistressworld.xxx/en/sitemap">Sitemap</a>
              <span className="link-divider"> | </span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="//awejmp.com/?siteId=awe&amp;pageName=home&amp;prm[referral_rs]=mikeeyy3"
              >
                Webmasters
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item}
                title="models wanted"
                href="https://www.mistressworld.xxx/en/models-wanted"
              >
                Cam Models Wanted
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.cams.mistressworld.xxx/en/privacy-policy#personaldata"
              >
                Privacy
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.cams.mistressworld.xxx/en/terms-and-conditions"
              >
                Terms
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.cams.mistressworld.xxx/en/contact-us?page=online-support"
              >
                Contact US
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.instagram.com/mistressworldcams/"
              >
                Instagram
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.youtube.com/channel/UCaGwZy3QLT5wMnzvQIwMJwA"
              >
                Youtube
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item} tab="_blank" href="https://twitter.com/mistressworld4u/">
                Twitter
              </a>
              <span className="link-divider">|</span>
              <a className={styles.footer_menu_item} tab="_blank" href="https://www.facebook.com/livefetishcams/">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom_statement}>
          <Link className={styles.statement_content} tab="_blank" href="/18-2257">
            18 U.S.C. 2257 RECORD-KEEPING REQUIREMENTS COMPLIANCE STATEMENT:
          </Link>
          <br />
          <br />
          <p className={styles.copy_right}>
            Copyrights © 2023 &amp; All Rights Reserved by MistressWorld
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
