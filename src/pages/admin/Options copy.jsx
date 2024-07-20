import React, { useEffect, useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import Modal from '../../components/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { optionService } from '../../services/option';

const Options = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsOpen(!isOpen);
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
        renderOptions();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/option/${id}`);
    };

    // const optionss = [
    //     {name:"foufou"},
    //     {name:"ananas"},
    //     {name:"viande"},
    //     {name:"patate"},
    //     {name:"orange"},
    // ];

    return (
        <div className="mx-auto max-w-7xl py-6">
            <div className="relative shadow-m sm:rounded-lg py-6">
                <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <p className="inline-flex items-center bg-white font-medium text-sm px-3 py-1.5 border rounded-md overflow-hidden shadow">
                        Toutes les options
                    </p>
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-700 w-80 bg-white focus:outline-none dark:placeholder-gray-400 border rounded-md overflow-hidden shadow" placeholder="Search for items" /> */}
                        <Link to={'/admin/option'} className='text-xl bg-blue-600 text-white md:ml-8 px-3 py-1 rounded-md duration-500 md:static'>Ajouter une option</Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-white border rounded-md overflow-hidden shadow-md">
                        <thead className="text-xs text-gray-700 uppercase bg-white border rounded-sm overflow-hidden shadow">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    N°
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nom
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {options && options.map((option, index) => (
                                <tr className="bg-transparent text-gray-700 border rounded-md overflow-hidden shadow-md" key={index}>
                                    <td className="px-6 py-4">
                                        {index += 1}
                                    </td>
                                    <td className="px-6 py-4">
                                        {option.name}
                                    </td>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(option.id)}>
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700" onClick={toggleModal}>
                                            <Trash className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    )
}

export default Options;
