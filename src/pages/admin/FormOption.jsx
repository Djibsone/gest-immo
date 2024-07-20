import React, { useEffect, useState } from 'react';
import Input from '../../components/forms/Input';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { optionService } from '../../services/option';

const FormOption = ({ option }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({ name: '' });
    const [errors, setErrors] = useState({});

    // const validateForm = () => {
    //     const newErrors = {};
    //     if (!formData.name) newErrors.name = 'Le Nom est obligatoire';

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    const renderOption = async () => {
        if (id) {
            const res = await optionService.getOption(id);
            try {
                setFormData({ name: res.data.data.name });
            } catch (error) {
                console.error('Error fetching option:', error)
            }
        }        
    }

    useEffect(() => {
        renderOption();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!validateForm()) {
        //     toast.error('Veuillez remplir tous les champs obligatoires.');
        //     return;
        // }

        try {
            if (id) {
                const res = await optionService.updateOption(id, formData);
                if (res.status === 200) {
                    toast.success('Option modifiée avec succès.');
                } else {
                    toast.error('Échec de la modification de l\'option.');
                }
            } else {
                const res = await optionService.addOption(formData);
                if (res.status === 200) {
                    toast.success('Option créée avec succès.');
                } else {
                    toast.error('Échec de la création de l\'option.');
                }
            }
            navigate('/admin/options');
        } catch (error) {
            if (error.response) {
                // Erreurs de l'API
                const apiErrors = error.response.data.errors || {};
                setErrors(apiErrors);

                // Afficher les erreurs de l'API dans les toasts
                // Object.values(apiErrors).forEach(errArray => {
                //     errArray.forEach(err => toast.error(err));
                // });
            } else {
                // Erreurs générales (réseau, etc.)
                toast.error('Erreur lors de la soumission du formulaire. Veuillez réessayer.');
            }
            console.error('Error submitting form:', error);
        }
    };
    
    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <h2 className="text-2xl font-semibold">{id ? 'Editer une option' : 'Créer une option'}</h2>

                <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                    <Input
                        name="name"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={formData.name}
                        handleChange={handleChange}
                        label="Nom"
                    />
                    {errors.name && <p className="text-red-700">{errors.name}</p>}
                        
                    <div>
                        {/* <button className={` ${id ? 'bg-green-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-green-700 mt-2 md:mt-0' : 'bg-blue-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0'} `}> */}
                        <button className='bg-blue-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0'>
                            {id ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormOption;
