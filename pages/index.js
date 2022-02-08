import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Producct</h1>
        <ul>
          <li>Product One </li>
          <li>Product Tow</li>
          <li>Product tjree</li>
        </ul>
      </div>
    </Layout>
  );
}
