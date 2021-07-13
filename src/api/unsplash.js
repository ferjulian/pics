import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID M0_oNWh14thV-WtC1xlahROZLhlZVlplsIx9bf-HYKM'
    }
});