import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import CardFrontEnd from './componentes/CardFrontEnd';
import Container from './componentes/Container';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div>
      <Cabecalho logoCabecalho='./imagens/logomain.png' alt="Logo texto"/>
      <Banner />
      <Container>
        <CardFrontEnd />
      </Container>
      <Rodape logoRodape='./imagens/logomain.png' alt="Logo texto"/>
    </div>
  );
}

export default App;
