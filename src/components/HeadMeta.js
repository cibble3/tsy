"use client";
import Head from "next/head";
import { useRouter } from "next/router";

const HeadMeta = ({ pageContent }) => {
  const { asPath } = useRouter();
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = typeof siteUrl !== "undefined" ? siteUrl + asPath : "";

  // console.log(window.location.origin + asPath);
  return (
    <Head>
      <title>{pageContent?.meta_title}</title>

      <meta name="Rating" content="Mature" />
      <meta name="dc.language" content="US" />
      <meta name="description" content={pageContent.meta_desc} />
      {pageContent.meta_keywords && (
        <meta name="keywords" content={pageContent.meta_keywords} />
      )}

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
      <meta name="dc.subject" content={pageContent.meta_desc} />
      <meta name="dc.description" content={pageContent.meta_desc} />
      {/* <!--item prop--> */}
      {/* <meta itemProp="name" content="" /> */}
      <meta itemProp="description" content={pageContent.meta_desc} />
      <meta itemProp="image" content={siteUrl + "/logo.png"} />
      {/* <!--Facebook meta tags--> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TsYum.com" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageContent.meta_title} />
      <meta property="og:description" content={pageContent.meta_desc} />
      {/* <!--Twitter meta cards--> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={canonicalUrl} />
      <meta name="twitter:creator" content="@tsstream" />
      <meta name="twitter:title" content={pageContent.meta_title} />
      <meta name="twitter:description" content={pageContent.meta_desc} />
      <meta name="twitter:image" content={siteUrl + "/logo.png"} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default HeadMeta;
