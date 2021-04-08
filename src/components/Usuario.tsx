import { useState } from "react"

interface User {
    vid: string;
    name: string;
}


export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            vid: 'ABC123',
            name: 'Fernando Herrera'
        })
    }


    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button
            onClick={ login }
            className="btn btn-outline-primary">
                </button>

                {
                    (!user)
                    ? <pre> No hay Usuario </pre>
                    : <pre> { JSON.stringify( user) } </pre>
                }


                <pre> { JSON.stringify( user ) } </pre>
            </div>

    )
}