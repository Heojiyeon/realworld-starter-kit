import { FaGithub } from "react-icons/fa";
import { FooterContainer, Link } from "./style";
const Footer = () => {
  return (
    <FooterContainer>
      <Link
        href="https://github.com/gothinkster/angularjs-realworld-example-app"
        target="_blank">
        <FaGithub />
        Fork on GitHub
      </Link>
    </FooterContainer>
  );
};

export default Footer;
