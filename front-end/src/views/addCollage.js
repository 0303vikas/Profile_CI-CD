import React, { useState, createRef} from 'react'

import './addCollage.css'
import NavBar from './navigationbar'
import { postImages } from '../services/images'




// eslint-disable-next-line react/prop-types
const AddImageForm = ({ user }) => {

    const [images, setImages] = useState([])
    var king = ''
       
    const [image1, setImage1] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
  
    const [image2, setImage2] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
   
    const [image3, setImage3] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
    
    const [image4, setImage4] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
    const [image5, setImage5] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
    const [image6, setImage6] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
    const [image7, setImage7] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
    const [image8, setImage8] = useState({imagedata: '', imageUrl: 'https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600'})
    const inputImage1 = createRef(null)
    const inputImage2 = createRef(null)
    const inputImage3 = createRef(null)
    const inputImage4 = createRef(null)
    const inputImage5 = createRef(null)
    const inputImage6 = createRef(null)
    const inputImage7 = createRef(null)
    const inputImage8 = createRef(null)

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

        setImages([...images,image1.imagedata,image2.imagedata,image3.imagedata,image4.imagedata,image5.imagedata,image6.imagedata,image7.imagedata,image8.imagedata])
        console.log(images)
        const formData = new FormData()
        
        formData.append('image1', image1.imagedata)
        formData.append('image2', image2.imagedata)
        formData.append('image3', image3.imagedata)
        formData.append('image4', image4.imagedata)
        formData.append('image5', image5.imagedata)
        formData.append('image6', image6.imagedata)
        formData.append('image7', image7.imagedata)
        formData.append('image8', image8.imagedata)
          
        // for (var pair of formData.entries()){
        //     console.log(`${pair[0]}: ${pair[1]}`)
        // }
        
        
        
        

        try{

            // console.debug(formData.get('myGallery'))
            
            const uploadimages = await postImages(user,formData)

            console.log(uploadimages)

        } catch(err) {
            console.log(err)


        }


    }

    return(
        <div className='mainDivAddPage' style={{width: '100%', height: '100vh'}}>
            <NavBar />
            <div className='formdiv'>
                <section style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input type='file' className='' id ='1' style={{display: 'none'}} ref={inputImage1} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard' onClick={() => inputImage1.current.click()} style={{backgroundImage: `url(${image1.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    
                    
                    <input type='file' id ='2' style={{display: 'none'}} ref={inputImage2} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage2.current.click()} style={{backgroundImage: `url(${image2.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='3' style={{display: 'none'}} ref={inputImage3} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage3.current.click()} style={{backgroundImage: `url(${image3.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='4' style={{display: 'none'}} ref={inputImage4} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage4.current.click()} style={{backgroundImage: `url(${image4.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                </section>
                <section  style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input type='file' id ='5' style={{display: 'none'}} ref={inputImage5} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage5.current.click()} style={{backgroundImage: `url(${image5.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='6' style={{display: 'none'}} ref={inputImage6} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage6.current.click()} style={{backgroundImage: `url(${image6.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='7' style={{display: 'none'}} ref={inputImage7} accept='image/*' onChange={handleImage} />
                    <p className='imageCard'  onClick={() => inputImage7.current.click()} style={{backgroundImage: `url(${image7.imageUrl})`,backgroundSize: 'cover'}}>+</p>
                    <input type='file' id ='8' style={{display: 'none'}} ref={inputImage8} accept='image/*' onChange={handleImage}/>
                    <p className='imageCard'  onClick={() => inputImage8.current.click()} style={{backgroundImage: `url(${image8.imageUrl})`,backgroundSize: 'cover'}}>+</p>

                </section>
                <button onClick={submithandler}>Upload</button>



            </div>
        </div>
        
    )

}

export default AddImageForm