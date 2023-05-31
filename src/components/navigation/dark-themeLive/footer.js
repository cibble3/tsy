import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useRouter } from "next/router";
import styles from "./dashbpard-dark-theme.module.css";

const Footer = () => {
  const router = useRouter();

  const [colorMode, setColorMode] = useState("dark");

  return (
    <div>
      <div class="footer-container">
        <div className={styles.bottom_lang_container}>
          <div className={styles.lang_wrap}>
            <ul className={styles.country_list}>
              <li className={styles.country_list_item}>
                <span class="flag-en"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/en" alt="English">
                  English
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-de"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/de" alt="German">
                  German
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-fr"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/fr" alt="French">
                  French
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-da"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/da" alt="Danish">
                  Danish
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-es"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/es" alt="Espanol">
                  Espanol
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-is"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/is" alt="Icelandic">
                  Icelandic
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-it"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/it" alt="Italian">
                  Italian
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-nl"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/nl" alt="Dutch">
                  Dutch
                </a>
              </li>
              <li className={styles.country_list_item}>
                <span class="flag-sv"></span>
                <a className={styles.country_name} href="https://www.mistressworld.xxx/sv" alt="Swedish">
                  Swedish
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="copyrights" className={styles.copyrights_dark}>
          <div class="container clearfix">
            <div className={styles.footer_menu}>
              <a className={styles.footer_menu_item} href="https://www.mistressworld.xxx/en/sitemap">Sitemap</a>
              <span class="link-divider"> | </span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="//awejmp.com/?siteId=awe&amp;pageName=home&amp;prm[referral_rs]=mikeeyy3"
              >
                Webmasters
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item}
                class=""
                title="models wanted"
                href="https://www.mistressworld.xxx/en/models-wanted"
              >
                Cam Models Wanted
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.cams.mistressworld.xxx/en/privacy-policy#personaldata"
              >
                Privacy
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.cams.mistressworld.xxx/en/terms-and-conditions"
              >
                Terms
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.cams.mistressworld.xxx/en/contact-us?page=online-support"
              >
                Contact US
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.instagram.com/mistressworldcams/"
              >
                Instagram
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item}
                tab="_blank"
                href="https://www.youtube.com/channel/UCaGwZy3QLT5wMnzvQIwMJwA"
              >
                Youtube
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item} tab="_blank" href="https://twitter.com/mistressworld4u/">
                Twitter
              </a>
              <span class="link-divider">|</span>
              <a className={styles.footer_menu_item} tab="_blank" href="https://www.facebook.com/livefetishcams/">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom_statement}>
          <a className={styles.statement_content} tab="_blank" href="https://www.mistressworld.xxx/en/18-2257">
            18 U.S.C. 2257 RECORD-KEEPING REQUIREMENTS COMPLIANCE STATEMENT:
          </a>
          <br />
          <br />
          <p className={styles.copy_right}>
            Copyrights © 2022 &amp; All Rights Reserved by MistressWorld
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
