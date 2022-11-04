import React from 'react'
import {FaFacebookF}  from 'react-icons/fa'
import {AiOutlineInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
console.log(process.env)

const Footer = () => {

    return(
        <div style={{backgroundColor: 'black', width: 'inherit'}}>
            <div style={{color: 'grey', height: '70px',fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
                <a href={process.env.REACT_APP_FACEBOOK_URL} rel='noreferrer' target='_blank' ><FaFacebookF style={{padding: '5px'}} /></a>
                <a href={process.env.REACT_APP_INSTA_URL}><AiOutlineInstagram style={{padding: '5px'}} target='_blank'/></a>
                <a href={process.env.REACT_APP_LINKEDIN_URL}><AiFillLinkedin style={{padding: '5px'}} target='_blank'/></a>
                <a href={process.env.REACT_APP_GITHUB_URL}><AiFillGithub  style={{padding: '5px'}} target='_blank'/></a>
            </div>
            <div style={{color:'grey', display: 'flex', justifyContent: 'center'}}>
                Developed By Vikas Singh as a thesis project.
            </div>


            
        </div>

    )
}

export default Footer