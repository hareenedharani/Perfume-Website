
import React, { useState, useEffect } from 'react';
import Category_product from '../Category_product/Category_product';
import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log('Error fetching categories:', error);
        setError('Failed to load categories. Please try again later.');
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  if (selectedCategoryId) {
    return <Category_product categoryId={selectedCategoryId} />;
  }

  return (
    <div className="category">
      <h1 className="header">SHOP BY CATEGORY</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="categories-row">
          {categories.map((category) => (
            <div key={category.id} className="category-item" onClick={() => handleCategoryClick(category.id)}>
              <img
                src={category.images ? category.images[0] : 'default-image-path.jpg'} // Fallback for Images
                alt={category.name || 'Category'} // Fallback for Name
                className="category-image"
                style={{ width: '100%', height: 'auto' }}
              />
              <h3 className="category-name">{category.name}</h3> {/* Display category name */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
