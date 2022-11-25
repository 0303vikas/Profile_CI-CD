import React, { useState, createRef} from 'react'
import './addCollage.css'
import NavBar from './navigationbar'
import ErrorMessage from './ErrorMessage'
import { useNavigate } from 'react-router-dom'
import { postImages } from '../services/images'

// eslint-disable-next-line react/prop-types
const AddImageForm = ({ user }) => {
    console.log(user)
    const navigate = useNavigate()

    var king = ''
    const [errMess, seterrMess]  = useState('')
    const [color, setcolor] = useState('')
       
    const [image1, setImage1] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
  
    const [image2, setImage2] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
   
    const [image3, setImage3] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
    
    const [image4, setImage4] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
    const [image5, setImage5] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
    const [image6, setImage6] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
    const [image7, setImage7] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
    const [image8, setImage8] = useState({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
    const inputImage1 = createRef(null)
    const inputImage2 = createRef(null)
    const inputImage3 = createRef(null)
    const inputImage4 = createRef(null)
    const inputImage5 = createRef(null)
    const inputImage6 = createRef(null)
    const inputImage7 = createRef(null)
    const inputImage8 = createRef(null)

    // eslint-disable-next-line no-unused-vars
    const [progress,setprogress] = useState(0)
    

    const differentfunction = {
        1: setImage1,
        2: setImage2,
        3: setImage3,
        4: setImage4,
        5: setImage5,
        6: setImage6,
        7: setImage7,
        8: setImage8
    }


    const handleImage = (e) => {
        let imagefile = e.target.files  
        
        king = URL.createObjectURL(imagefile[0])       

        differentfunction[e.target.id]({imagedata: imagefile[0], imageUrl: king})
    }

    const submithandler = async (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        
        formData.append('files', image1.imagedata)
        formData.append('files', image2.imagedata)
        formData.append('files', image3.imagedata)
        formData.append('files', image4.imagedata)
        formData.append('files', image5.imagedata)
        formData.append('files', image6.imagedata)
        formData.append('files', image7.imagedata)
        formData.append('files', image8.imagedata)
        // eslint-disable-next-line react/prop-types
        formData.append('token', user.token)
        

        setImage1({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage2({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage3({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage4({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage5({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage6({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage7({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})
        setImage8({imagedata: '', imageUrl: process.env.REACT_APP_BASIC_IMAGE_URL})

        
        try{           
            
            
            const request = await postImages(user,formData)
            

            formData.delete('image1')
            formData.delete('image2')
            formData.delete('image3')
            formData.delete('image4')
            formData.delete('image5')
            formData.delete('image6')
            formData.delete('image7')
            formData.delete('image8')           

            seterrMess('Uploading Photoes....')
            setcolor('green')
            console.log(request, errMess)

            setTimeout(() => {
                seterrMess('')
                setcolor('')
                navigate('/')

                
            }, 3000)

            

            

        } catch(err) {
            if( err.message === 'token Invalid') {
                console.log(err.message)
                localStorage.clear()
                window.location.href ='/'
            }
            seterrMess(err.message)
            setcolor('red')
            

            setTimeout(() => {
                seterrMess('')
                setcolor('')

                
            }, 1000)


        }
    }

   

    return(
        <div className='mainDivAddPage' style={{width: '100%', height: '100vh'}}>
            <NavBar />
            <div className='formdiv'> 
                { errMess.err === ''? null: <ErrorMessage err={errMess} col={color}  />  }          
                <section style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input type='file' className='' id ='1' name='image1' style={{display: 'none'}} ref={inputImage1} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard' onClick={() => inputImage1.current.click()} style={{backgroundImage: `url(${image1.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    
                    
                    <input type='file' id ='2' name='image2' style={{display: 'none'}} ref={inputImage2} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage2.current.click()} style={{backgroundImage: `url(${image2.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='3' name='image3' style={{display: 'none'}} ref={inputImage3} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage3.current.click()} style={{backgroundImage: `url(${image3.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='4' name='image4' style={{display: 'none'}} ref={inputImage4} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage4.current.click()} style={{backgroundImage: `url(${image4.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                </section>
                <section  style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input type='file' id ='5' name='image5' style={{display: 'none'}} ref={inputImage5} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage5.current.click()} style={{backgroundImage: `url(${image5.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='6' name='image6' style={{display: 'none'}} ref={inputImage6} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage6.current.click()} style={{backgroundImage: `url(${image6.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='7' name='image7' style={{display: 'none'}} ref={inputImage7} accept='image/*' onChange={handleImage} />
                    <p className='imageCard'  onClick={() => inputImage7.current.click()} style={{backgroundImage: `url(${image7.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='8' name='image8' style={{display: 'none'}} ref={inputImage8} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage8.current.click()} style={{backgroundImage: `url(${image8.imageUrl})`,backgroundSize: 'cover'}}>+</p>

                </section>
                <button onClick={submithandler}>Upload</button>



            </div>
        </div>
        
    )

}

export default AddImageForm