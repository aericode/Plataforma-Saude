import { DefaultBreadcrumbText } from '../../components/DefaultBreadcrumbText';
import { TransparencyDataDisplay } from '../../components/TransparencyDataDisplay';
import { TransparencyGraphSection } from '../../components/TransparencyGraphSection';
import { BreadcrumbContainer, Container, StyledTitle, Wrapper } from './styles';


export function Transparencia() {
  return (
    <Container>
      <Wrapper>
        <BreadcrumbContainer>
          <DefaultBreadcrumbText isRoot text={'Início'}/>
          <DefaultBreadcrumbText isRoot={false} text={' / Transparência'}/>
        </BreadcrumbContainer>
        <StyledTitle>Transparência</StyledTitle>
        <TransparencyDataDisplay/>
        <TransparencyGraphSection/>
      </Wrapper>
    </Container>
  );
}