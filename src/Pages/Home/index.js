import Banner from '../../componentes/Banner';
import Cabecalho from '../../componentes/Cabecalho';
import CardMain from '../../componentes/CardMain';
import Categorias from '../../componentes/CategoriaCard';
import Rodape from '../../componentes/Rodape';

function Home() {

    const categorias = [
        {
            nome: 'Front End',
            cor: '#6BD1FF'
        },
        {
            nome: 'Back End',
            cor: '#00C86F'
        },
        {
            nome: 'Mobile',
            cor: '#FFBA05'
        },
    ];
    
    return (
        <>
            <Cabecalho />
            <Banner categorias={categorias} />
            <CardMain />
            {categorias.map(({nome, cor}) => (
                <Categorias key={nome} nome={nome} cor={cor} />
            ))}
            <Rodape />
        </>
    );
}

export default Home
