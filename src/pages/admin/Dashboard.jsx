import { StarIcon, UsersIcon } from '@heroicons/react/16/solid';
import React from 'react'
import { GiCookingPot } from 'react-icons/gi';
import { GoListOrdered } from 'react-icons/go';
import OutChart from '../../components/OutChart';

const Dashboard = () => {
    return (
        <div className="mx-auto max-w-7xl py-6">
            <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-4 mt-8 sm:grid-cols-2 sm:px-8">
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-green-400">
                        <UsersIcon className='w-10 h-11 text-white' />
                    </div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Total Utilisateur</h3>
                        <p className="text-3xl">{1 + 2}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-blue-400">
                        <GoListOrdered className='w-10 h-11 text-white' />
                    </div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Total Commande</h3>
                        <p className="text-3xl">{1 + 2}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-indigo-400">
                        <GiCookingPot className='w-10 h-11 text-white' />
                    </div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Total repas</h3>
                        <p className="text-3xl">{1 + 2}</p>
                    </div>
                </div>
                <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div className="p-4 bg-red-400">
                        <StarIcon className='w-10 h-11 text-white' />
                    </div>
                    <div className="px-4 text-gray-700">
                        <h3 className="text-sm tracking-wider">Nombre d'avis</h3>
                        <p className="text-3xl">{1 + 2}</p>
                    </div>
                </div>
            </div>
          <OutChart />
        </div>
    )
}

export default Dashboard;
