import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";

import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
  <>
  <Head>
    <title>Painel - PizzaPlanet</title>
  </Head>
  <div>
    <Header/>
    <h1>painel</h1>
  </div>
  </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
