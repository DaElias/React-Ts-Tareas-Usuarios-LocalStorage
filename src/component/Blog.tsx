import { Header } from './BlogComponets/Header'
import { Post } from './BlogComponets/Post'

export const Blog = ({ setAcces, user, post, setPost, setDateUser }: any) => {
    const handlerAcces = () => {
        setAcces(false);
        setDateUser({
            user: "",
            password: ""
          });
    }

    return (
        <div className="container blog">
            <Header user={user} />
            <Post
                post={post} setPost={setPost} user={user}
            />

            <button id="btnExit" className="btn" onClick={handlerAcces}>Exit</button>
        </div>
    )
}
