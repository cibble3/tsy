import Image from "next/image";
import { Inter } from "next/font/google";
import DashbpardDarkTheme from "./darkTheme";
import styles from "@/styles/Home.module.css";
// import LiveStream from "./live_stream";
import HomePage from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage />;
}
