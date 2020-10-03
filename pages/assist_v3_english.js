import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { FullScreenLoader } from "../components/general/IsLoading";
import NavBar from "../components/general/NavBar";

const Assist = dynamic(() => import("../components/Assist.component"), {
  loading: () => <FullScreenLoader />,
});

function Index() {
  return (
    <>
      <Head>
        <title>Welcome | Homepage</title>
      </Head>
      <NavBar bg="dark" spacer />
      <Assist />
    </>
  );
}

export default Index;
