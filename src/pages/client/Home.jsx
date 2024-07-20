import React, { useState } from 'react';
import Card from '../../components/Card';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    let properties = [
        { title: "MAISON 1", surface: 64, price: 38574, city: "Cotonou", postal_code: 229 },
        { title: "MAISON 2", surface: 67, price: 78014, city: "Parakou", postal_code: 229 },
        { title: "MAISON 3", surface: 24, price: 58570, city: "Kandi", postal_code: 229 },
        { title: "MAISON 4", surface: 20, price: 60789, city: "Porto Novo", postal_code: 299 },
        { title: "MAISON 4", surface: 20, price: 60789, city: "Porto Novo", postal_code: 299 },
        { title: "MAISON 4", surface: 20, price: 60789, city: "Porto Novo", postal_code: 299 },
        { title: "MAISON 4", surface: 20, price: 60789, city: "Porto Novo", postal_code: 299 },
        { title: "MAISON 4", surface: 20, price: 60789, city: "Porto Novo", postal_code: 299 },
    ];

    // Calculate total pages
    const totalPages = Math.ceil(properties.length / itemsPerPage);

    // Calculate properties to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const propertiesToDisplay = properties.slice(startIndex, endIndex);

    // Generate page numbers for pagination
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
        <>
            <div className='text-xl bg-gray-200 p-10 mb-5 text-center'>
                <h1 className='text-4xl font-semibold'>Agence lorem ipsun</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tempore consequuntur ducimus aliquid! Doloribus nobis distinctio voluptas voluptatibus vero voluptates.</p>
            </div>

            <div className='text-xl max-w-[1400px] m-auto p-2'>
                <h2 className='text-2xl font-semibold'>Nos derniers biens</h2>
                {propertiesToDisplay.length > 0 ? (
                    <div className='my-2 py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4'>
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
                                className={`mx-1 px-2 py-1 ${page === currentPage ? 'bg-main text-white' : 'bg-gray-200 text-gray-600'} rounded-md text-xs`}
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
        </>
    );
}

export default Home;