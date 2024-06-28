import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import CardFront from './CardFront';


function CategoriaCard({ nome, cor }) {
    const [videos, setVideos] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/SergioDevSousa/aluraflix-api/videos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados da API');
                }
                const data = await response.json();
                const filteredVideos = data.filter(video => video.categoria === nome);
                setVideos(filteredVideos);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };
        fetchData();
    }, [nome]);

    return (
        <section className={styles.categorias}>
            <h3 style={{ backgroundColor: cor }}>{nome}</h3>
            <div className={styles.cardContainer}>
                {videos.map((video) => (
                    <CardFront
                        key={video.id}
                        imagem={video.imagem}
                        categoria={video.categoria}
                        link={video.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default CategoriaCard;
