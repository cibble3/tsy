import { useRouter } from "next/router";
import styles from "../components/navigation/dark-theme/dashbpard-dark-theme.module.css";

import { BiSend } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import DarkTheme from "../components/navigation/dark-themeLive";

const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <DarkTheme>
        <div className={styles?.dasboardMain} style={{ height: "100%" }}>
          <div className="row w-100 ps-4">
            <div
              className="col-lg-3 col-md-3 mt-4 mb-4"
              style={{ height: "100%" }}
            >
              <div className={styles?.fansss}>
                <div className={styles?.nameBox}>
                  <div className={styles?.chatBorder}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">Bella roland</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder2}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">Bella roland</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">Bella roland</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3 text-white">Bella roland</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 my-4">
              <div className={styles?.fansss}>
                <div className={styles?.nameBox}>
                  <div className={styles?.chatBorder1}>
                    <IoIosArrowBack color="white" />
                    <img
                      src="/mask-group-9@2x.png"
                      className="ms-2"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3 text-white">Bella roland</div>
                  </div>
                  <div
                    style={{
                      height: "92%",
                      display: "flex",
                      alignItems: "end",
                      width: "100%",
                    }}
                  >
                    <div className={styles?.chat}>
                      <div className="row w-100 px-3">
                        <div className="col-md-11">
                          <input
                            className={styles?.inputField}
                            type="text"
                            placeholder="Type here ..."
                          />
                        </div>
                        <div className="col-md-1">
                          <div className={styles?.groupChild45}>
                            <BiSend size={19} />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 d-flex justify-content-end">
                        <div className={styles?.chatBox}>
                          It is a long established fact that a reader distracted
                        </div>
                        <img
                          src="/mask-group-9@2x.png"
                          className="ms-2"
                          // width={30}
                          // height={30}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="mb-3 d-flex justify-content-start">
                        <img
                          src="/mask-group-8@2x.png"
                          className="me-2"
                          // width={30}
                          // height={30}
                          style={{ width: "30px", height: "30px" }}
                        />
                        <div className={styles?.chatBox1}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.
                        </div>
                      </div>
                      <div className="mb-3 d-flex justify-content-end">
                        <div className={styles?.chatBox}>
                          <div>Your Replied</div>
                          <div className={styles?.blackChatbox}>
                            Hello Bella, How are you?
                          </div>
                          <div>I am fine and you?</div>
                        </div>
                        <img
                          src="/mask-group-9@2x.png"
                          className="ms-2"
                          // width={30}
                          // height={30}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
