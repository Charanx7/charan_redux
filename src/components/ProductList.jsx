
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductInfo = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const AddToWishlistButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5000/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>Product List</Title>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductInfo>{product.name} - ${product.price}</ProductInfo>
          <AddToWishlistButton onClick={() => dispatch(addToWishlist(product))}>
            Add to Wishlist
          </AddToWishlistButton>
        </ProductCard>
      ))}
    </Container>
  );
};

export default ProductList;

