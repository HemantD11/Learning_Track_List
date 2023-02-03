import React from 'react'
import { Link} from 'react-router-dom'
import './NotLogin.css'

const NotLogin = () => {
    return(<>
            <h1>Please Login First</h1>
            <Link to='/'>Return To Login Page</Link>
        </>
    )
        

}

export default NotLogin