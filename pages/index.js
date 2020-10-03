import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { FullScreenLoader } from "../components/general/IsLoading";
import NavBar from "../components/general/NavBar";

const Home = dynamic(() => import("../components/Home.component"), {
  loading: () => <FullScreenLoader />,
});

function Index() {
  return (
    <>
      <Head>
        <title>Welcome | Homepage</title>
      </Head>
      <NavBar bg="transparent" />
      <Home />
    </>
  );
}

export default Index;
