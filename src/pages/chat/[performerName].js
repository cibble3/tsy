import LiveStreamComponent from "@/components/LiveStream";
import DarkTheme from "../../components/navigation/dark-themeLive";
import React from "react";
import axiosInstance from "../../instance/axiosInstance";

const LiveStream = ({ data }) => {
  return (
    <DarkTheme>
      <LiveStreamComponent data={data} />
    </DarkTheme>
  );
};

export default LiveStream;

export async function getServerSideProps(context) {
  const response = await axiosInstance.get(
    `/chat/${context.params.performerName}`
  );
  const responseData = response.data;

  if (!responseData.status) {
    return {
      redirect: {
        destination: "/",
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
