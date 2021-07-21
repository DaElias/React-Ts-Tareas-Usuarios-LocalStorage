import { useState, useEffect } from 'react';
import './App.css';
import { Login } from './component/Login';
import { Blog } from './component/Blog';
/*
*/
interface dateUsuarios {
  user: string,
  password: string
}


function App() {
  // * Estado inicial de algunos componentes 
  const dateUserInit = {
    user: "",
    password: ""
  }
  const postInit = [{
    id: 121212,
    titulo: "Hi Word...",
    texto: 'print("Hi word")',
    usuario: "user"
  }];

  //const LocalHostPost = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [{}];

  const [dateUser, setDateUser] = useState<dateUsuarios>(dateUserInit); //<dateUsuarios>
  const [Acces, setAcces] = useState<boolean>(false);
  const [post, setPost] = useState(postInit);

  useEffect(() => {
    console.log("actualiza datos!!");

    localStorage.setItem('task', JSON.stringify(post));


    if (localStorage.getItem('task')) {
      console.log("localStorage.getItem('task'); es ","true");
    }else{
      console.log("localStorage.getItem('task'); es ","false");
    }


  }, [post]);


  return (
    <div className="container background">
      {Acces ?
        <div>
          <Blog setAcces={setAcces} user={dateUser.user} post={post} setPost={setPost} setDateUser={setDateUser} />
        </div>
        :
        <div>
          <Login setDateUser={setDateUser} setAcces={setAcces} />
        </div>
      }

    </div>
  );
}

export default App;
