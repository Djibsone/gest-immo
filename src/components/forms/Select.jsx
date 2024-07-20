/**
 * @param {string} name 
 * @param {boolean} multiple
 * @param {string} className 
 * @param {string} value 
 * @param {string} label 
 * @param {(s: string) => void} handleChange  
 * @param {Array<{value: string, label: string}>} options
*/

const Select = ({ name, multiple, className, value, handleChange, label, options }) => (
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <select
            name={name}
            multiple={multiple}
            className={`block w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-400 rounded-md ${className}`}
            value={value ?? name}
            onChange={handleChange}
        >
            {options && options.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
);

export default Select;


// /**
//  * @param {string} name 
//  * @param {boolean} multiple
//  * @param {string} className 
//  * @param {Array<string>} value 
//  * @param {string} label 
//  * @param {(s: string) => void} handleChange  
//  * @param {Array<{id: string, name: string}>} options
// */

// const Select = ({ name, multiple, className, value, handleChange, label, options }) => (
//     <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
//         <select
//             name={name}
//             multiple={multiple}
//             className={`block w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-400 rounded-md ${className}`}
//             value={value}
//             onChange={handleChange}
//         >
//             {options && options.map(option => (
//                 <option key={option.id} value={option.id}>{option.name}</option>
//             ))}
//         </select>
//     </div>
// );

// export default Select;


