import React from 'react'
import { Contenido } from './Contenido'
import { AddPost } from './AddPost';

export const Post = ({ post, setPost, user }: any) => {
    //console.log("post2: ", post);
    console.log(post)
    return (
        <div className="container">
            <AddPost post={post} setPost={setPost} user={user} />

            <div className="positionRight margin-top">
                <h3 className="margin-top">Lista de Notas</h3>
                <div className="listPost">
                    {post.map((index: any) => {
                        return index.usuario === user ? <Contenido id={index.id} titulo={index.titulo} texto={index.texto} /> : ""
                    })}
                </div>
            </div>

        </div>
    )
}


/*
  {post.map((index: any) => {
                    return <Contenido
                        id={index.id}
                        titulo={index.titulo}
                        texto={index.texto}
                    />
                })} */