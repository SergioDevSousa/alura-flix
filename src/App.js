import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import Card from './componentes/Card';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div>
      <Cabecalho logoCabecalho='./imagens/logomain.png' alt="Logo texto"/>
      <Banner />
      <Card />
      <Rodape logoRodape='./imagens/logomain.png' alt="Logo texto"/>
    </div>
  );
}

export default App;
