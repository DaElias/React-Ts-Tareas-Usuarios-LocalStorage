import React, { useState } from 'react'

export const Login = ({  setDateUser, setAcces }: any) => {
    const [user, setUser] = useState<string>();
    const [password, setPassword] = useState<string>();




    const handleSubmit = (event: any): void => {
        event.preventDefault();
        //console.log("user: ", user, ", pass: ", password)
        if (user !== undefined && password !== undefined && password !== "" && user !== "") {
            //console.log("entro");
            //setDateUser([user,password]);
            setDateUser({
                user:user,
                password:password
            })
            setAcces(true);
        }
    }

    const handleDate = (event: any): void => {
        let date = event.target.value;
        let input = event.target.type;

        switch (input) { //saber el tipo de input
            case "text":
                setUser(date);
                break
            case "password":
                setPassword(date);
                break
        }

    }


    return (
        <div className="container login">
            <form onSubmit={handleSubmit} className="container">
                <label >
                    <h4>User Name:</h4>
                    <input type="text" onChange={handleDate} value={user} />
                </label>
                <label >
                    <h4>Password:</h4>
                    <input type="password" onChange={handleDate} value={password} />
                </label>
                <input type="submit" value="Enviar" className="btn" />
            </form>
        </div>
    )
}
