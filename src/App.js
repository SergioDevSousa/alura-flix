import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import CardMain from './componentes/CardMain';
import Categorias from './componentes/CategoriaCard';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div>
      <Cabecalho logoCabecalho='./imagens/logomain.png' alt="Logo texto"/>
      <Banner />
      <CardMain />
      <Categorias>
        
      </Categorias>
      <Rodape logoRodape='./imagens/logomain.png' alt="Logo texto"/>
    </div>
  );
}

export default App;
