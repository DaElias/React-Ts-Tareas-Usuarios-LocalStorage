import '../../App.css';

import { useState } from "react";

export const Contenido = ({ id, titulo, texto, post, setPost }: any) => {
    const [activateEdit, setactivateEdit] = useState("handleEdit");

    const [addTitulo, setAddTitulo] = useState(titulo);
    const [addTexto, setAddTexto] = useState(texto);

    const handleDelete = () => {
        setPost(post.filter((index: any) => {
            if (index.id !== id) {
                return index
            }
            return "";
        }));
    }
    const handleEdit = () => {
        setactivateEdit("handleEdit activate");
    }
    const handleEditExit = () => {
        setactivateEdit("handleEdit");

    }

    const handleActualziarDate = (event: any) => {
        event.preventDefault();

        if (addTitulo !== "" && addTexto !== "") {
            setPost(post.map((elemnt: any) => {
                if (id === elemnt.id) {
                    //console.log(elemnt);
                    return { ...elemnt, titulo: addTitulo, texto: addTexto }
                }
                return elemnt;
            }));
            handleEditExit();
        } else alert("Espacios vacios!!!")

        /*    //* fake
                //console.log(AddPost);
                /* 
                const addPost = post;
                for (let i = 0; i < addPost.length; i++) {
                    if (id === addPost[i].id) {
                        //console.log(addPost[i]);
                        addPost[i].titulo = addTitulo;
                        addPost[i].texto = addTexto;
                        setPost(addPost);
                        handleEditExit();
                    }
                }
                */
        //console.log(addPost);
        /*  const addPost = post.map((index: any) => {
              //console.log(index.id,"== ",id);
              if (index.id === id) {
                  console.log(index);
                  index.titulo=addTitulo;
                  index.texto=addTexto;
              }
          })
          setPost(addPost); */

    }
    return (
        <div key={id} className="Post">
            <h1>{addTitulo}</h1>
            <p>{addTexto}</p>
            <div className="container row">
                <button className="btn" onClick={handleDelete}>X</button>
                <button className="btn btnEdit" onClick={handleEdit}>Edit</button>
                <div className={activateEdit}>
                    <button className="btn-salida" onClick={handleEditExit} >x</button>
                    <form className="container" onSubmit={handleActualziarDate}>
                        <label >
                            <h4>Titulo</h4>
                            <input type="text" value={addTitulo} onChange={(event: any) => { setAddTitulo(event.target.value) }} />
                        </label>
                        <label >
                            <h4>Texto</h4>
                            <input type="text" value={addTexto} onChange={(event: any) => { setAddTexto(event.target.value) }} />
                        </label>
                        <button className=" btn-submit " type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
