/*import React, { useEffect, useState } from 'react'
import Input from '../../components/forms/Input';
import PropertyCarousel from './PropertyCarousel';
import Image from '../../assets/img.jpeg'
import { useParams } from 'react-router-dom';
import { propertieService } from '../../services/property';

const PropertyDetail = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [detail, setDetails] = useState({});

    const renderProperty = async () => {
        if (id) {
            const res = await propertieService.getProperty(id);
            try {
                setDetails(res.data.data);
            } catch (error) {
                console.error('Error fetching property detail:', error)
            }
        }        
    }

    useEffect(() => {
        renderProperty();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const images = [
        Image,
        Image,
        Image,
        Image,
    ];
    
    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-2">
                        <PropertyCarousel images={images} />
                    </div>
                    
                    <div className="w-full md:w-1/2 p-2">
                        <h1 className="text-3xl font-bold">{detail.title}</h1>
                        <h2 className="text-2xl">{detail.rooms > 1 ? 'pièces' : 'pièce'} - {detail.surface + ` m²`}</h2>
                        <div className="text-blue-500 font-bold">
                            number_format-$property-price, 0, ',', ' ' XOF
                        </div>
                        <hr className="my-4" />
                        <div className="my-4">
                            <h4 className="text-xl">Interested in this property? ....</h4>
                            <form className="space-y-4 mt-4">
                                <Input
                                    name="name"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    handleChange={handleChange}
                                    label="Nom complet"
                                />
                                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/2 px-2">
                                        <Input
                                            name="phone"
                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                            handleChange={handleChange}
                                            label="Téléphone"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <Input
                                            type="email"
                                            name="email"
                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                            handleChange={handleChange}
                                            label="Email"
                                        />
                                    </div>
                                </div>
                                <Input
                                    type="textarea"
                                    name="message"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    handleChange={handleChange}
                                    label="Votre message"
                                />
                                <div>
                                    <button className="bg-blue-600 text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0">
                                        Nous contacter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p>{detail.description}</p>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3 p-2">
                            <h2 className="text-2xl mb-4">Caractéristique</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-gray-600">Propriété</th>
                                            <th className="px-4 py-2 text-left text-gray-600">Détails</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Surface habitable</td>
                                            <td className="px-4 py-2">{detail.surface + ` m²`}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Pièces</td>
                                            <td className="px-4 py-2">{detail.rooms}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Chambres</td>
                                            <td className="px-4 py-2">{detail.bedrooms}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Etage</td>
                                            <td className="px-4 py-2">{detail.floor === 1 ? 'Rez de chaussée' : detail.floor}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Localisation</td>
                                            <td className="px-4 py-2">
                                                {detail.address}<br />
                                                {detail.city} {detail.postal_code}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 p-2">
                            <h2 className="text-2xl">Spécificités</h2>
                            <ul className="list-none p-0 mt-4">
                                {detail.options.map((detail, index) => (
                                    <li className="p-2 border-b" key={index}>{detail.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail;
*/

import React, { useEffect, useState } from 'react'
import Input from '../../components/forms/Input';
import PropertyCarousel from './PropertyCarousel';
import Image from '../../assets/Imagination.webp';
import { useParams } from 'react-router-dom';
import { propertieService } from '../../services/property';

const PropertyDetail = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [detail, setDetails] = useState([]);

    const renderProperty = async () => {
        if (id) {
            const res = await propertieService.getProperty(id);
            try {
                setDetails(res.data.data);
            } catch (error) {
                console.error('Error fetching property detail:', error)
            }
        }        
    }

    useEffect(() => {
        renderProperty();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const images = [
        Image,
        Image,
        Image,
        Image,
    ];
    
    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-2">
                        <PropertyCarousel images={images} />
                    </div>
                    
                    <div className="w-full md:w-1/2 p-2">
                        <h1 className="text-3xl font-bold">{detail.title}</h1>
                        <h2 className="text-2xl">{detail.rooms > 1 ? 'pièces' : 'pièce'} - {detail.surface + ` m²`}</h2>
                        <div className="text-blue-500 font-bold">
                            number_format-$property-price, 0, ',', ' ' XOF
                        </div>
                        <hr className="my-4" />
                        <div className="my-4">
                            <h4 className="text-xl">Interested in this property? ....</h4>
                            <form className="space-y-4 mt-4">
                                <Input
                                    name="name"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    handleChange={handleChange}
                                    label="Nom complet"
                                />
                                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/2 px-2">
                                        <Input
                                            name="phone"
                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                            handleChange={handleChange}
                                            label="Téléphone"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <Input
                                            type="email"
                                            name="email"
                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                            handleChange={handleChange}
                                            label="Email"
                                        />
                                    </div>
                                </div>
                                <Input
                                    type="textarea"
                                    name="message"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    handleChange={handleChange}
                                    label="Votre message"
                                />
                                <div>
                                    {/* <button className="bg-blue-600 text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0">
                                        Nous contacter
                                    </button> */}
                                    <button class="inline-block rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Nous contacter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p>{detail.description}</p>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3 p-2">
                            <h2 className="text-2xl mb-4">Caractéristique</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-gray-300 border border-gray-200 rounded-lg shadow-lg">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-gray-600">Propriété</th>
                                            <th className="px-4 py-2 text-left text-gray-600">Détails</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Surface habitable</td>
                                            <td className="px-4 py-2">{detail.surface + ` m²`}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Pièces</td>
                                            <td className="px-4 py-2">{detail.rooms}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Chambres</td>
                                            <td className="px-4 py-2">{detail.bedrooms}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Etage</td>
                                            <td className="px-4 py-2">{detail.floor === 1 ? 'Rez de chaussée' : detail.floor}</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Localisation</td>
                                            <td className="px-4 py-2">
                                                {detail.address}<br />
                                                {detail.city} {detail.postal_code}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 p-2">
                            <h2 className="text-2xl">Spécificités</h2>
                            <ul className="list-none p-0 mt-4">
                                {detail.options && detail.options.map((option, index) => (
                                    <li className="p-2 border-b" key={index}>{option.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail;
