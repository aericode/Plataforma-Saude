import styled from 'styled-components';


export const Container = styled.div`
margin:  10px 0;
`
interface WrapperProps{
   isSmallScreen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
   display: flex;
   flex-direction: ${({ isSmallScreen }) => isSmallScreen ? "column": "row"};
   justify-content: center;
   align-items: center;
   max-width: 1100px;
`;

export const ResponsivityWrapper = styled.div`
display: flex;
flex-direction: row;
width: max-content;
`


export const Thumbnail = styled.img`
   width: 120px;
  height: 120px;
  border-radius: 20px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: fit-content;
   width: 50vw;
   max-width: 270px;
   height: auto;
   justify-content: space-evenly;
   padding: 0 10px;
   margin-left: 5px;
`;

export const CourseTitle = styled.h1`
   font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.LG};
   color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const CoursePartners = styled.p`
   font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.XSM};
   color: ${({ theme }) => theme.COLORS.RED_300};
`;

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   height: 100px;
   justify-content: space-around;
   padding: 0 10px;
   width: 350px;
   max-width: 400px;
`;

export const InfoText = styled.p`
   font-size: ${({ theme }) => theme.FONT_SIZE.SM};
   margin-left: 5px;
`

export const IconTextWrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`

export const SeeModuleButton = styled.a`
  padding: 10px 35px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};

  font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color:  ${({ theme }) => theme.COLORS.WHITE};
  white-space: nowrap;

  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;



export const CardPadding = styled.div`
  padding: 10px;
`
