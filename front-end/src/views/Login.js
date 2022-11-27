import React,{  useState  } from 'react'
import { login } from '../services/login'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import './Login.css'

import NavBar from './navigationbar'

// eslint-disable-next-line react/prop-types
const LoginForm = ({userUpdate}) => {
    let navigate = useNavigate()
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[error, setErrorMessage] = useState('')
    const[errorColor, setErrorColor] = useState('')
    

    const handleLogin = async (e) => {
        e.preventDefault()

        try{
            const user = await login({
                username,
                password,
            })

            window.localStorage.setItem(
                'loggedGalleryappUser', JSON.stringify(user)
            )

            userUpdate(user)
            setTimeout(() => navigate('/add'),3000)

            
            

        } catch (e) {
            console.log(e)
            setErrorMessage('Wrong credentials')
            setErrorColor('red')
            setTimeout(() => {setErrorMessage(null)},5000)
        }
        setUsername('')
        setPassword('')
    }



    return (
        <div className='login_page'>
            <NavBar />
            <div style={{marginBottom: '200px'}}>kks</div>
            <form id='login_form' name='login_form' onSubmit={handleLogin}> 
                <div>
                    {error?<ErrorMessage err={error} col={errorColor} />:null}   
                    
                    <div>
                username
                        <input
                            type="text"
                            value={username}
                            name="Username"
                            placeholder='username'
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </div>
                    <div>
                password
                        <input
                            type="password"
                            value={password}
                            name="Password"
                            placeholder='password'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                    <button id="login_button" type="submit" name='submit'>login</button>
                </div>
            </form>
        </div>
    )
}

// LoginForm.propTypes = {
//     userlogin: PropTypes.func.isRequired
// }

export default LoginForm