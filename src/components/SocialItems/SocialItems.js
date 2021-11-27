import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Div, SocialIcons } from "./SocialItemsStyles";

const SocialItems = () => {
  return (
    <Div>
      <SocialIcons
        href="https://github.com/suchislif3"
        target="_blank"
        title="suchislif3 on GitHub"
      >
        <AiFillGithub size="4em" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/szabolcs-devecseri/"
        target="_blank"
        title="Szabolcs Devecseri on LinkedIn"
      >
        <AiFillLinkedin size="4em" />
      </SocialIcons>
    </Div>
  );
};

export default SocialItems;
