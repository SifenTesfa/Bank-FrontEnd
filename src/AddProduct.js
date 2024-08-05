import React, { useState } from 'react';
import Header from './Header';
function AddProduct  () {
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

async  function addProduct(){
    console.warn(name,file,price,description)
    const formData = new FormData();
    formData.append('file',file);
    formData.append('price',price);
    formData.append('name',name);
    formData.append('description',description);
    let result = await fetch('http://127.0.0.1:8000/api/addProduct',{
      method:'POST',
      body:formData 
});
alert('Data has been saved')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('File:', file);
    console.log('Price:', price);
    console.log('Description:', description);
  };
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <input
            type="text" placeholder='Name'
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text" placeholder='Price'
            id="price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text" placeholder='Description'
            id="description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
        onClick={addProduct}
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         Add Product
        </button>
       
       </form> </div> </div>
    )
  }
  
  export default AddProduct