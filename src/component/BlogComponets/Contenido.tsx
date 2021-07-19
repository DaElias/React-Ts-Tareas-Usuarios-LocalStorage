
export const Contenido = ({id, titulo, texto}:any) => {
    console.log(id)
    return (
        <div key={id} className="Post">
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}
