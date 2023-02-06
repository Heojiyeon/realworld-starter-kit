import { HeaderContainer, Link, LinkContainer, TitleContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>Conduit</TitleContainer>
      <LinkContainer>
        <Link href="/">Home</Link>&nbsp;
        <Link href="/login">Log in</Link>&nbsp;
        <Link href="/register">Sign up</Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
