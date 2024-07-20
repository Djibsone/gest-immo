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
    const [property, setProperty] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/bien/${id}`)
                .then(response => {
                    setProperty(response.data.data);
                    setFormData({
                        title: response.data.data.title,
                        surface: response.data.data.surface,
                        price: response.data.data.price,
                        description: response.data.data.description,
                        images: response.data.data.images,
                        options: response.data.data.options,
                        sold: response.data.data.sold
                    });
                })
                .catch(error => console.error('Error fetching property:', error));
        }
    }, [id]);

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: type === 'checkbox' ? checked : value
    //     });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files
        });
    };

    const options = [
        { id: 1, name: 'option1' },
        { id: 2, name: 'option2' },
        { id: 3, name: 'option3' },
        { id: 4, name: 'option4' },
        { id: 5, name: 'option5' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await axios.put(`/api/properties/${id}`, formData);
            } else {
                await axios.post('/api/properties', formData);
            }
            navigate('/admin/properties');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <h2 className="text-2xl font-semibold">{property ? 'Editer un bien' : 'Créer un bien'}</h2>

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
                            {property ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPropertie;
