import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import Projects from '../components/Projects/Projects';
import Technologies from "../components/Technologies/Technologies";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero handleClick={() => window.open("", "_blank")}/>
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
