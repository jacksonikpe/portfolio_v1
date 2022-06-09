import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
}
