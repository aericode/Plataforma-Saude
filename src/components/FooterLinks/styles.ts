import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  height: fit-content;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const LogoLAIS = styled.img`
  display: inline-block;
  height: auto;
  width: 100px;
  margin-bottom: 10px;
`;

export const TextLais = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Montserrat', sans-serif;
  size: ${({ theme }) => theme.FONT_SIZE.SM};
  white-space: pre-line;
`;

export const StyledHeader = styled.h2`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  margin-bottom: 15px;
`;

export const LinkList = styled.ul`
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;

`;

export const StyledLink = styled.a`
  white-space: nowrap;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Montserrat', sans-serif;
  size: ${({ theme }) => theme.FONT_SIZE.MD};
  &:hover {
    text-decoration: underline;
  }
`;


export const Section = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  margin: 0 40px;
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 170px;
  justify-content: space-between;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;