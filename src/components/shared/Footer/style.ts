import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border-style: solid;
  background-color: gray;
`;

export const Link = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
