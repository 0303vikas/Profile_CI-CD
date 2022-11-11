import React, { useEffect, useState } from 'react'
import NavBar from './navigationbar'
import Cards from './displayCard'
import './initialPage.css'
import DiscriptionPara from './discriptionPara'
import Footer from './footer'
import { getAll } from '../services/images'

const InitialPage = () => {

    const[images,setimages] = useState([])

    useEffect(() => {
        getAll().then(images => {
            setimages(images)
        })


    },[])
    
    return(<>
        <div>
            <div className="firstpara">
                <NavBar /> 
                <div className='heading'><span style={{color: '#BE94C4',fontFamily: 'font3'}}>M</span> y <span style={{color: '#F28482', fontFamily: 'font3'}}>T </span>ravel <br /><span className='heading_1'>GALLERY</span></div>          


            </div>
            <DiscriptionPara  />
            <Cards images={images}/>
            <Footer />
        </div>

    </>

    )
}

export default InitialPage