import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   padding: 10px;
   border-radius: 20px;
   background-color: ${({ theme }) => theme.COLORS.SILVER};
   display: inline-block;
`;