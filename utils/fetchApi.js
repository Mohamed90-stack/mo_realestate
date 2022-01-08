import axios from 'axios'; 

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '58e62e3657mshfd31f66e182cfd8p17986ejsn8f25b42c24e2'
          }
    });

    return data;
}
