import DarkTheme from "../components/navigation/dark-themeLive";

const DashbpardDarkTheme = () => {
  return (
    <div>
      {/* <HeadMeta pageContent={pageContent}/> */}
      <DarkTheme>
        <>
          <div id="container" className="h-100">
            <div
              id="header-text"
              class="header-text bg-black"
            >
              <div class="headlines" >
                <h1 align="center" className="pt-5">
                  18-2257 Compliance Statement - MistressWorld.xxx
                </h1>
              </div>
            </div>
            <div align="center" className="compliance_statement pt-3">
              <p>
                The records required pursuant to 18 USC § 2257 pertaining to
                this website and all materials depicted hereon,{" "}
              </p>
              <p> are on file with the Custodian of Records, </p>
              <p>
                At SAM ENT LLC, Inc. 1444 Glendale Blvd., Los Angeles, CA 90026
              </p>
              <p>
                All models appearing on this website were at least 18 years of
                age on the date of principal photography.
              </p>
            </div>
            <div class="clearfix"></div>
          </div>
        </>
      </DarkTheme>
    </div>
  );
};

export default DashbpardDarkTheme;
