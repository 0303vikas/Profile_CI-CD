import axios from 'axios'
const baseUrl = '/api/images'

const getAll = async (userdata) => {
    const request = await axios.get(baseUrl, { 'headers': { 'Authorization': `Bearer ${userdata.token}`}})
    return request.data
}

const postImages = async (userdata,imageArray) => {
    const request = await axios.post('api/images',imageArray, {
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization': `Bearer ${userdata.token}`

        },
        onUploadProgress: progressEvent => console.log(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))

    })
    return request.data
}


export { getAll, postImages}