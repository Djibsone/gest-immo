import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../assets/Imagination.webp';

const Card = ({ property }) => {
    const navigate = useNavigate();

    const handleDetail = (id) => {
        navigate(`/property/${id}`);
    };

  return (
    // <div className='rounded-xl p-2 shadow-md bg-slate-50 flex flex-col justify-end select-none'>
    //     <Link to={`/property`} className=' h-56 border border-white overflow-hidden rounded-xl block'>
    //         <img src={property.image} alt={property.tilte} className='w-full h-full object-cover hover:scale-110 transition ease-in-out' />
    //     </Link>
    //     <div className='flex justify-between items-center'>
    //         <Link to={`/property`} className='text-blue-600 py-2 font-semibold truncate'>
    //             <h2>{property.title}</h2>
    //         </Link>
    //         <div className='flex items-center gap-1'>
    //             <span>{property.surface} - {property.price}</span>
    //         </div>
    //     </div>
    //     <div className='border-t border-gray-300 p-1 flex justify-between items-center'>
    //         <div className='flex text-gray-500 text-sm items-center gap-2'>
    //             {property.price} XOF
    //         </div>
    //     </div>
    // </div>

    // <div className="w-full md:w-full mb-4">
    //     <div className="flex flex-col h-full">
    //         <div className="bg-white rounded-lg shadow-md flex-grow">
    //             <div className="p-2 h-48 overflow-hidden">
    //                 <Link to={`/property`} className='h-56 border border-white overflow-hidden rounded-xl block'>
    //                     <img src={property.image} className="w-full h-full object-cover hover:scale-110 transition ease-in-out" alt="Image Téléchargée" />
    //                 </Link>
    //             </div>
    //             <div className="p-4">
    //                 <h5 className="text-lg text-blue-600 font-semibold mb-2 overflow-hidden line-clamp-2">
    //                     <Link to={`/property`}>
    //                         { property.title }
    //                     </Link>
    //                 </h5>
    //                 <p className="text-gray-700 mb-2">{ property.surface } m² - { property.city } ({ property.postal_code })</p>
    //                 <p className="text-gray-500">
    //                     <small>
    //                         { property.price } XOF
    //                     </small>
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="bg-white font-[sans-serif] my-4 rounded-md">
        <div className="max-w-7xl mx-auto p-3">
            {/* <div className="text-center">
                <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">LATEST BLOGS</h2>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-3 max-md:max-w-lg mx-auto">
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300" onClick={() => handleDetail(property.id)}>
                   
                    <img src={image} alt="Blog Post 1" className="w-full h-60 object-cover rounded" onClick={() => handleDetail(property.id)} />
                 
                    <div className="p-6">
                        <span className="text-sm block text-gray-400 mb-2">{property.price} XOF</span>
                        <h3 className="text-xl font-bold text-[#333]">{property.surface} - {property.price}</h3>
                        <hr className="my-4" />
                        <p className="text-blue-400 text-sm" onClick={() => handleDetail(property.id)}>{property.title}</p>    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;
