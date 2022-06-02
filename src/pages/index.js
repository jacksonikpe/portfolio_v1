import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
