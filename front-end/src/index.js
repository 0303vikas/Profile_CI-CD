import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './index.css'
import App from './views/App'
import reportWebVitals from './reportWebVitals'
import InitialPage from './views/initialPage'
// import AddImageForm from './views/addCollage'
import LoginForm from './views/Login'
// import { getAll } from './services/images'
import PrivateRoute from './views/PrivateRoute'
import AddImageForm from './views/addCollage'



export default function Layout() {

    const [user,setUser] = useState(['hello'])
    const [isloggedin,setisloggedin] = useState(false)
    // const [images, setImages] = useState([])

    // eslint-disable-next-line react/prop-types
    

    // useEffect(() => {
    //     if(user){
    //         getAll(user)
    //         // .then(blog => {
    //         //     setImages(blog.sort((a,b) => a.likes-b.likes))
    //         // }
    //         // )
    //     }
    // }, [user])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedGalleryappUser')
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            setisloggedin(true)
        }
    },[])

    const userlogin = () => {

        setUser(true)
        setisloggedin(true)

    }
    

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App  user ={user} />}>
                    <Route 
                        index 
                        element={<InitialPage />} 
                    />
                    <Route 
                        path="/login" 
                        element={<LoginForm userUpdate={(e) => userlogin(e)} />} 
                    />
                    <Route path='/add' element={<PrivateRoute isloggedin={isloggedin}><AddImageForm user={user}/>
                    </PrivateRoute>              
                    } />
                        
                              


                </Route>
            </Routes>
        </BrowserRouter>
    )

}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
