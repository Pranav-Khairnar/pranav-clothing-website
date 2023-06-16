import SHOP_DATA from '../../../shop-data.json'
import { useContext } from 'react';
import { ProductContext } from '../../contexts/products-context';
import ProductCard from '../../product-card/product-card-component';
import './shop-component-styles.scss';

const Shop = () => {
    const {products} = useContext(ProductContext);
    return(
        <div className='products-container'>
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default Shop;