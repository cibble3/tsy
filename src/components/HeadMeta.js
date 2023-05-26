import Head from "next/head";

const HeadMeta = ({ pageContent }) => {
  return (
    <Head>
      <title>{pageContent?.meta_title}</title>

      <meta name="description" content={pageContent?.meta_desc} />
      <meta name="dc.description" content={pageContent?.meta_desc} />
      <meta property="og:description" content={pageContent?.meta_desc} />
      <meta name="twitter:description" content={pageContent?.meta_desc} />
      
      <meta property="dc.keywords" content={pageContent?.meta_keywords} />
    </Head>
  );
};

export default HeadMeta;