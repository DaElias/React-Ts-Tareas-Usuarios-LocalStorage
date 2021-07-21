import { Contenido } from './Contenido'
import { AddPost } from './AddPost';


export const Post = ({ post, setPost, user }: any) => {


    //console.log("post: ", post);
    return (
        <div className="container">
            <AddPost post={post} setPost={setPost} user={user} />

            <div className="positionRight margin-top">
                <h3 className="margin-top">Lista de Notas</h3>
                <div className="listPost">
                    {post.map((index: any) => {
                        return index.usuario === user ? <Contenido
                            id={index.id}
                            titulo={index.titulo}
                            texto={index.texto}
                            post={post}
                            setPost={setPost}
                            key={index.id}
                        /> : ""
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