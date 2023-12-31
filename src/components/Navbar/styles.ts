import styled from 'styled-components';

interface ScreenProps {
  isSmallScreen: boolean;
}

export const Container = styled.nav<ScreenProps>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 15px;
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.15);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: ${({ isSmallScreen }) => (isSmallScreen ? '40px' : '100px')};
  
  position: sticky;
  z-index: 10000;
  width: auto;
  top: 0;
  overflow: hidden;
`;

export const Wrapper = styled.div<ScreenProps>`
  
  display: flex;
  justify-content: space-around;
  width: ${({ isSmallScreen }) => (isSmallScreen ? '80vw' : 'fit-content')};
`
