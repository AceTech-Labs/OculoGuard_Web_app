import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <div className="bg-red flex flex-col">
      <Head>OculoGuard</Head>
      <main>say my name</main>
    </div>
  );
}
