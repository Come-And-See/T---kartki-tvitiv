import axios from 'axios';

axios.defaults.baseURL = 'https://6492e7ae428c3d2035d0e014.mockapi.io'


export const onGetTweets = async () => {
    try {
        const response = await axios.get('/users');
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error.message);
    }
}



export const onPutTweetsOn = async (id) => {
    try {
        const response = await axios.get(`/users/${id}`);
        const putResponse = await axios.put(`/users/${id}`, { followers: response.data.followers + 1 });
        const data = putResponse.data;

        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export const onPutTweetsOff = async (id) => {
    try {
        const response = await axios.get(`/users/${id}`);
        const putResponse = await axios.put(`/users/${id}`, { followers: response.data.followers - 1 });
        const data = putResponse.data;

        return data;
    } catch (error) {
        console.error(error.message);
    }
}