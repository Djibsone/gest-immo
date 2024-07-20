import React, { useEffect, useState } from 'react'
import Input from '../../components/forms/Input';
import PropertyCarousel from './PropertyCarousel';
import Image from '../../assets/img.jpeg'
import { useParams } from 'react-router-dom';

const Property = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/biens/${id}`)
                .then(response => {
                    console.log(response.data.data);
                    setDetails(response.data.data);
                })
                .catch(error => console.error('Error fetching property:', error));
        }
    }, [id]);

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
                        <h1 className="text-3xl font-bold">$property-title</h1>
                        <h2 className="text-2xl">{details.rooms > 1 ? 'pièces' : 'pièce'} - {details.surface `m²`}</h2>
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
                                    handleChange={() => ('')}
                                    label="Nom complet"
                                />
                                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/2 px-2">
                                        <Input
                                            name="phone"
                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                            handleChange={() => ('')}
                                            label="Téléphone"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <Input
                                            type="email"
                                            name="email"
                                            className="block w-full p-2 border border-gray-300 rounded-md"
                                            handleChange={() => ('')}
                                            label="Email"
                                        />
                                    </div>
                                </div>
                                <Input
                                    type="textarea"
                                    name="message"
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                    handleChange={() => ('')}
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
                    <p>$property-description</p>
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
                                            <td className="px-4 py-2">$property-surface m²</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Pièces</td>
                                            <td className="px-4 py-2">$property-rooms</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Chambres</td>
                                            <td className="px-4 py-2">$property-bedrooms</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Etage</td>
                                            <td className="px-4 py-2">$property-floor ?: 'Rez de chaussée'</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Localisation</td>
                                            <td className="px-4 py-2">
                                                $property-address<br />
                                                $property-city $property-postal_code
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 p-2">
                            <h2 className="text-2xl">Spécificités</h2>
                            <ul className="list-none p-0 mt-4">
                                @foreach ($property-options as $option)
                                    <li className="p-2 border-b">$option-name</li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property;
