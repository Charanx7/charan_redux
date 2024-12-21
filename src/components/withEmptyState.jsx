import React from 'react';
import styled from 'styled-components';


const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  color: #555;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const withEmptyState = WrappedComponent => {
  return props => {
    if (!props.items || props.items.length === 0) {
      return (
        <EmptyStateContainer>
          No Items Found
        </EmptyStateContainer>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default withEmptyState;
