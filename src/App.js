import { useState, useEffect } from 'react';
import Butter from "buttercms"
import {   
  Container,
  Divider,
} from "@chakra-ui/react";
import ViewCart from './components/view-cart';
import Products from './components/products';

const butter = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY)

const App=()=>{

  const [products, setProducts] = useState([]);

  const loadProducts = async ()=> {
    const response = await butter.content.retrieve(["techtee"], {
      order: "name",
    });

    const {data} = await response.data;
    const allProducts = data.techtee;
    setProducts(allProducts);
  }

  // useEffect to load the products
  useEffect(() => {  
    loadProducts();   
  }, []);

  return (
    <Container maxW="container.xl" h="100vh" >
      <ViewCart />      
      <Divider />
      <Products products={products}/>      
    </Container>
  );
}

export default App;
