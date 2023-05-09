import { useRouter } from "next/router";
import styles from "../components/navigation/light-theme/dashbpard-light-theme.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BiSend } from "react-icons/bi";
import LightTheme from "../components/navigation/light-theme";

const DashbpardDarkTheme = () => {
  const router = useRouter();
  return (
    <div>
      <LightTheme>
        <div className={styles?.dasboardMain} style={{ height: "100%" }}>
          <div className="row w-100 ps-4">
            <div className="col-lg-3 col-md-3 mt-4 mb-4">
              <div className={styles?.fansss}>
                <div className={styles?.nameBox}>
                  <div className={styles?.chatBorder}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3">Bella roland</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder2}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3">Bella roland</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3">Bella roland</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/group-61@2x.png" width={40} height={40} />
                    <div className="ms-3">James Murdock</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-7@2x.png" width={40} height={40} />
                    <div className="ms-3">junebox_12</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-8@2x.png" width={40} height={40} />
                    <div className="ms-3">PewDiePie</div>
                  </div>
                  <div className={styles?.chatBorder1}>
                    <img src="/mask-group-9@2x.png" width={40} height={40} />
                    <div className="ms-3">Bella roland</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 my-4">
              <div className={styles?.fansss}>
                <div className={styles?.nameBox}>
                  <div className={styles?.chatBorder1}>
                    <IoIosArrowBack />
                    <img
                      src="/mask-group-9@2x.png"
                      className="ms-2"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">Bella roland</div>
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
                            <BiSend size={19} color="white" />
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
      </LightTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
