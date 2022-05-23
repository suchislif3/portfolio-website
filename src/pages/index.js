import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import SocialItems from "../components/SocialItems/SocialItems";

const Home = () => {
  return (
    <Layout>
      <Section>
        <Hero handleClick={() => window.open("", "_blank")} />
      </Section>
      <Projects />
      <Technologies />
      <About />
      <SocialItems />
    </Layout>
  );
};

export default Home;
