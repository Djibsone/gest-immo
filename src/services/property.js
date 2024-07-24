import Axios from "./caller"

const getAllProperties = () => {
    return Axios.get('biens');
}

const getProperty = (id) => {
    return Axios.get('biens/' + id);
}

const addProperty = (formData) => {
    return Axios.post('biens/create', formData)
}

const updateProperty = (id, formData) => {
    return Axios.put('biens/' + id, formData);
}

export const propertieService = {
    getAllProperties, getProperty, addProperty, updateProperty,
}