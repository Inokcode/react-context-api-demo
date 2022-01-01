import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
});

export default (props) => {
  // God bless you, ST Anthony please pray for us
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
    {
      id: 'p5',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products2: productsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
