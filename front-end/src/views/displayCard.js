import React from 'react'
import './displayCard.css'
import PropTypes from 'prop-types'

// const LargeDiv2 = () => {
//     return(
//         <div style={{margin: '4px',width: '70%', height: '100%', backgroundColor: 'rgb(200, 223, 82)'}}>
//             <img src='https://cdn.pixabay.com/photo/2019/10/24/19/50/sloth-4575121__480.png' alt='tripImage' style={{width: '30%', height: '30%'}} />    
//             <img src='https://images.pexels.com/photos/5583535/pexels-photo-5583535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' style={{width: '30%', height: '30%'}} />     

//         </div>
//     )
// }

const CardDiv = ({ imgarray }) => {



    console.log(imgarray[4].filePath)



    return(
        <div className='group'>
            <div className="large-card card"><img src={`http://localhost:5000/${imgarray[4].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} />

            </div>
            <div className="small-card card"><img src={`http://localhost:5000/${imgarray[0].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            <div className="large-card card"><img src={`http://localhost:5000/${imgarray[5].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            <div className="small-card card"><img src={`http://localhost:5000/${imgarray[1].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            <div className="large-card card"><img src={`http://localhost:5000/${imgarray[6].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            <div className="small-card card"><img src={`http://localhost:5000/${imgarray[2].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            <div className="large-card card"><img src={`http://localhost:5000/${imgarray[7].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                
            <div className="small-card card"><img src={`http://localhost:5000/${imgarray[3].filePath}`} alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
        </div>

    )
}

// eslint-disable-next-line react/prop-types
const Cards = ({ images }) => {

   

   

  

    return(
        <div className="mainDiv">
            
            {
                images.map((obj,i) => {
                    return <CardDiv  key={i} imgarray={obj.files} />
                })
            }
            <div className='group2 group'>
                <div className="large-card card"></div>
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                <div className="large-card card"></div>
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                <div className="large-card card"></div>
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                <div className="large-card card">
                    <div>
                        <div className='div'></div>
                        <div className='div'></div>
                    </div>
                    {/* <div>
                        <div className='div'>jdsjj</div>
                        <div className='div'>djdk</div>
                    </div> */}
                </div>
                
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            </div>
            <div className='group3 group'>
                <div className="large-card card"></div>
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                <div className="large-card card"></div>
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                <div className="large-card card"></div>
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
                <div className="large-card card">
                    <div>
                        <div className='div'></div>
                        <div className='div'></div>
                    </div>
                    {/* <div>
                        <div className='div'>jdsjj</div>
                        <div className='div'>djdk</div>
                    </div> */}
                </div>
                
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            </div>
            <div className='group3 group'>
                <div className="large-card card"></div>
                <div className="small-card card">
                    <img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} />
                    
                </div>
                <div className="large-card card"></div>
                <div className="small-card card">
                    <img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} />
                </div>
                <div className="large-card card"></div>
                <div className="small-card card">
                    <img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} />
                </div>
                <div className="large-card card">
                    <div>
                        <div className='div'></div>
                        <div className='div'></div>
                    </div>
                    {/* <div>
                        <div className='div'>jdsjj</div>
                        <div className='div'>djdk</div>
                    </div> */}
                </div>
                
                <div className="small-card card"><img src='https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600' alt='tripImage' style={{width: 'inherit', height: '100%', borderRadius: 'inherit'}} /></div>
            </div>
            
        </div>

    )
}

Cards.propTypes = {
    images: PropTypes.array.isRequired
}

CardDiv.propTypes = {
    imgarray: PropTypes.array.isRequired
}

export default Cards