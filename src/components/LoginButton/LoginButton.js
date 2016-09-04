
import React, {PropTypes} from 'react';
import Link from '../Link';

import s from './LoginButton.css'

const LoginButton = ({user}) => { 
    if(user.email){
        return <div>{user.email}</div>
    }else{
        return <Link to="/login">Log in</Link>
    }
}
LoginButton.propTypes = {
    user: PropTypes.object
}

export default LoginButton;
