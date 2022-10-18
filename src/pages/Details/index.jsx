import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';

import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';

export function Details(){

  return(
    <Container>
      <Header/>
      <main>
        <Content>

        
      <ButtonText title="Excluir nota"></ButtonText>
      <h1>Introdução ao React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur sunt, accusamus fugiat fugit exercitationem, magnam eum laborum suscipit ducimus voluptas minima recusandae autem, optio quos quis asperiores rem illum.</p>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title= "express"></Tag>
        <Tag title= "nodejs"></Tag>
      </Section>
      <Button title="Voltar"/>
        </Content>
      </main>
    </Container>

  )
}