import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import Projects from '../components/Projects/Projects';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero handleClick={() => window.open("", "_blank")}/>
      </Section>
      <Projects />
    </Layout>
  );
};

export default Home;
