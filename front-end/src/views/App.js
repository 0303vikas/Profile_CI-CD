import React from 'react'
import './App.css'
// import InitialPage from './initialPage'
import { Outlet} from 'react-router-dom'
// import NavBar from './navigationbar'
// import AddImageForm from './views/addCollage'


function App() {
    return (
        <>
            {/* <NavBar  /> */}
            {/* <InitialPage /> */}
            {/* <AddImageForm /> */}

            <Outlet />
        </>
    )
}

export default App
