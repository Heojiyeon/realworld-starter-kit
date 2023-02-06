import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  border-style: solid;
`;

export const TitleContainer = styled.div`
  margin: 2rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: gray;
  :hover {
    color: black;
  }
`;
