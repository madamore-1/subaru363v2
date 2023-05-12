import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('./vehicles')
  }, []);
  return <Layout></Layout>
}
export default Homepage;