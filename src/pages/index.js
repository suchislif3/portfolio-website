import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero handleClick={() => window.open("", "_blank")}/>
      </Section>
    </Layout>
  );
};

export default Home;
