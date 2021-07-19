import React, { useState } from 'react';
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
  const dateUserInit={
    user: "",
    password: ""
  }

  const [dateUser, setDateUser] = useState<dateUsuarios>(dateUserInit); //<dateUsuarios>
  const [Acces, setAcces] = useState<boolean>(false);
  const [post, setPost] = useState([{}]);




  return (
    <div className="container background">
      {Acces ?
        <div>
          <Blog setAcces={setAcces} user={dateUser.user} post={post} setPost={setPost} setDateUser={setDateUser}/>
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
