import React from 'react'
import Card from '../../components/Card';

const Home = () => {

    let properties = [
        {title:"MAISON 1", surface:64, price:38574, city: "Cotonou", postal_code: 229},
        {title:"MAISON 2", surface:67, price:78014, city: "Parakou", postal_code: 229},
        {title:"MAISON 3", surface:24, price:58570, city: "Kandi", postal_code: 229},
        {title:"MAISON 4", surface:20, price:60789, city: "Porto Novo", postal_code: 299},
        {title:"MAISON 4", surface:20, price:60789, city: "Porto Novo", postal_code: 299},
        {title:"MAISON 4", surface:20, price:60789, city: "Porto Novo", postal_code: 299},
        {title:"MAISON 4", surface:20, price:60789, city: "Porto Novo", postal_code: 299},
        {title:"MAISON 4", surface:20, price:60789, city: "Porto Novo", postal_code: 299},
    ];

    return (
        <>
            <div className='text-xl bg-gray-200 p-10 mb-5 text-center'>
                <h1 className='text-4xl font-semibold'>Agence lorem ipsun</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tempore consequuntur ducimus aliquid! Doloribus nobis distinctio voluptas voluptatibus vero voluptates.</p>
            </div>

            {/* <div className='text-xl max-w-[1400px] m-auto p-2'>
                <h2 className='text-2xl font-semibold'>Nos derniers biens</h2>
                {properties.length > 0 ? (
                    <div className='my-2 py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4'>
                        {properties.map((property, index) => (
                            <Card key={index} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className='bg-gray-200 w-full flex justify-center items-center rounded-md h-40 mt-10'>
                        Aucun bien trouvé
                    </div>
                )}
            </div> */}
            <div className='text-xl max-w-[1400px] m-auto p-2'>
                <h2 className='text-2xl font-semibold'>Nos derniers biens</h2>
                {properties.length > 0 ? (
                    <div className='my-2 py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4'>
                    {properties.map((property, index) => (
                        <Card key={index} property={property} />
                    ))}
                    </div>
                ) : (
                    <div className='bg-gray-200 w-full flex justify-center items-center rounded-md h-40 mt-10'>
                        Aucun bien trouvé
                    </div>
                )}
            </div>

        </>
    )
}

export default Home;
