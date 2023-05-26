import VideoDetails from "@/components/LiveStream/VideoDetails";
import DarkTheme from "@/components/navigation/dark-themeLive";
import React from "react";
import axiosInstance from "@/instance/axiosInstance";
import HeadMeta from "@/components/HeadMeta";

const LiveStream = ({ data }) => {
  return (
    <DarkTheme>
      <HeadMeta pageContent={data.pageContent} />
      <VideoDetails data={data} />
    </DarkTheme>
  );
};

export default LiveStream;

export async function getServerSideProps(context) {
  const response = await axiosInstance.get(
    `/video/${context.params.page_name}`
  );
  const responseData = response.data;

    if (!responseData.status) {
      return {
        redirect: {
          destination: "/videos",
          permanent: false,
        },
      };
    }
  return {
    props: {
      data: responseData,
    },
  };
}
