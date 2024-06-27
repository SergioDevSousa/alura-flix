import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import CardMain from './componentes/CardMain';
import Rodape from './componentes/Rodape';
import CategoriaCard from './componentes/CategoriaCard';

function App() {
  return (
    <div>
      <Cabecalho logoCabecalho='./imagens/logomain.png' alt="Logo texto"/>
      <Banner />
      <CardMain />
      <CategoriaCard />
      <Rodape logoRodape='./imagens/logomain.png' alt="Logo texto"/>
    </div>
  );
}

export default App;
