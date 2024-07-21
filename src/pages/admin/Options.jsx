import React, { useEffect, useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import Modal from '../../components/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { optionService } from '../../services/option';

const Options = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const renderOptions = async () => {
        try {
            const res = await optionService.getAllOptions();
            setOptions(res.data.data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    useEffect(() => {
        renderOptions();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/option/${id}`);
    };

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = options.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(options.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="mx-auto max-w-7xl py-6">
            <div className="relative shadow-m sm:rounded-lg py-6">
                <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <p className="inline-flex items-center bg-white font-medium text-sm px-3 py-1.5 border rounded-md overflow-hidden shadow">
                        Toutes les options
                    </p>
                    <div className="relative">
                        <Link to={'/admin/option'} className='text-xl bg-blue-600 text-white px-3 py-1 rounded-md duration-500 hover:bg-blue-700'>
                            Ajouter une option
                        </Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700 border rounded-md overflow-hidden shadow-md">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 border-b">
                            <tr>
                                <th scope="col" className="px-6 py-3">N°</th>
                                <th scope="col" className="px-6 py-3">Nom</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((option, index) => (
                                <tr key={option.id} className="bg-white border-b text-gray-900">
                                    <td className="px-6 py-4">{indexOfFirstItem + index + 1}</td>
                                    <td className="px-6 py-4">{option.name}</td>
                                    <td className="px-6 py-4 flex space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700 text-sm" onClick={() => handleEdit(option.id)}>
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700 text-sm" onClick={toggleModal}>
                                            <Trash className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-sm border rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-1 mx-1 text-sm border rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-sm border rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    );
};

export default Options;
