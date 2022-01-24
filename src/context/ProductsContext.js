import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
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
  ]);

  //
  const toggleFavorite = (productId) => {
    setProductsList((currentProductList) => {
      //
      const prodIndex = currentProductList.findIndex((p) => p.id === productId);
      console.log({ prodIndex });
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      console.log({ newFavStatus });
      const updatedProducts = [...currentProductList];
      console.log({ updatedProducts });
      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus,
      };

      console.log({ updatedProducts });
      return updatedProducts;
    });
  };
  //
  return (
    <ProductsContext.Provider
      value={{ products2: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
//test
