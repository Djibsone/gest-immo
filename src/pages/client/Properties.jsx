/*import React, { useState } from 'react'
import Card from '../../components/Card';
// import Input from '../../components/forms/Input'
import { FaSearch } from 'react-icons/fa';
import Image from '../../assets/img.jpeg';

const Properties = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);

    let properties = [
        {title:"HOME", surface:64, price:38574, image:Image, city: "Cotonou", postal_code: 229},
        {title:"ABOUT", surface:67, price:78014, image:Image, city: "Parakou", postal_code: 229},
        {title:"CONTACT", surface:24, price:58570, image:Image, city: "Kandi", postal_code: 229},
        {title:"BLOG", surface:20, price:60789, image:Image, city: "Porto Novo", postal_code: 229},
        {title:"BLOG", surface:20, price:60789, image:Image, city: "Porto Novo", postal_code: 229},
        {title:"BLOG", surface:20, price:60789, image:Image, city: "Porto Novo", postal_code: 229},
        {title:"BLOG", surface:20, price:60789, image:Image, city: "Porto Novo", postal_code: 229},
        {title:"BLOG", surface:20, price:60789, image:Image, city: "Porto Novo", postal_code: 229},
    ];

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
          pageNumbers.push(i);
        }
      }
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='text-xl max-w-[1400px] m-auto p-2'>
            <form>
                <div className='bg-gray-200 w-full my-2 flex justify-between rounded-full overflow-hidden'>
                    <input placeholder='Rechercher un bien' type='text' className='text-black bg-gray-200 w-full py-4 px-5 outline-none' handleChange={handleSearchChange} value={search} />
                    <button className=' bg-main px-7 rounded-full text-blue-400 flex items-center gap-2'>
                        <FaSearch />
                        <p className='md:block hidden'>Rechercher</p>
                    </button>
                </div>
            </form>
            {properties.length > 0 ? (
                <div className='my-10 py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4'>
                    {properties.map((property, index) => (
                        <Card key={index} property={property} />
                    ))}
                </div>
            ) : (
                <div className='bg-gray-200 w-full flex justify-center items-center rounded-md h-40 mt-10'>
                    Aucun bien trouvé
                </div>
            )}
            {/* Pagination /}
            {pageNumbers.length > 1 &&
                <div className="mt-4 flex justify-center">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mr-1 px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                >
                    Prev
                </button>
                {pageNumbers.map((page, index) => (
                    <React.Fragment key={index}>
                    {index > 0 && pageNumbers[index - 1] !== page - 1 && (
                        <span className="mx-1 px-2 py-1 text-gray-600 text-xs">...</span>
                    )}
                    <button
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 px-2 py-1 ${page === currentPage ? 'bg-main text-white' : 'bg-gray-200 text-gray-600'} rounded-md text-xs`}
                    >
                        {page}
                    </button>
                    </React.Fragment>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="ml-1 px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                >
                    Next
                </button>
                </div>
            }
        </div>
    )
}

export default Properties;
*/

import React, { useState } from 'react';
import Card from '../../components/Card';
import { FaSearch } from 'react-icons/fa';
import Image from '../../assets/img.jpeg';

const Properties = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    let properties = [
        { title: "HOME", surface: 64, price: 38574, image: Image, city: "Cotonou", postal_code: 229 },
        { title: "ABOUT", surface: 67, price: 78014, image: Image, city: "Parakou", postal_code: 229 },
        { title: "CONTACT", surface: 24, price: 58570, image: Image, city: "Kandi", postal_code: 229 },
        { title: "BLOG", surface: 20, price: 60789, image: Image, city: "Porto Novo", postal_code: 229 },
        { title: "BLOG", surface: 20, price: 60789, image: Image, city: "Porto Novo", postal_code: 229 },
        { title: "BLOG", surface: 20, price: 60789, image: Image, city: "Porto Novo", postal_code: 229 },
        { title: "BLOG", surface: 20, price: 60789, image: Image, city: "Porto Novo", postal_code: 229 },
        { title: "BLOG", surface: 20, price: 60789, image: Image, city: "Porto Novo", postal_code: 229 },
    ];

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const filteredProperties = properties.filter(property =>
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.surface.toString().includes(search) ||
        property.price.toString().includes(search) ||
        property.city.toLowerCase().includes(search) ||
        property.postal_code.toString().includes(search)
    );

    const totalFiltered = filteredProperties.length;
    const itemsPerPage = 4;
    const totalPages = Math.ceil(totalFiltered / itemsPerPage);

    const propertiesToDisplay = filteredProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='text-xl max-w-[1400px] m-auto p-2'>
            <form>
                <div className='bg-gray-200 w-full my-2 flex justify-between rounded-full overflow-hidden'>
                    <input
                        placeholder='Rechercher un bien'
                        type='text'
                        className='text-black bg-gray-200 w-full py-4 px-5 outline-none'
                        onChange={handleSearchChange}
                        value={search}
                    />
                    <button className='bg-main px-7 rounded-full text-blue-400 flex items-center gap-2'>
                        <FaSearch />
                        <p className='md:block hidden'>Rechercher</p>
                    </button>
                </div>
            </form>
            {propertiesToDisplay.length > 0 ? (
                <div className='my-10 py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4'>
                    {propertiesToDisplay.map((property, index) => (
                        <Card key={index} property={property} />
                    ))}
                </div>
            ) : (
                <div className='bg-gray-200 w-full flex justify-center items-center rounded-md h-40 mt-10'>
                    Aucun bien trouvé
                </div>
            )}
            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-4 flex justify-center items-center">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mr-1 px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                    >
                        Prev
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`mx-1 px-2 py-1 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} rounded-md text-xs`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="ml-1 px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default Properties;
