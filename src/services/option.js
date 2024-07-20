import Axios from "./caller"

const getAllOptions = () => {
    return Axios.get('options');
}

const getOption = (id) => {
    return Axios.get('options/' + id);
}

const addOption = (formData) => {
    return Axios.post('options/create', formData)
}

const updateOption = (id, formData) => {
    return Axios.put('options/' + id, formData);
    // return await Axios.put(`options/${id}`, formData);
}

export const optionService = {
    getAllOptions, getOption, addOption, updateOption,
}