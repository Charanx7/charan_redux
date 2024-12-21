
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice'; // Ensure correct action
import styled from 'styled-components'; // Import styled-components

// Styled Components
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

const WishlistItem = styled.div`
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
  margin: 0;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #777;
`;

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist); // Make sure `wishlist` is correctly mapped from Redux state
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Wishlist</Title>
      {wishlist.length === 0 ? (
        <EmptyMessage>Your wishlist is empty. Add some items!</EmptyMessage>
      ) : (
        wishlist.map((product) => (
          <WishlistItem key={product.id}>
            <ProductInfo>
              {product.name} - ${product.price}
            </ProductInfo>
            <RemoveButton onClick={() => dispatch(removeFromWishlist(product))}>
              Remove
            </RemoveButton>
          </WishlistItem>
        ))
      )}
    </Container>
  );
};

export default Wishlist;
