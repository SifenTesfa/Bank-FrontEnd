
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    file: null,
    file_path: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('description', data.description);
      if (data.file) {
        formData.append('file', data.file);
      }

      const response = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Update result:', result);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
     
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 font-bold">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={data.price || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-bold">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={data.description || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-gray-700 font-bold">File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {data.file_path && (
            <img
              src={'http://127.0.0.1:8000/' + data.file_path}
              alt={data.name}
              className="w-16 h-16 object-cover rounded mt-2"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
