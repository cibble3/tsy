"use client";
import Head from "next/head";
import { useRouter } from "next/router";

const HeadMeta = ({ pageContent }) => {
  const { asPath } = useRouter();
  // console.log(window.location.origin + asPath);
  return (
    <Head>
      <title>{pageContent?.meta_title}</title>

      <meta name="Rating" content="Mature" />
      <meta name="dc.language" content="US" />
      <meta name="description" content={pageContent.meta_desc} />
      <meta name="keywords" content={pageContent.meta_keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#3d3d3d" />
      <meta
        name="preconnect"
        content={`${process.env.NEXT_PUBLIC_PRE_CONNECT_URL}`}
      />

      {/* <!--DC meta tags--> */}
      <meta name="dc.source" content="" />
      <meta name="dc.title" content={pageContent.meta_title} />
      <meta property="dc.keywords" content={pageContent.meta_keywords} />
      <meta name="dc.subject" content="" />
      <meta name="dc.description" content={pageContent.meta_desc} />
      {/* <!--item prop--> */}
      <meta itemProp="name" content="" />
      <meta itemProp="description" content={pageContent.meta_desc} />
      <meta itemProp="image" content="" />
      {/* <!--Facebook meta tags--> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TsYum.com" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={pageContent.meta_title} />
      <meta property="og:description" content={pageContent.meta_desc} />
      {/* <!--Twitter meta cards--> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content={pageContent.meta_title} />
      <meta name="twitter:description" content={pageContent.meta_desc} />
      <meta name="twitter:image" content="" />
      <link rel="canonical" href={window.location.origin + asPath} />
    </Head>
  );
};

export default HeadMeta;
