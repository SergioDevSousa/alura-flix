import Banner from '../../componentes/Banner';
import Cabecalho from '../../componentes/Cabecalho';
import Categorias from '../../componentes/CategoriaCard';
import Rodape from '../../componentes/Rodape';

function Home() {
    const categorias = [
        {
            nome: 'Front End',
            cor: '#6BD1FF',
        },
        {
            nome: 'Back End',
            cor: '#00C86F',
        },
        {
            nome: 'Inovação',
            cor: '#FFBA05',
        },
        {
            nome: 'Gestão',
            cor: '#051EFF',
        },
    ];

    return (
        <>
            <Cabecalho />
            <Banner categorias={categorias} />
            {categorias.map((categoria) => (
                <Categorias key={categoria.nome} nome={categoria.nome} cor={categoria.cor} />
            ))}
            
            <Rodape />
        </>
    );
}

export default Home
