import styled from "styled-components";

/*korábban létrehozott Header component stilizálása*/
export const StyledHeader = styled.header`
  /* background-color: #ebfbff; */
  /* background-color: ${(props) => props.bg}; */

  /*a props destruktúrálásával csak a bg-t az átadott props nevét kell megadni*/
  /* background-color: ${({ bg }) => bg}; */

  /*app.js-ben deklarált globális theme hivatkozása*/
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  /*   h1 {
    color: red;
  }

  &:hover {
    background-color: lavender;
  } */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
