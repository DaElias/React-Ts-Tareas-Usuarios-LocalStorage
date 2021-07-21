import React, { useState } from 'react'
import { uuid } from 'uuidv4';

export const AddPost = ({ post, setPost,user }: any) => {

    const [titulo, setTitulo] = useState<any>();
    const [texto, setTexto] = useState<any>();


    const handleAdd = (event: any) => {
        event.preventDefault();
        if (titulo !== "" && texto !== "") {
            setPost([
                ...post, {
                    id: uuid(),
                    titulo: titulo,
                    texto: texto,
                    usuario:user
                }
            ]);

           //console.log("Post ",post, " ",post[0]);
            setTitulo("");
            setTexto("");
        }
    }
    const handleInputTitulo = (event: any) => {
        setTitulo(event.target.value);
    }
    const handleInputTexto = (event: any) => {
        setTexto(event.target.value);
    }

    return (
        <div className="positionLeft">
            <form onSubmit={handleAdd} className="addPost">
                <label >
                    <h3>Titulo</h3>
                    <input type="text" value={titulo} onChange={handleInputTitulo} />
                </label>
                <label >
                    <h4>Texto</h4>
                    <input type="text" value={texto} className="inputText" onChange={handleInputTexto}></input>
                </label>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    )
}
