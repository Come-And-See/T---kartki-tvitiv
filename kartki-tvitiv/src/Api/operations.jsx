import axios from 'axios';

axios.defaults.baseURL ='https://6492e7ae428c3d2035d0e014.mockapi.io'


export const onGetTweets = async () => {
    const response = await axios.get('/users')

    const data = await response.data;
    return data;
}