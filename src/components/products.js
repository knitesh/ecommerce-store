import {   
    Box,
    SimpleGrid,
  } from "@chakra-ui/react";

import ProductCard from './product-card';
const Products =({products})=>{
    return (<Box mt={4}>
        <SimpleGrid
          minChildWidth="300px"
          align="center"
          justify="center"
          spacing="40px"
          mb={32}
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />            
          ))}
        </SimpleGrid>
      </Box>)
}

export default Products;