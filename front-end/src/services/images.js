import axios from 'axios'
const baseUrl = '/api/images'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const postImages = async (userdata,imageArray) => {
    console.log(userdata)
    const request = await axios.post(baseUrl,imageArray, {
        headers: {
            // 'content-type': 'multipart/form-data',
            'Authorization': 'Bearer '+ userdata.token

        },
        onUploadProgress: progressEvent => console.log(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))

    })
    return request.data
}


export { getAll, postImages}