import React from 'react';
import styled from 'styled-components';
import Rodape from '../../Rodape';


const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const CardLabel = styled.label`
    color: white;
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;


const CardInput = styled.input`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 30px;
    padding: 15px;
    width: 531px;
    color: white;
    font-size: 20px;
`;

const CardSelect = styled.select`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 30px;
    padding: 15px;
    width: 531px;
    color: #2271D1;
    font-size: 20px;
`;

const CardButton = styled.button`
    border: 2px solid white;
    color: white;
    font-size: 18px;
    width: 180px;
    padding: 10px;
    background-color: transparent;
    border-radius: 10px;

    &:hover {
        border: 2px solid rgba(34, 113, 209, 1);
        color: rgba(34, 113, 209, 1);
        background-color: rgba(0, 0, 0, 0.9);
    }
`;


const CardButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EditarCard = () => {
    return (
        <>
        <CardContainer>
            <form action="/NovoVideo" method="post">
                <div>
                    <CardLabel htmlFor="categoria">Categoria</CardLabel>
                    <CardSelect id="categoria" name="categoria" required>
                        <option value="">Selecione uma categoria</option>
                        <option value="front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Mobile">Mobile</option>
                    </CardSelect>
                </div>
                <div>
                    <CardLabel htmlFor="imagem">Imagem</CardLabel>
                    <CardInput type="url" id="imagem" name="imagem" />
                </div>
                <div>
                    <CardLabel htmlFor="link">Vídeo</CardLabel>
                    <CardInput type="url" id="video" name="video" placeholder="https://www.youtube.com/watch?v=..." />
                </div>
                <CardButtonSection>
                    <CardButton type="submit">Guardar</CardButton>
                    <CardButton type="reset">Limpar</CardButton>
                </CardButtonSection>
            </form>
        </CardContainer>
        <Rodape />
        </>

    );
};

export default EditarCard;
