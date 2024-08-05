import Header from './Header';
import React, { useState, useEffect } from 'react';
import{Link} from 'react-router-dom'
function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function deleteOperation(id) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.warn('Delete result:', result);

            // Fetch the updated data
            getData();
        } catch (error) {
            console.error('Error during delete operation:', error);
        }
    }

    async function getData() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/list');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <Header />
            <div className="overflow-x-auto p-4">
                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="px-4 py-2 text-left text-gray-600">Id</th>
                            <th className="px-4 py-2 text-left text-gray-600">Name</th>
                            <th className="px-4 py-2 text-left text-gray-600">Price</th>
                            <th className="px-4 py-2 text-left text-gray-600">Description</th>
                            <th className="px-4 py-2 text-left text-gray-600">Image</th>
                            <th className="px-4 py-2 text-left text-gray-600">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b border-gray-200">{item.id}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{item.name}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{item.price}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{item.description}</td>
                                <td className="px-4 py-2 border-b border-gray-200">
                                    <img
                                        src={'http://127.0.0.1:8000/' + item.file_path}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 border-b border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => deleteOperation(item.id)}
                                        className="bg-red-600 px-5 py-2 text-white rounded-xl"
                                    >
                                        Delete
                                    </button>
                                    <Link to={'UpdateProduct/'+item.id}> <button
                                        type="button"
                                        onClick={() => deleteOperation(item.id)}
                                        className=" bg-green-600 px-5 py-2 text-white m-4 rounded-xl"
                                    >
                                        
                                        Update
                                    </button> </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
