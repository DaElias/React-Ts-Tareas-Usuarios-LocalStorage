import React from 'react'

export const Header = ({ user }: any) => {
    //console.log(user);
    return (
        <header className="headerBlog">
            <h1> User: </h1> <code>{user}</code>
        </header>
    )
}
