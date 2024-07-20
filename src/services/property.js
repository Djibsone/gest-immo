import Axios from "./caller"

const getAllProperties = () => {
    return Axios.get('biens');
}

const getProperty = (id) => {
    return Axios.get('biens/' + id);
}

export const propertieService = {
    getAllProperties, getProperty,
}