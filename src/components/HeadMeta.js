import Head from "next/head";

const HeadMeta = ({ pageContent }) => {
  return (
    <Head>
      <title>{pageContent?.meta_title}</title>

      <meta name="Rating" content="Mature" />   
      <meta name="dc.language" content="US"/> 
      <meta name="description" content={pageContent?.meta_desc} />
      <meta name="keywords" content={pageContent?.meta_keywords} />
      <meta name="robots" content="index, follow" />
      {/* <!--DC meta tags--> */}
      <meta name="dc.source" content="" />
      <meta name="dc.title" content={pageContent?.meta_title} />
      <meta property="dc.keywords" content={pageContent?.meta_keywords} />
      <meta name="dc.subject" content="" />
      <meta name="dc.description" content={pageContent?.meta_desc} />
      {/* <!--item prop--> */}
      <meta itemprop="name" content="" />
      <meta itemprop="description" content={pageContent?.meta_desc} />
      <meta itemprop="image" content="" />
      {/* <!--Facebook meta tags--> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="mistressworld.xxx"/>
      <meta property="og:url" content=""/>
      <meta property="og:title" content={pageContent?.meta_title} />
      <meta property="og:description" content={pageContent?.meta_desc} />
      {/* <!--Twitter meta cards--> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content={pageContent?.meta_title} />
      <meta name="twitter:description" content={pageContent?.meta_desc} />
      <meta name="twitter:image" content="" />
      <link rel="canonical" href=""/>
    </Head>
  );
};

export default HeadMeta;