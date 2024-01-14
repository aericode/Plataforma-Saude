import { Curso } from "../../types/curso"
import { Container, PartnerList, PartnerListImage } from "./styles";

interface CoursePartnersDisplayProps{
  curso:Curso
}

export function CoursePartnersDisplay({curso}:CoursePartnersDisplayProps){

  return(
    <Container>
      <PartnerList>
        {curso.creditos.map(partner=> <PartnerListImage width={"200px"}  height={"auto"} src={partner.capa} title={partner.titulo} />)}
      </PartnerList>
      
    </Container>
    
  )
}