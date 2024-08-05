import Header from './Header';
import React, { useState, useEffect } from 'react';

function SearchProduct() {
  const [query, setQuery] = useState(''); // Search query
  const [products, setProducts] = useState([]); // Product data
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered results

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setProducts(result);
        setFilteredProducts(result); // Initialize with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredProducts(products); // Show all products if query is empty
    } else {
      setFilteredProducts(products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ));
    }
  }, [query, products]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-4">Search Products</h1>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search by product name..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mt-4">
          {filteredProducts.length > 0 ? (
            <ul className="list-disc pl-5">
              {filteredProducts.map(product => (
                <li key={product.id} className="mb-2">
                  <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">Price: ${product.price}</p>
                    <p className="text-gray-600">Description: {product.description}</p>
                    {product.file_path && (
                      <img
                        src={`http://127.0.0.1:8000/${product.file_path}`}
                        alt={product.name}
                        className="w-32 h-32 object-cover mt-2"
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
