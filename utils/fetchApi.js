import axios from 'axios';

export const BASE_URL = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'b8c4cbea73mshc0e793d429e3373p1242eejsnc81ec5851f17',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}