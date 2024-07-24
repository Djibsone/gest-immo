/*
import React, { useState, useEffect } from 'react';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FormPropertie = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '', surface: '', 
        price: '', description: '', 
        images: null, options: '', sold: false
    });
    const [options, setOptions] = useState([])

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/biens/${id}`)
                .then(response => {
                    console.log(response.data.data);
                    setFormData({
                        title: response.data.data.title,
                        surface: response.data.data.surface,
                        price: response.data.data.price,
                        description: response.data.data.description,
                        city: response.data.data.city,
                        images: response.data.data.images,
                        rooms: response.data.data.rooms,
                        bedrooms: response.data.data.bedrooms,
                        floor: response.data.data.floor,
                        address: response.data.data.address,
                        postal_code: response.data.data.postal_code,
                        options: response.data.data.options,
                        sold: response.data.data.sold
                    });
                })
                .catch(error => console.error('Error fetching property:', error));
        }

        axios.get(`http://127.0.0.1:8000/api/options`)
        .then(res => {
            setOptions(res.data.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files
        });
    };

    // const options = [
    //     { id: 1, name: 'option1' },
    //     { id: 2, name: 'option2' },
    //     { id: 3, name: 'option3' },
    //     { id: 4, name: 'option4' },
    //     { id: 5, name: 'option5' }
    // ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await axios.put(`http://127.0.0.1:8000/api/properties/${id}`, formData);
            } else {
                await axios.post('http://127.0.0.1:8000/api/properties', formData);
            }
            navigate('/admin/properties');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <h2 className="text-2xl font-semibold">{id ? 'Editer un bien' : 'Créer un bien'}</h2>

                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                name="title"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.title}
                                handleChange={handleChange}
                                label="Titre"
                            />
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <Input
                                name="surface"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.surface}
                                handleChange={handleChange}
                                label="Surface"
                            />
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <Input
                                name="price"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.price}
                                handleChange={handleChange}
                                label="Prix"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                type="textarea"
                                name="description"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.description}
                                handleChange={handleChange}
                                label="Description"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                type="file"
                                name="images"
                                multiple={true}
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                handleChange={handleImageChange}
                                label="Images"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="rooms"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.rooms}
                                handleChange={handleChange}
                                label="Pièces"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="bedrooms"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.bedrooms}
                                handleChange={handleChange}
                                label="Chambres"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="floor"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.floor}
                                handleChange={handleChange}
                                label="Etage"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="city"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.city}
                                handleChange={handleChange}
                                label="Ville"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="address"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.address}
                                handleChange={handleChange}
                                label="Adresse"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="postal_code"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.postal_code}
                                handleChange={handleChange}
                                label="Code postal"
                            />
                        </div>
                    </div>

                    <Select 
                        name="options"
                        label="Options"
                        value={formData.options}
                        multiple={true}
                        options={options}
                        handleChange={handleChange}
                    />

                    <Input
                        type="checkbox"
                        name="sold"
                        label="Vendu"
                        value={formData.sold}
                        handleChange={handleChange}
                    />

                    <div>
                        <button className="bg-blue-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0">
                            {id ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPropertie;
*/


import React, { useState, useEffect } from 'react';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { propertieService } from '../../services/property';
import { optionService } from '../../services/option';
import { toast } from 'react-toastify';

const FormPropertie = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '', surface: '', 
        price: '', description: '', 
        images: null, options: [], sold: false
    });
    const [options, setOptions] = useState([]);
    const [errors, setErrors] = useState({});

    const renderProperty = async () => {
        if (id) {
            const res = await propertieService.getProperty(id);
            try {
                const property = res.data.data;
                setFormData({
                    title: property.title,
                    surface: property.surface,
                    price: property.price,
                    description: property.description,
                    city: property.city,
                    images: property.images,
                    rooms: property.rooms,
                    bedrooms: property.bedrooms,
                    floor: property.floor,
                    address: property.address,
                    postal_code: property.postal_code,
                    options: property.options.map(option => option.id),
                    sold: property.sold
                });
            } catch (error) {
                console.error('Error fetching property:', error)
            }
        }        
    }

    const renderOptions = async () => {
        const res = await optionService.getAllOptions();
        try {
            setOptions(res.data.data);
        } catch (error) {
            console.error('Error fetching options:', error)
        }
        
    }

    useEffect(() => {
        renderProperty();
        renderOptions();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked, multiple } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else if (multiple) {
            const values = Array.from(e.target.selectedOptions, option => option.value);
            setFormData({
                ...formData,
                [name]: values
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                const res = await propertieService.updateProperty(id, formData);
                if (res.status === 200) {
                    toast.success('Bien modifié avec succès.');
                } else {
                    toast.error('Échec de la modification du bien.');
                }
            } else {
                const res = await propertieService.addProperty(formData);
                if (res.status === 200) {
                    toast.success('Bien créé avec succès.');
                } else {
                    toast.error('Échec de la création du bien.');
                }
            }
            navigate('/admin/properties');
        } catch (error) {
            if (error.response) {
                const apiErrors = error.response.data.errors || {};
                setErrors(apiErrors);
            } else {
                toast.error('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
            }
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <h2 className="text-2xl font-semibold">{id ? 'Editer un bien' : 'Créer un bien'}</h2>

                <form className="space-y-4 mt-4" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                name="title"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.title}
                                handleChange={handleChange}
                                label="Titre"
                            />
                            {errors.title && <p className="text-red-700">{errors.title}</p>}
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <Input
                                name="surface"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.surface}
                                handleChange={handleChange}
                                label="Surface"
                            />
                            {errors.surface && <p className="text-red-700">{errors.surface}</p>}
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <Input
                                name="price"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.price}
                                handleChange={handleChange}
                                label="Prix"
                            />
                            {errors.price && <p className="text-red-700">{errors.price}</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                type="textarea"
                                name="description"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.description}
                                handleChange={handleChange}
                                label="Description"
                            />
                            {errors.description && <p className="text-red-700">{errors.description}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                type="file"
                                name="images"
                                multiple={true}
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                handleChange={handleImageChange}
                                label="Images"
                            />
                            {errors.images && <p className="text-red-700">{errors.images}</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="rooms"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.rooms}
                                handleChange={handleChange}
                                label="Pièces"
                            />
                            {errors.rooms && <p className="text-red-700">{errors.rooms}</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="bedrooms"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.bedrooms}
                                handleChange={handleChange}
                                label="Chambres"
                            />
                            {errors.bedrooms && <p className="text-red-700">{errors.bedrooms}</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="floor"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.floor}
                                handleChange={handleChange}
                                label="Etage"
                            />
                            {errors.floor && <p className="text-red-700">{errors.floor}</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="city"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.city}
                                handleChange={handleChange}
                                label="Ville"
                            />
                            {errors.city && <p className="text-red-700">{errors.city}</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="address"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.address}
                                handleChange={handleChange}
                                label="Adresse"
                            />
                            {errors.address && <p className="text-red-700">{errors.address}</p>}
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="postal_code"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={formData.postal_code}
                                handleChange={handleChange}
                                label="Code postal"
                            />
                            {errors.postal_code && <p className="text-red-700">{errors.postal_code}</p>}
                        </div>
                    </div>

                    <Select 
                        name="options"
                        label="Options"
                        value={formData.options}
                        multiple={true}
                        options={options}
                        handleChange={handleChange}
                    />
                    {errors.options && <p className="text-red-700">{errors.options}</p>}

                    <Input
                        type="checkbox"
                        name="sold"
                        label="Vendu"
                        checked={formData.sold}
                        handleChange={handleChange}
                    />

                    <div>
                        <button className="bg-blue-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0">
                            {id ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPropertie;
